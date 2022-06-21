/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.32.5
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { Address, AddressFromJSON, AddressToJSON } from './Address'
import { Currency, CurrencyFromJSON, CurrencyToJSON } from './Currency'

/**
 *
 * @export
 * @interface Location
 */
export interface Location {
  /**
   *
   * @type {string}
   * @memberof Location
   */
  readonly id?: string
  /**
   * The name of the location
   * @type {string}
   * @memberof Location
   */
  name?: string | null
  /**
   * The business name of the location
   * @type {string}
   * @memberof Location
   */
  business_name?: string | null
  /**
   *
   * @type {Address}
   * @memberof Location
   */
  address?: Address
  /**
   * Status of this location.
   * @type {string}
   * @memberof Location
   */
  status?: LocationStatus
  /**
   *
   * @type {string}
   * @memberof Location
   */
  merchant_id?: string
  /**
   *
   * @type {Currency}
   * @memberof Location
   */
  currency?: Currency | null
  /**
   *
   * @type {string}
   * @memberof Location
   */
  readonly updated_by?: string | null
  /**
   *
   * @type {string}
   * @memberof Location
   */
  readonly created_by?: string | null
  /**
   *
   * @type {Date}
   * @memberof Location
   */
  readonly updated_at?: Date
  /**
   *
   * @type {Date}
   * @memberof Location
   */
  readonly created_at?: Date
}

/**
 * @export
 * @enum {string}
 */
export enum LocationStatus {
  active = 'active',
  inactive = 'inactive',
  other = 'other'
}

export function LocationFromJSON(json: any): Location {
  return LocationFromJSONTyped(json, false)
}

export function LocationFromJSONTyped(json: any, ignoreDiscriminator: boolean): Location {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    name: !exists(json, 'name') ? undefined : json['name'],
    business_name: !exists(json, 'business_name') ? undefined : json['business_name'],
    address: !exists(json, 'address') ? undefined : AddressFromJSON(json['address']),
    status: !exists(json, 'status') ? undefined : json['status'],
    merchant_id: !exists(json, 'merchant_id') ? undefined : json['merchant_id'],
    currency: !exists(json, 'currency') ? undefined : CurrencyFromJSON(json['currency']),
    updated_by: !exists(json, 'updated_by') ? undefined : json['updated_by'],
    created_by: !exists(json, 'created_by') ? undefined : json['created_by'],
    updated_at: !exists(json, 'updated_at') ? undefined : new Date(json['updated_at']),
    created_at: !exists(json, 'created_at') ? undefined : new Date(json['created_at'])
  }
}

export function LocationToJSON(value?: Location | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    name: value.name,
    business_name: value.business_name,
    address: AddressToJSON(value.address),
    status: value.status,
    merchant_id: value.merchant_id,
    currency: CurrencyToJSON(value.currency)
  }
}
