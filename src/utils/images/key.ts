import { BindingKey } from '@loopback/context';
import { FileService } from './image';
import {
    
    RequestBodyObject,
  } from '@loopback/rest';

const FORM_DATA = 'multipart/form-data';
export const requestBodyFileUpload: RequestBodyObject = {
  description: 'multipart/form-data value.',
  required: true,
  content: {
    [FORM_DATA]: {
      'x-parser': 'stream',
      schema: {
        type: 'object',
      },
    },
  },
};


export namespace FileServiceBindings {
    export const FILE_SERVICE = BindingKey.create<FileService>(
        'services.fileservice',
    );
}
