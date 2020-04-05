import { File } from '../files';
import * as path from "path";

export class Increment {
  private mSerial: number = 0;
  private mFilename: string = "";
  public constructor(filename: string) {
    this.mFilename = filename;
  }

  public getValue = async (): Promise<number> => {
    try {
      if (this.mSerial === 0) {
        let serial = await this.readSerialFromFile();
        this.mSerial = parseInt("" + serial) + 1;
      } else {
        this.mSerial++;
      }
      this.writeSerialToFile(this.mSerial);
      return this.mSerial;
    } catch (err) {
      throw err;
    }
  }

  private writeSerialToFile = async (serial: number) => {
    try {
      return File.writeFile(path.join(__dirname, `${this.mFilename}.txt`), serial);
    } catch (err) {
      return Promise.reject(err);
    }
  };

  private readSerialFromFile = async () => {
    try {
      return await File.readFile(path.join(__dirname, `${this.mFilename}.txt`));
    } catch (err) {
      if (err.code === 'ENOENT') {
        return 0;
      }
      return Promise.reject(err);
    }
  };
}
