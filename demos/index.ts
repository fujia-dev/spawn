const { spawn, spawnAsync } = require('../lib');

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
