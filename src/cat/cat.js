import { createReadStream } from 'fs';
import { showCurrentDirectory } from '../current-directory.js';
import { cwd } from 'node:process';

export const readFile = async (path) => {
  const readableStream = createReadStream(cwd() + '\\' + path);

  readableStream.on('data', (chunk) => {
    console.log(chunk.toString());
  });

  readableStream.on('error', () => {
    console.error('Operation failed');
  });

  showCurrentDirectory();
} 