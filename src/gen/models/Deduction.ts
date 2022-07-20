/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.35.0
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
 * @interface Deduction
 */
export interface Deduction {
  /**
   * The name of the deduction.
   * @type {string}
   * @memberof Deduction
   */
  name?: string
  /**
   * The amount deducted.
   * @type {number}
   * @memberof Deduction
   */
  amount?: number
}

export function DeductionFromJSON(json: any): Deduction {
  return DeductionFromJSONTyped(json, false)
}

export function DeductionFromJSONTyped(json: any, ignoreDiscriminator: boolean): Deduction {
  if (json === undefined || json === null) {
    return json
  }
  return {
    name: !exists(json, 'name') ? undefined : json['name'],
    amount: !exists(json, 'amount') ? undefined : json['amount']
  }
}

export function DeductionToJSON(value?: Deduction | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    name: value.name,
    amount: value.amount
  }
}
