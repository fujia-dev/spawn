<div align="center">
  <h1>@fujia/spawn</h1>
</div>

<div align="center">

一个简单的、易用的 node.js 的 spawn 函数。

</div>

<div align="center">

[English](./README.md) | 简体中文

</div>

## 安装

使用 npm:

```sh
npm install @fujia/fetch
```

使用 yarn:

```sh
yarn add @fujia/fetch
```

## 使用

简单地使用，如下:

```ts
import { spawn, spawnAsync } from '@fujia/spawn';

spawn('npm', ['get', 'registry'], {
  stdio: 'inherit',
  shell: true,
});

async function getNpmRegistry() {
  const code = await spawnAsync('npm', ['get', 'registry'], {
    stdio: 'inherit',
    shell: true,
  });

  console.log('exec code', code);
}

getNpmRegistry();
```

## 参考资料

1. [child_process](https://nodejs.org/dist/latest-v16.x/docs/api/child_process.html).
