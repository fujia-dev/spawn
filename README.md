<div align="center">
  <h1>@fujia/spawn</h1>
</div>

<div align="center">

An easy-to-use spawn function of node.js.

</div>

<div align="center">

English | [简体中文](./README.zh-CN.md)

</div>

## Installing

Using npm:

```sh
npm install @fujia/spawn
```

Using yarn:

```sh
yarn add @fujia/spawn
```

## Usage

Simply to use, as follows:

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

## References

1. [child_process](https://nodejs.org/dist/latest-v16.x/docs/api/child_process.html).
