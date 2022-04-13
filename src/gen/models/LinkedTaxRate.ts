/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.20.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
/**
 *
 * @export
 * @interface LinkedTaxRate
 */
export interface LinkedTaxRate {
  /**
   *
   * @type {string}
   * @memberof LinkedTaxRate
   */
  id?: string | null
  /**
   *
   * @type {string}
   * @memberof LinkedTaxRate
   */
  readonly code?: string | null
  /**
   *
   * @type {string}
   * @memberof LinkedTaxRate
   */
  readonly name?: string | null
}

export function LinkedTaxRateFromJSON(json: any): LinkedTaxRate {
  return LinkedTaxRateFromJSONTyped(json, false)
}

export function LinkedTaxRateFromJSONTyped(json: any, ignoreDiscriminator: boolean): LinkedTaxRate {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    code: !exists(json, 'code') ? undefined : json['code'],
    name: !exists(json, 'name') ? undefined : json['name']
  }
}

export function LinkedTaxRateToJSON(value?: LinkedTaxRate | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    id: value.id
  }
}
