import { stdin as input, stdout as output, chdir } from 'node:process';
import { moveUpFromTheCurrentDirectory } from './up/up.js';
import { exitTheFileManager } from './exit/exit.js';
import { outputGreeting } from './start/start.js';
import * as readline from 'node:readline';
import { homedir } from 'node:os';
import { outputList } from './ls/ls.js';


chdir(homedir());
outputGreeting();

const rl = readline.createInterface({ input, output });

rl.on('line', (input) => {

  if (input === 'up') {
    moveUpFromTheCurrentDirectory();
  }

  else if (input === 'ls') {
    outputList();
  }

  else if (input === '.exit') {
    rl.close();
    exitTheFileManager();
  }

  else console.log('Invalid input');
});

rl.on('SIGINT', () => {
  rl.close();
  exitTheFileManager();
});