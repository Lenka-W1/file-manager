import { chdir } from 'node:process';
import { showCurrentDirectory } from '../current-directory.js';

export const goToFolder = (path) => {
  try {
    chdir(path);
    showCurrentDirectory();
  }
  catch (error) {
    console.error('Operation failed');
  }
}