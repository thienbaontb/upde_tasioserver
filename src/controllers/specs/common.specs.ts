import {OperationObject, RequestBodyObject} from 'openapi3-ts';
import { OPERATION_SECURITY_SPEC } from "../../utils/security-specs/security-spec";


export const responseSuccess: OperationObject = {
  responses: {
    '200': {
      description: 'Success',
    },
  },
};

export const requestBodyUpload: RequestBodyObject = {
  description: 'multipart/form-data value.',
  required: true,
  content: {
    'multipart/form-data': {
      'x-parser': 'stream',
      schema: {type: 'object'},
    },
  },
};
