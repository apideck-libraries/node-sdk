/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 5.3.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

// Override template imports only to fix circulr dependencies generated by default template
// https://github.com/OpenAPITools/openapi-generator/issues/6140

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
  readonly id?: string
  /**
   *
   * @type {string}
   * @memberof LinkedTaxRate
   */
  code?: string | null
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
    code: !exists(json, 'code') ? undefined : json['code']
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
    code: value.code
  }
}
