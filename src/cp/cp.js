import { showCurrentDirectory } from '../current-directory.js';
import { createWriteStream, createReadStream } from 'fs';
import { cwd } from 'node:process';

export const copyFile = async (pathFile, pathDirectory) => {
  const file = cwd() + '\\' + pathFile;
  const directory = cwd() + '\\' + pathDirectory;

  const readableStream = createReadStream(file);
  const writableStream = createWriteStream(directory, { flags: 'r' });

  readableStream.on('data', (chunk) => {
    writableStream.write(chunk);
  });

  readableStream.on('error', () => {
    console.log('Operation failed');
  });

  writableStream.on('error', () => {
    console.error('Operation failed');
  });

  showCurrentDirectory();
}