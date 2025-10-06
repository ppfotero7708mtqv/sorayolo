## Getting Started

## Learn More

### Tech stack:

- React []()
- Nextjs (app router)
- tailwind
- typescript

UI:

- Shadcn-ui
- Nextui `npm i @nextui-org/react framer-motion`
- Next-theme [url](https://github.com/pacocoursey/next-themes#readme)

Lib:

- supertoken : auth
- zustand : status manage
- i18n : multi language

* icon ： react-icon 或者直接使用 svg

> others: look at package.json dependencies

### Todo:

- [x] using [react-i18next tutorial](https://i18nexus.com/tutorials/nextjs/react-i18next)

references resources:

- [i18next](https://www.i18next.com/overview/supported-frameworks)
- [next-i18next github repo](https://github.com/i18next/next-i18next)
- [i18n with Next.js 13/14 and app directory / App Router (an i18next guide)](https://locize.com/blog/next-app-dir-i18n/)

```
i18nexus pull

需要在 .env 中提供 key
```

### Git Rules

```
<type>(<scope>): <subject>
// 注意冒号 : 空格
// 如 feat(miniprogram): description
```

- feat - 新功能 feature
- fix - 修复 bug
- docs - 文档注释
- style - 代码格式(不影响代码运行的变动)
- refactor - 重构、优化(既不增加新功能，也不是修复bug)
- perf - 性能优化
- test - 增加测试
- chore - 构建过程或辅助工具的变动
- revert - 回退
- build - 打包

### npm & yarn mirror

npm config set registry https://registry.npmmirror.com/

- yarn < 2.x

yarn config set registry https://registry.npmmirror.com/

yarn config set npmRegistryServer https://registry.npmmirror.com/

### husky

https://gist.github.com/lucas-barake/3f81da4057a2d6517cd0404bd95fdd23
