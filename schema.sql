-- D1 建表 SQL（在 Cloudflare 控制台 D1 数据库里执行一次）
CREATE TABLE IF NOT EXISTS subscribers (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT NOT NULL UNIQUE,
  travel_date TEXT,
  device_type TEXT,
  lang TEXT,
  source_url TEXT,
  created_at TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_subscribers_created ON subscribers(created_at);
