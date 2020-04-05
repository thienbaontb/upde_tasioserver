import { post, requestBody } from '@loopback/rest';
import * as specs from "./specs/common.specs";
import { repository } from "@loopback/repository";

import { AppResponse } from '../models/classes/app-response';
import { authenticate } from "@loopback/authentication";
import { inject } from '@loopback/core';
import { UserProfile, SecurityBindings } from "@loopback/security";
import { AddSalepoint } from '../models';
import { TasioHelper } from '../utils/helper/tasiohelper';
import { TasioCheck } from '../utils/checks/tasiocheck'
import { SalepointRepository, WalletRepository } from '../repositories';

import { KeyResponse } from '../commons/key-response';
import { Init } from '../utils/inits/init';

let Constants = require('../commons/constants');
let SALEPOINT_TYPE = Constants.SALEPOINT;
let WALLET_TYPE = Constants.WALLET;
let WALLET_STATUS = Constants.WALLET_STATUS;


export class AdminController {

  constructor(
    @repository(SalepointRepository)
    private salepointRepository: SalepointRepository,
    @repository(WalletRepository)
    private walletRepository: WalletRepository
  ) { }


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
      if (!TasioCheck.isTypeSalepoint(_salepoint.type)) {
        _salepoint.type = SALEPOINT_TYPE.NORMAL_HOST
      }
      if (!TasioCheck.isSymbol(_salepoint.airport_symbol)) {
        return new AppResponse(KeyResponse.INVALID_AIRPORT_SYMBOL_400);
      }
      if (!_salepoint.is_debt || typeof _salepoint.is_debt !== 'boolean') {
        _salepoint.is_debt = false;
      }
      let salepoint = await this.salepointRepository.findOne({ where: { email: _salepoint.email } });
      if (salepoint != null) {
        return new AppResponse(KeyResponse.EXISTS_USER_400);
      }
      _salepoint.code = Init.SERIAL_PARTNER.getValue();

      salepoint = await this.salepointRepository.create(_salepoint);

      let newWallet = await this.walletRepository.create({
        type: WALLET_TYPE.SALEPOINT,
        balance: 0,
        ownerId: salepoint.id,
        status: WALLET_STATUS.ACTIVE,
        active_at: Date.now()
      })

      if (!newWallet) {
        return new AppResponse(KeyResponse.CREATE_WALLET_FAIL_401);
      }

      return new AppResponse(KeyResponse.CREATE_ACCOUNT_SUCCESS_200);

    } catch (err) {
      throw err;
    }
  }
}
