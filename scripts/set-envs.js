const { writeFileSync, mkdirSync } = require('fs');
//import 'dotenv/config'
require('dotenv').config()


const targetPath = './src/environments/environment.ts';

const envFileContent = `
  export const environment={
    BASE_URL_API:"${process.env['BASE_URL_API']}",
  };

`;
mkdirSync('src/environments', { recursive: true });
writeFileSync(targetPath, envFileContent);
