const axios = require('axios');
import { GoogleMapApi } from '../googleapi/googlemapapi';
import { Url } from '../url/url';


export class UMath {
  static getDistance0 = async (beginLat: number, beginLng: number, endLat: number, endLng: number): Promise<number> => {
    let url = new Url();
    url.instance(GoogleMapApi.GOOGLEMAP_BASEURL);
    url.addParam("origin", beginLat + "," + beginLng);
    url.addParam("destination", endLat + "," + endLng);
    url.addParam("alternatives", "" + true);
    console.log(url.toString());
    try {
      let result = await axios.get(url.toString());
      let routes = result.data.routes;
      let length = routes.length;
      let i, j;
      let minDistance = 999999999;
      for (i = 0; i < length; i++) {
        let legs = routes[i].legs;
        let lengthLegs = legs.length;
        for (j = 0; j < lengthLegs; j++) {
          if (legs[j].distance.value < minDistance) {
            minDistance = legs[j].distance.value;
          }
        }

      }
      return minDistance;
    } catch (err) {
      return Promise.reject(err);
    }
  }
}
