/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.3.3
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { Address, AddressFromJSON, AddressToJSON } from './Address'
import { Currency, CurrencyFromJSON, CurrencyToJSON } from './Currency'
import { ServiceCharge, ServiceChargeFromJSON, ServiceChargeToJSON } from './ServiceCharge'

/**
 *
 * @export
 * @interface Merchant
 */
export interface Merchant {
  /**
   * A unique identifier for an object.
   * @type {string}
   * @memberof Merchant
   */
  readonly id?: string
  /**
   * The name of the merchant
   * @type {string}
   * @memberof Merchant
   */
  name?: string | null
  /**
   *
   * @type {Address}
   * @memberof Merchant
   */
  address?: Address
  /**
   *
   * @type {string}
   * @memberof Merchant
   */
  owner_id?: string
  /**
   * The main location ID of the merchant
   * @type {string}
   * @memberof Merchant
   */
  main_location_id?: string | null
  /**
   * Status of this merchant.
   * @type {string}
   * @memberof Merchant
   */
  status?: MerchantStatus
  /**
   *
   * @type {Array<ServiceCharge>}
   * @memberof Merchant
   */
  service_charges?: Array<ServiceCharge>
  /**
   * language code according to ISO 639-1. For the United States - EN
   * @type {string}
   * @memberof Merchant
   */
  language?: string | null
  /**
   *
   * @type {Currency}
   * @memberof Merchant
   */
  currency?: Currency | null
  /**
   * When custom mappings are configured on the resource, the result is included here.
   * @type {object}
   * @memberof Merchant
   */
  readonly custom_mappings?: object | null
  /**
   * The user who last updated the object.
   * @type {string}
   * @memberof Merchant
   */
  readonly updated_by?: string | null
  /**
   * The user who created the object.
   * @type {string}
   * @memberof Merchant
   */
  readonly created_by?: string | null
  /**
   * The date and time when the object was last updated.
   * @type {Date}
   * @memberof Merchant
   */
  readonly updated_at?: Date | null
  /**
   * The date and time when the object was created.
   * @type {Date}
   * @memberof Merchant
   */
  readonly created_at?: Date | null
}

/**
 * @export
 * @enum {string}
 */
export enum MerchantStatus {
  active = 'active',
  inactive = 'inactive',
  other = 'other'
}

export function MerchantFromJSON(json: any): Merchant {
  return MerchantFromJSONTyped(json, false)
}

export function MerchantFromJSONTyped(json: any, ignoreDiscriminator: boolean): Merchant {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    name: !exists(json, 'name') ? undefined : json['name'],
    address: !exists(json, 'address') ? undefined : AddressFromJSON(json['address']),
    owner_id: !exists(json, 'owner_id') ? undefined : json['owner_id'],
    main_location_id: !exists(json, 'main_location_id') ? undefined : json['main_location_id'],
    status: !exists(json, 'status') ? undefined : json['status'],
    service_charges: !exists(json, 'service_charges')
      ? undefined
      : (json['service_charges'] as Array<any>).map(ServiceChargeFromJSON),
    language: !exists(json, 'language') ? undefined : json['language'],
    currency: !exists(json, 'currency') ? undefined : CurrencyFromJSON(json['currency']),
    custom_mappings: !exists(json, 'custom_mappings') ? undefined : json['custom_mappings'],
    updated_by: !exists(json, 'updated_by') ? undefined : json['updated_by'],
    created_by: !exists(json, 'created_by') ? undefined : json['created_by'],
    updated_at: !exists(json, 'updated_at')
      ? undefined
      : json['updated_at'] === null
      ? null
      : new Date(json['updated_at']),
    created_at: !exists(json, 'created_at')
      ? undefined
      : json['created_at'] === null
      ? null
      : new Date(json['created_at'])
  }
}

export function MerchantToJSON(value?: Merchant | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    name: value.name,
    address: AddressToJSON(value.address),
    owner_id: value.owner_id,
    main_location_id: value.main_location_id,
    status: value.status,
    service_charges:
      value.service_charges === undefined
        ? undefined
        : (value.service_charges as Array<any>).map(ServiceChargeToJSON),
    language: value.language,
    currency: CurrencyToJSON(value.currency)
  }
}
