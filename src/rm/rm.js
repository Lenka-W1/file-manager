import { showCurrentDirectory } from '../current-directory.js';
import { cwd } from 'node:process';
import { rm } from 'node:fs/promises';

export const removeFile = async (path) => {
  const file = cwd() + '\\' + path;
  try {
    await rm(file);
    showCurrentDirectory();
  }
  catch (error) {
    console.error('Operation failed');
  }
}