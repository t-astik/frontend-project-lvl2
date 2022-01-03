#!/usr/bin/env node

import { Command } from 'commander';
import process from 'process';
import genDiff from '../src/index.js';

const program = new Command();
program
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1')
  .helpOption('-h, --help', 'output usage information')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format [type]', 'output format', 'stylish')
  .action((file1, file2) => {
    console.log(genDiff(file1, file2, program.opts().format));
  })
  .parse(process.argv);
