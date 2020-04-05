export class Url {
  private mBaseUrl: string;
  private mUrl: string = "";

  public instance(baseUrl: string) {
    this.mBaseUrl = baseUrl;
    this.mUrl = this.mBaseUrl;
  }

  public reset() {
    this.mUrl = this.mBaseUrl;
  }

  public addParam(param: string, value: string): void {
    this.mUrl += "&" + param + "=" + value;
  }

  public getUrl(): string {
    return this.mUrl;
  }
}
