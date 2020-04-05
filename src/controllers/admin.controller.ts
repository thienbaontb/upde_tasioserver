import { post, requestBody } from '@loopback/rest';
import * as specs from "./specs/common.specs";
import { repository } from "@loopback/repository";
const loopback = require('loopback');

import { AppResponse } from '../models/classes/app-response';
import { authenticate } from "@loopback/authentication";
import { inject } from '@loopback/core';
import { UserProfile, SecurityBindings } from "@loopback/security";
import { AddSalepoint, AddSupplier, AddHouse } from '../models';
import { TasioHelper } from '../utils/helper/tasiohelper';
import { TasioCheck } from '../utils/checks/tasiocheck'
import { SalepointRepository, SupplierRepository, WalletRepository } from '../repositories';

import { KeyResponse } from '../commons/key-response';
import { Init } from '../utils/inits/init';

let Constants = require('../commons/constants');
let SALEPOINT_TYPE = Constants.SALEPOINT;
let WALLET_TYPE = Constants.WALLET_TYPE;
let WALLET_STATUS = Constants.WALLET_STATUS;
let PASSWORD = Constants.PASSWORD;

export class AdminController {

  constructor(
    @repository(SalepointRepository)
    private salepointRepository: SalepointRepository,
    @repository(SupplierRepository)
    private supplierRepository: SupplierRepository,
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
      _salepoint.code = Init.SALEPOINT_CODE.getValue();
      _salepoint.adminId = currentUserProfile.id;
      _salepoint.password = PASSWORD.SALEPOINT;
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

  @post("/api/admins/addSupplier", specs.responseSuccess)
  @authenticate("jwt")
  async addSupplier(
    @inject(SecurityBindings.USER)
    currentUserProfile: UserProfile,
    @requestBody() addSupplier: AddSupplier
  ): Promise<AppResponse> {
    try {
      let _supplier = TasioHelper.convertObjectToJson(addSupplier);

      _supplier.email = _supplier.email.toLowerCase();

      if (!TasioCheck.isSymbol(_supplier.airport_symbol)) {
        return new AppResponse(KeyResponse.INVALID_AIRPORT_SYMBOL_400);
      }
      _supplier.adminId = currentUserProfile.id;
      _supplier.password = PASSWORD.SUPPLIER;

      let supplier = await this.supplierRepository.findOne({ where: { email: _supplier.email } });

      if (supplier != null) {
        return new AppResponse(KeyResponse.EXISTS_USER_400);
      }

      supplier = await this.supplierRepository.create(_supplier);

      let newWallet = await this.walletRepository.create({
        type: WALLET_TYPE.SUPPLIER,
        balance: 0,
        ownerId: supplier.id,
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

  @post("/api/admins/addHouse", specs.responseSuccess)
  @authenticate("jwt")
  async addHouse(
    @inject(SecurityBindings.USER)
    currentUserProfile: UserProfile,
    @requestBody() addHouse: AddHouse
  ): Promise<AppResponse> {
    try {
      let _house = TasioHelper.convertObjectToJson(addHouse);

      if (!TasioCheck.isSymbol(_house.airport_symbol)) {
        return new AppResponse(KeyResponse.INVALID_AIRPORT_SYMBOL_400);
      }

      let salepoint = await this.salepointRepository.findOne({ where: { code: _house.salepoint_code } });

      if (salepoint == null) {
        return new AppResponse(KeyResponse.NOT_EXISTS_SALEPOINT_400);
      }

      if (SALEPOINT_TYPE.NORMAL_HOST === salepoint.type) {
        let here = new loopback.GeoPoint({ lat: _house.lat, lng: _house.lng });
      }

      return new AppResponse(KeyResponse.CREATE_ACCOUNT_SUCCESS_200);

    } catch (err) {
      throw err;
    }
  }
}
