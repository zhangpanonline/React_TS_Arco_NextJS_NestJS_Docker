# 路由和菜单动态生成与管理

路由表

```javascript
export const routes = [
  {
    name: 'menu.dashboard', // 菜单名，语言包中的 key 值：locale['menu.dashboard']
    key: 'dashboard',       // 菜单项 key，也是菜单 path，也用于设置 icon
    breadcrumb: true,       // 是否显示在面包屑中
    ignore: true  // 是否渲染为菜单项，为 true 的话不会在菜单中显示，但可通过路由地址访问
  },
];
```

通过路由表生成菜单项

```javascript
// 通过 `getFlattenRoutes` 得到带有路由组件的路由的扁平数组 `flattenRoutes`，用于生成路由
function getFlattenRoutes() {
  const res = [];
  function travel(_routes) {
    _routes.forEach((route) => {
      if (route.key && !route.children) {
        route.component = lazyload(() => import(`./pages/${route.key}`));
        res.push(route);
      } else if (isArray(route.children) && route.children.length) {
        travel(route.children);
      }
    });
  }
  travel(routes);
  return res;
}
```

渲染菜单

```javascript
<Switch>
  {flattenRoutes.map((route) => {
    return <Route key={route.key} path={`/${route.key}`} component={route.component} />;
  })}
  <Redirect push to={`/${defaultRoute}`} />
</Switch>
```

# 图标库的快速引入和使用

### 1. 组件形式

### 2. `svg` 形式

​ 在 `webpack` 或 `vite` 下，通过 `svgr` 插件，引入一个 `svg 文件`，把读进来的文件转换成一个组件，从而在界面中直接使用这个组件。

### 3. `CSS` 形式 - tailwind

### 4. `iconfont`
