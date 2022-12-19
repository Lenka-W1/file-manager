import { stdin as input, stdout as output, chdir } from 'node:process';
import { moveUpFromTheCurrentDirectory } from './up/up.js';
import { exitTheFileManager } from './exit/exit.js';
import { outputGreeting } from './start/start.js';
import { addEmptyFile } from './add/add.js';
import * as readline from 'node:readline';
import { goToFolder } from './cd/cd.js';
import { outputList } from './ls/ls.js';
import { readFile } from './cat/cat.js';
import { homedir } from 'node:os';

chdir(homedir());
outputGreeting();

const rl = readline.createInterface({ input, output });

rl.on('line', (input) => {

  if (input === 'up') {
    moveUpFromTheCurrentDirectory();
  }

  else if (input.includes('cd')) {
    goToFolder(input.split(' ')[1]);
  }

  else if (input === 'ls') {
    outputList();
  }

  else if (input.includes('cat')) {
    readFile(input.split(' ')[1]);
  }

  else if (input.includes('add')) {
    addEmptyFile(input.split(' ')[1]);
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