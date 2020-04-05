interface IAppResponse {
  code?: number;
  message?: string;
  key?: string;
  data?: any;
}

export class AppResponse {
  code?: number;
  message: string;
  key: string;
  // tslint:disable-next-line:no-any
  data: any;

  constructor(data?: IAppResponse) {
    this.code = (data && data.code) || undefined;
    this.message = (data && data.message) || '';
    this.key = (data && data.key) || '';
    this.data = (data && data.data) || undefined;

    if (this.code == null) {
      this.code = Number.parseInt(this.key.substring(this.key.length - 3));
    }

    // if (this.message === '') {
    //   switch (this.code) {
    //     case 200:
    //       this.message = 'Success';
    //       this.key = 'success';
    //       break;
    //     case 201:
    //       this.message = 'Create success';
    //       this.key = 'create_success';
    //       break;
    //     case 400:
    //       this.message = 'Bad Request';
    //       this.key = 'bad_request';
    //       break;
    //     case 401:
    //       this.message = 'Unauthorized';
    //       this.key = 'unauthorized';
    //       break;
    //     case 404:
    //       this.message = 'Not found';
    //       this.key = 'not_found';
    //       break;
    //     case 500:
    //       this.message = 'Server error';
    //       this.key = 'server_error';
    //       break;
    //     default:
    //       this.message = 'Error';
    //       this.key = 'error';
    //   }
    // }
  }
}
