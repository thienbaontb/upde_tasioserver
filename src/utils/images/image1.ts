let base64ToImage = require("base64-to-image");
import crypto = require("crypto");
import path = require("path");
import * as fs from "fs";
import { File } from '../files';
import { Constant } from "../../commons/constans";
const { FileServiceConstants, DIR_IMAGE, TYPE_USER } = Constant;
import { ImageBackup } from "../backups";
import * as util from "util";

export class Image {
  private static saveImage = async (
    base64Str: string,
    path: string,
    fileName: string,
    type: string
  ) => {
    let optionalObj = { fileName: fileName, type: type };

    let info = await base64ToImage(base64Str, path, optionalObj);
    let fileId = await ImageBackup.runBackup(`${path}${info.fileName}`);
    console.log("fileId", fileId);
    return fileId;
  };

  static uploadImageForAppointment = async (
    datas: string[],
    stationId: string
  ) => {
    let arr: string[] = [];
    let _path = path.join(
      FileServiceConstants.TEMP_DIR,
      `${DIR_IMAGE.APPOINTMENT}/${TYPE_USER.STATION}/${stationId}/`
    );

    console.log("fs.existsSync(_path)", fs.existsSync(_path));
    File.existsDir(_path);

    console.log("abc   abc");
    console.log("path", _path);
    await datas.forEach(async (data) => {
      
    });
    for (let i in datas){
      const name = crypto.randomBytes(16).toString("Hex");
      const date = new Date();
      const filename = name + "-" + date.getTime();
      let fileId = await Image.saveImage(datas[i], _path, filename, "png");
      console.log("bao.nt", "fileId", fileId);
      arr.push(
        util.format(
          `${Constant.IMAGE_URL}`,
          fileId
        )
      );
    }
    console.log("arr", arr);
    return arr;
  };

  static uploadAvatar = async (image: string, stationId: string) => {
    let _path = path.join(
      FileServiceConstants.TEMP_DIR,
      `${DIR_IMAGE.AVATAR}/${TYPE_USER.RECEPTIONIST}/${stationId}/`
    );
    File.existsDir(_path);
    const name = crypto.randomBytes(16).toString("Hex");
    const date = new Date();
    const filename = name + "-" + date.getTime();
    let fileId = await Image.saveImage(image, _path, filename, "png");
    return util.format(
      `${Constant.IMAGE_URL}`,
      fileId
    );
  };
}
