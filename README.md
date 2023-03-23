## 项目涉及到的技术
* [vite](https://vitejs.dev)
* [monorepo]
* [React](https://react.dev/)
* [Playwright](https://playwright.dev/)
* [PnpM](https://pnpm.io/)
* [TypeScript](https://www.typescriptlang.org/)

## 代码提交规范
### 1. 使用commitizen规范commit提交格式
commitizen 的作用主要是为了生成标准化的 commit message，符合 Angular 规范。  
如果需要在项目中使用 commitizen 生成符合 AngularJS 规范的提交说明，还需要安装 cz-conventional-changelog 适配器：
```bash
$ pnpm install -wD commitizen cz-conventional-changelog
```
工程根目录下增加 `.czrc` 文件：
```js
{
  "path": "cz-conventional-changelog"
}
```
提交代码时，使用 `git cz` 代替 `git commit`

### 2. 代码提交规范检查
安装 commitlint 和 husky：
```bash
$ pnpm install -wD @commitlint/cli @commitlint/config-conventional husky
```
在工程根目录下增加 commitlint.config.js 配置文件，指定 commitlint 的校验配置文件：
```js
"scripts": {
  "postinstall": "husky install"
}
```
该脚本会在执行完 $ pnpm install 之后自动执行，进行 husky 的初始化，执行完毕后就会在根目录下创建一个 .husky 目录。  
执行如下命令新增一个husky的hook：
```bash
$ npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'
```