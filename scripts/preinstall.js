// 这是一段 nodejs 脚本
// process 主进程
// env.npm_execpath 命令行内容
if (!/pnpm/.test(process.env.npm_execpath || '')) {
  console.warn(
    '\u001b[33mThis repository requires using pnpm as the package manager ' +
      ' for scripts to work properly.\u001b[39m\n'
  )
  process.exit(1)
}
