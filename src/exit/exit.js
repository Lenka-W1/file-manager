export const exitTheFileManager = () => {
  const prefix = '--username=';
  const args = process.argv.slice(2);

  const cliArgs = args.reduce((acc, val) => {
    if (val.includes(prefix)) {
      let value = val.slice(prefix.length);
      const prop = `Thank you for using File Manager, ${value ? value : 'stranger'}, goodbye!`;
      acc.push(prop);
    }
    return acc;
  }, []);

  console.log(cliArgs.join(', '));
} 