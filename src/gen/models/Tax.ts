/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 9.9.3
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
 * @interface Tax
 */
export interface Tax {
  /**
   * The name of the tax.
   * @type {string}
   * @memberof Tax
   */
  name?: string | null
  /**
   * Paid by employer.
   * @type {boolean}
   * @memberof Tax
   */
  employer?: boolean | null
  /**
   * The amount of the tax.
   * @type {number}
   * @memberof Tax
   */
  amount?: number | null
}

export function TaxFromJSON(json: any): Tax {
  return TaxFromJSONTyped(json, false)
}

export function TaxFromJSONTyped(json: any, ignoreDiscriminator: boolean): Tax {
  if (json === undefined || json === null) {
    return json
  }
  return {
    name: !exists(json, 'name') ? undefined : json['name'],
    employer: !exists(json, 'employer') ? undefined : json['employer'],
    amount: !exists(json, 'amount') ? undefined : json['amount']
  }
}

export function TaxToJSON(value?: Tax | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    name: value.name,
    employer: value.employer,
    amount: value.amount
  }
}
