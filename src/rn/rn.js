import { showCurrentDirectory } from '../current-directory.js';
import { cwd } from 'node:process';
import { rename } from 'fs/promises';

export const renameFile = async (oldPath, newPath) => {
  const oldFile = cwd() + '\\' + oldPath;
  const newFile = cwd() + '\\' + newPath;
  try {
    await rename(oldFile, newFile);
    showCurrentDirectory();
  }
  catch (error) {
    console.error('Operation failed');
  }
}