/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.13.0
 * Contact: support@apideck.com
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
   *
   * @type {Date}
   * @memberof PaymentsFilter
   */
  updated_since?: Date
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
    updated_since: !exists(json, 'updated_since') ? undefined : new Date(json['updated_since'])
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
    updated_since:
      value.updated_since === undefined ? undefined : new Date(value.updated_since).toISOString()
  }
}
