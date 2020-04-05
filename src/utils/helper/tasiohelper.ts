export class TasioHelper {
  static convertObjectToJson(o: Object) {
    return JSON.parse(JSON.stringify(o));
  }
}
