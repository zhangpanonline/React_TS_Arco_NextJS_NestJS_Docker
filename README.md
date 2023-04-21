## 项目涉及到的技术
* [vite](https://vitejs.dev)
* [monorepo](/docs//monorepo.md)
* [React](https://react.dev/)
* [Playwright](https://playwright.dev/)
* [PnpM](https://pnpm.io/)
* [TypeScript](https://www.typescriptlang.org/)
* 代码commit规范
* ESlint

## NPM 包
* [classnames](https://www.npmjs.com/package/classnames)
* [styled-components](https://www.npmjs.com/package/styled-components)
* [react-redux](https://react-redux.js.org/)
* [@reduxjs/toolkit](https://redux-toolkit.js.org/)
* [react-router-dom](https://reactrouter.com/)
* [react-hook-form](https://react-hook-form.com/)
* [ahooks](https://ahooks.js.org/hooks/use-request/index)
* [@arco-design/web-react](https://arco.design/react/docs/start)


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


## 代码规范检查
首选需要安装 eslint 和 lint-stage
```bash
$ pnpm install -wD eslint lint-staged @typescript-eslint/parser @typescript-eslint/eslint-plugin
```
在根成根目录下添加 `.eslintrc.js` 配置文件  
lint-staged 是 Git 里的概念，表示暂存区，lint-staged 表示只检查暂存区中的文件。  
package.json 中增加如下配置:
```json
"lint-staged": {
    "*.ts": [
      "eslint --fix",
      "git add"
    ]
}
```
`husky` 中增加 `pre-commit` 校验：  
```bash
$ npx husky add .husky/pre-commit "npx --no-install lint-staged"
```

*参考链接：*
* [pnpm + workspace + changesets 构建你的 monorepo 工程](https://juejin.cn/post/7098609682519949325)


## [单仓多模块管理](/docs//monorepo.md)

## [中后台开发](./docs/admin.md)

