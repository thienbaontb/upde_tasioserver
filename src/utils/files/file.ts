import * as fs from 'fs';
import * as path from 'path';
const os = require("os");
let shell = require('shelljs');

export class File {
    static readFile = (srcPath: string): Promise<string> => {
        return new Promise(function (resolve, reject) {
            fs.readFile(srcPath, 'utf8', function (err: any, data: any) {
                if (err) {
                    reject(err)
                } else {
                    resolve(data);
                }
            });
        })
    }

    static writeFile = (savPath: string, data: any) => {
        return new Promise(function (resolve, reject) {
            let dirname: string = path.dirname(savPath);
            File.existsDir(dirname);
            fs.writeFile(savPath, data, function (err) {
                if (err) {
                    console.log("err");
                    reject(err)
                } else {
                    console.log("success");
                    resolve("success");
                }
            });
        })
    }

    static deleteFile = (filePath: string) => {
        return new Promise(function (resolve, reject) {
            if (fs.existsSync(filePath)) {
                fs.unlink(filePath, function (err) {
                    if (err) {
                        reject(err);
                        return;
                    }
                    resolve("deleted");
                });
                return;
            }
            resolve("deleted");
        })
    }

    static existsDir = (path: string) => {
        if (!fs.existsSync(path)) {
            if (os.type() === 'Linux') {
                shell.mkdir('-p', path);
            } else {
                fs.mkdirSync(path, { recursive: true });
            }
        }
    }
}