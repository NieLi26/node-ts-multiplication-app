import fs from "fs";
import { yarg } from "./config/plugins/args.plugin";

console.log(yarg)

const { b: base, l: limit, s: showTable } = yarg;

let message = `
================================
        Tabla del ${base}
================================

`;

for ( let i = 1; i <= limit; i++ ) {
    message += `${base} x ${i} = ${i * base}\n` 
}



// console.log(__dirname);
// console.log(process.cwd());

const outputPath = 'outputs/folder1/folder2';

fs.mkdirSync(outputPath, { recursive: true })
fs.writeFileSync(`./${ outputPath }/tabla-${base}.txt`, message)

if ( showTable ) {
    console.log(message);
}
console.log('File created!');