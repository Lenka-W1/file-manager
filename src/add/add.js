import { writeFile } from 'fs/promises';
import { showCurrentDirectory } from '../current-directory.js';
import { cwd } from 'node:process';

export const addEmptyFile = async (path) => {
  try {
    await writeFile(cwd() + '\\' + path, '');
    showCurrentDirectory();
  }
  catch (error) {
    console.error('Operation failed');
  }
}