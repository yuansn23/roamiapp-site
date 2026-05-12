module.exports = {
  content: ["./layouts/**/*.html", "./content/**/*.{html,md}"],
  // 或者显式指定绝对路径
  // content: ["D:/HUGO test/29.1_windows-amd64/hugo_0.159.1_windows-amd64/esim/layouts/**/*.html", ...],
  theme: { extend: {} },
  plugins: [require("@tailwindcss/typography")],
}