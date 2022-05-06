import cp, { CommonSpawnOptions, ChildProcess } from 'child_process';

const isWin32 = process.platform === 'win32';

export const spawn = (
  command: string,
  args: readonly string[],
  options: CommonSpawnOptions
): ChildProcess => {
  // NOTE: In window OS, it need to execute command by cmd
  const cmd = isWin32 ? 'cmd' : command;
  const cmdArgs = isWin32 ? ['/c'].concat(command, args) : args;

  return cp.spawn(cmd, cmdArgs, options || {});
};

export const spawnAsync = (
  command: string,
  args: readonly string[],
  options: CommonSpawnOptions
): Promise<number | null> => {
  return new Promise((resolve, reject) => {
    const cp = spawn(command, args, options);

    cp.on('error', (err) => {
      reject(err);
    });

    cp.on('exit', (chunk) => {
      resolve(chunk);
    });
  });
};
