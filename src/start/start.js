import { showCurrentDirectory } from '../current-directory.js';

export const outputGreeting = () => {
  const prefix = '--username=';
  const args = process.argv.slice(2);

  const cliArgs = args.reduce((acc, val) => {
    if (val.includes(prefix)) {
      let value = val.slice(prefix.length);
      const prop = `Welcome to the File Manager, ${value ? value : 'stranger'}!`;
      acc.push(prop);
    }
    return acc;
  }, []);

  console.log(cliArgs.join(', '));
  showCurrentDirectory();
} 