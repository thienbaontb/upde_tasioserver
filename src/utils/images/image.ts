import fs = require("fs");
import path = require("path");
import sharp = require("sharp");
import multer = require("multer");
import crypto = require("crypto");
import { promisify } from "util";
import { HttpErrors } from "@loopback/rest";
import { Request, Response, NextFunction } from "express-serve-static-core";
import { Constant } from "../../commons/constans";

import { FileFilterCallback } from "multer";

const { FileServiceConstants } = Constant;

const IMAGE_TYPE = [".png", ".jpg", ".jpeg"];

export class FileService {
  private static tempStorage: multer.StorageEngine;

  constructor() {
    if (!FileService.tempStorage) {
      if (!fs.existsSync(FileServiceConstants.TEMP_DIR))
        fs.mkdirSync(FileServiceConstants.TEMP_DIR, { recursive: true });
      FileService.tempStorage = multer.diskStorage({
        destination: FileServiceConstants.TEMP_DIR,
        filename: this.randomFileName
      });
    }
  }

  storege = (dir: string) => {
    let _path = path.join(FileServiceConstants.TEMP_DIR, dir);

    if (!fs.existsSync(_path)) fs.mkdirSync(_path, { recursive: true });
    return multer.diskStorage({
      destination: _path,
      filename: this.randomFileName
    });
  };

  upload = (
    uploadType: string,
    dir: string,
    fieldName: string,
    req: Request,
    res: Response
  ) => {
    let _upload =
      uploadType === Constant.UPLOAD_IMAGE_TYPE.SINGLE
        ? promisify(
            multer({
              storage: this.storege(dir),
              fileFilter: this.imageFilter,
              limits: { fileSize: FileServiceConstants.FILE_SIZE }
            }).single(fieldName)
          )
        : promisify(
            multer({
              storage: this.storege(dir),
              fileFilter: this.imageFilter,
              limits: { fileSize: FileServiceConstants.FILE_SIZE }
            }).array(fieldName, Constant.MAX_MULTI_FILE)
          );
    return new Promise<object>(async (response, reject) => {
      _upload(req, res, async err => {
        if (err) {
          reject(err);
        }
        if (req.file) {
          this.resizeImage(
            path.join(
              FileServiceConstants.TEMP_DIR,
              `${dir}/${req.file.filename}`
            )
          );
          dir = dir.replace(/\//g, "_");
          response({ body: req.body, path: `${dir}_${req.file.filename}` });
          return;
        }
        if (req.files) {
          console.log("req.files", req.files.length);
          // console.log(typeof req.files);
          let files = JSON.parse(JSON.stringify(req.files));
          let paths = files.map((file: any) => {
            dir = dir.replace(/\//g, "_");

            return `${dir}_${file.filename}`;
          });
          response({ body: req.body, paths: paths });
          this.resizeMultiImage(paths);
          return;
        }
      });
    });
  };

  configImage = async (paths: string[]) => {
    // await this.resizeMultiImage(paths);
    await this.moveMultiImage(paths, "aaa");
  };

  async uploadAvatar(
    req: Request,
    res: Response,
    fieldName: string,
    type_user: string,
    userId: string
  ): Promise<string> {
    try {
      let result = await this.upload(
        Constant.UPLOAD_IMAGE_TYPE.SINGLE,
        `${fieldName}s/${type_user}s/${userId}`,
        fieldName,
        req,
        res
      );
      return JSON.parse(JSON.stringify(result)).path;
    } catch (err) {
      return Promise.reject(err);
    }
  }

  async uploadImageForAppointment(
    req: Request,
    res: Response,
    fieldName: string,
    type_user: string,
    userId: string
  ): Promise<object> {
    try {
      console.log("abc   abc");
      return await this.upload(
        Constant.UPLOAD_IMAGE_TYPE.MULTIPLE,
        `${fieldName}s/${type_user}s/${userId}`,
        fieldName,
        req,
        res
      );
    } catch (err) {
      return Promise.reject(err);
    }
  }

  async resizeMultiImage(paths: string[]) {
    await paths.forEach(async _path => {
      await this.resizeImage(
        path.join(FileServiceConstants.TEMP_DIR, _path.replace(/\_/g, "/"))
      );
    });
    return;
  }

  async moveMultiImage(sourcePaths: string[], targetDir: string) {
    sourcePaths.forEach(async _path => {
      await this.resizeImage(
        path.join(FileServiceConstants.TEMP_DIR, _path.replace(/\_/g, "/"))
      );
      let arr: string[] = _path.split("_");
      let filename: string = arr[arr.length - 1];
      await this.moveFile(
        path.join(FileServiceConstants.TEMP_DIR, _path.replace(/\_/g, "/")),
        path.join(FileServiceConstants.TEMP_DIR, targetDir),
        filename
      );
    });
    return;
  }

  moveFile(src: string, des: string, filename: string) {
    if (!fs.existsSync(des)) fs.mkdirSync(des, { recursive: true });
    if (fs.existsSync(src)) fs.renameSync(src, path.join(des, filename));
  }

  async resizeImage(src: string) {
    const buffer = await sharp(src)
      .resize(256, 256)
      .toBuffer();
    await sharp(buffer).toFile(src);
  }

  private imageFilter(
    req: Express.Request,
    file: Express.Multer.File,
    callback: FileFilterCallback
  ) {
    console.log("size", file.size);
    const err: any =
      (file.mimetype &&
      file.mimetype.startsWith("image") &&
      IMAGE_TYPE.includes(path.extname(file.originalname))
        ? null
        : new HttpErrors.UnsupportedMediaType("File must be image type.")) ||
      null;
    file.size <= FileServiceConstants.FILE_SIZE
      ? null
      : new HttpErrors.UnprocessableEntity("File too large");

    callback(err, err ? false : true);
  }

  private randomFileName(
    req: Express.Request,
    file: Express.Multer.File,
    callback: (error: Error | null, filename: string) => void
  ) {
    const name = crypto.randomBytes(16).toString("Hex");
    const date = new Date();
    const filename =
      name + "-" + date.getTime() + path.extname(file.originalname);
    console.log("filename");
    callback(null, filename);
  }
}
