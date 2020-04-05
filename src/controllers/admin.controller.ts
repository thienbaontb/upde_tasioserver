import { post, requestBody } from '@loopback/rest';
import * as specs from "./specs/common.specs";

import { AppResponse } from '../models/classes/app-response';
import { authenticate } from "@loopback/authentication";
import { inject } from '@loopback/core';
import { UserProfile, SecurityBindings } from "@loopback/security";
import { AddSalepoint } from '../models';
import { TasioHelper } from '../utils/helper/tasiohelper';

export class AdminController {
  @post("/api/admins/addSalepoint", specs.responseSuccess)
  @authenticate("jwt")
  async addSalepoint(
    @inject(SecurityBindings.USER)
    currentUserProfile: UserProfile,
    @requestBody() addSalepoint: AddSalepoint
  ): Promise<AppResponse> {
    try {
      let _salepoint = TasioHelper.convertObjectToJson(addSalepoint);
      _salepoint.email = _salepoint.email.toLowerCase();
      
    } catch (err) {
      throw err;
    }
  }
}
