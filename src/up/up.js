import { showCurrentDirectory } from '../current-directory.js';
import { chdir } from 'node:process';

export const moveUpFromTheCurrentDirectory = async () => {
  try {
    chdir('..');
    showCurrentDirectory();
  }
  catch (error) {
    console.error('Operation failed');
  }
}