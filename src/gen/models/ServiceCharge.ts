/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.61.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { Currency, CurrencyFromJSON, CurrencyToJSON } from './Currency'

/**
 *
 * @export
 * @interface ServiceCharge
 */
export interface ServiceCharge {
  /**
   *
   * @type {string}
   * @memberof ServiceCharge
   */
  readonly id?: string
  /**
   * Service charge name
   * @type {string}
   * @memberof ServiceCharge
   */
  name?: string
  /**
   *
   * @type {number}
   * @memberof ServiceCharge
   */
  amount?: number
  /**
   * Service charge percentage. Use this field to calculate the amount of the service charge. Pass a percentage and amount at the same time.
   * @type {number}
   * @memberof ServiceCharge
   */
  percentage?: number
  /**
   *
   * @type {Currency}
   * @memberof ServiceCharge
   */
  currency?: Currency | null
  /**
   *
   * @type {boolean}
   * @memberof ServiceCharge
   */
  active?: boolean | null
  /**
   * The type of the service charge.
   * @type {string}
   * @memberof ServiceCharge
   */
  type?: ServiceChargeType
}

/**
 * @export
 * @enum {string}
 */
export enum ServiceChargeType {
  auto_gratuity = 'auto_gratuity',
  custom = 'custom'
}

export function ServiceChargeFromJSON(json: any): ServiceCharge {
  return ServiceChargeFromJSONTyped(json, false)
}

export function ServiceChargeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ServiceCharge {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    name: !exists(json, 'name') ? undefined : json['name'],
    amount: !exists(json, 'amount') ? undefined : json['amount'],
    percentage: !exists(json, 'percentage') ? undefined : json['percentage'],
    currency: !exists(json, 'currency') ? undefined : CurrencyFromJSON(json['currency']),
    active: !exists(json, 'active') ? undefined : json['active'],
    type: !exists(json, 'type') ? undefined : json['type']
  }
}

export function ServiceChargeToJSON(value?: ServiceCharge | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    name: value.name,
    amount: value.amount,
    percentage: value.percentage,
    currency: CurrencyToJSON(value.currency),
    active: value.active,
    type: value.type
  }
}
