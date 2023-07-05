/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 9.7.5
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
 * @interface PaymentsFilter
 */
export interface PaymentsFilter {
  /**
   * Invoice number for payments to filter on
   * @type {string}
   * @memberof PaymentsFilter
   */
  invoice_number?: string
}

export function PaymentsFilterFromJSON(json: any): PaymentsFilter {
  return PaymentsFilterFromJSONTyped(json, false)
}

export function PaymentsFilterFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): PaymentsFilter {
  if (json === undefined || json === null) {
    return json
  }
  return {
    invoice_number: !exists(json, 'invoice_number') ? undefined : json['invoice_number']
  }
}

export function PaymentsFilterToJSON(value?: PaymentsFilter | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    invoice_number: value.invoice_number
  }
}
