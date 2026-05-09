/** @type {import('tailwindcss').Config} */
module.exports = {
  // 这里极其重要！必须填对你的 HTML 文件所在的路径
  content: [
    "./layouts/**/*.html",
    "./content/**/*.md",
    "./content/**/*.html",
    "./static/**/*.html", // 如果你的测试 HTML 放在 static 里，加上这句
    "./*.html"            // 如果你的 HTML 就在根目录，加上这句
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}