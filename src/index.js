import { stdin as input, stdout as output, chdir } from 'node:process';
import  { showCurrentDirectory } from './current-directory.js';
import { exitTheFileManager } from './exit/exit.js';
import { outputGreeting } from './start/start.js';
import * as readline from 'node:readline';
import { homedir } from 'node:os';

chdir(homedir());
outputGreeting();
showCurrentDirectory();

const rl = readline.createInterface({ input, output });

rl.on('line', (input) => {

  if (input === '.exit') { 
    rl.close();
    exitTheFileManager();
  } 
});
  
rl.on('SIGINT', () => {
  rl.close();
  exitTheFileManager();
});