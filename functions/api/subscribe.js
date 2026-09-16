// Cloudflare Pages Function: POST /api/subscribe
// 收集邮箱 → 写入 D1（binding 名须为 "DB"）
export async function onRequestPost(context) {
  const { request, env } = context;

  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }

  // 蜜罐：机器人会填隐藏字段，静默丢弃（不落库）
  if (body._honeypot) {
    return Response.json({ ok: true });
  }

  const email = String(body.email || "").trim().toLowerCase();
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return Response.json({ ok: false, error: "Please enter a valid email." }, { status: 400 });
  }

  const travel_date = String(body.travel_date || "").slice(0, 20);
  const device_type = String(body.device_type || "").slice(0, 20);
  const lang = String(body.lang || "").slice(0, 10);
  const source_url = String(body.source_url || "").slice(0, 500);

  if (!env.DB) {
    return Response.json({ ok: false, error: "Database not configured yet." }, { status: 500 });
  }

  try {
    await env.DB.prepare(
      "INSERT INTO subscribers (email, travel_date, device_type, lang, source_url, created_at) VALUES (?, ?, ?, ?, ?, ?)"
    ).bind(email, travel_date, device_type, lang, source_url, new Date().toISOString()).run();
    return Response.json({ ok: true });
  } catch (e) {
    // 邮箱重复（UNIQUE 约束）等，按成功处理，避免前端报错
    return Response.json({ ok: true });
  }
}
