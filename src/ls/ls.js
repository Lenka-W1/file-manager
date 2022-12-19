import { showCurrentDirectory } from '../current-directory.js';
import { readdir } from 'fs/promises';
import { cwd } from 'node:process';

export const outputList = async () => {
  try {
    const files = await readdir(cwd(), { withFileTypes: true });
    console.table(
      files.map(el => ({ Name: el.name, Type: el.isFile() ? 'file' : 'directory' }))
      .sort(a => a.Type === 'file' ? 1 : -1)
    );
    showCurrentDirectory();
  }
  catch (error) {
    console.error('Operation failed')
  }
}