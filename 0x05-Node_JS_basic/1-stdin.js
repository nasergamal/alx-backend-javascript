process.stdout.write('Welcome to Holberton School, what is your name?\n');

if (process.stdin.isTTY) {
  process.stdin.on('readable', () => {
    const name = process.stdin.read();
    process.stdout.write(`Your name is: ${name}`);
    process.exit();
  });
} else {
  process.stdin.on('readable', () => {
    const name = process.stdin.read();
    process.stdout.write(`Your name is: ${name}`);
    process.exit();
  });
  process.on('exit', () => {
    process.stdout.write('This important software is now closing\n');
  });
}
