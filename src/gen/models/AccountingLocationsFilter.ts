/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.11.2
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
 * @interface AccountingLocationsFilter
 */
export interface AccountingLocationsFilter {
  /**
   * Id of the subsidiary to search for
   * @type {string}
   * @memberof AccountingLocationsFilter
   */
  subsidiary?: string
}

export function AccountingLocationsFilterFromJSON(json: any): AccountingLocationsFilter {
  return AccountingLocationsFilterFromJSONTyped(json, false)
}

export function AccountingLocationsFilterFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): AccountingLocationsFilter {
  if (json === undefined || json === null) {
    return json
  }
  return {
    subsidiary: !exists(json, 'subsidiary') ? undefined : json['subsidiary']
  }
}

export function AccountingLocationsFilterToJSON(value?: AccountingLocationsFilter | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    subsidiary: value.subsidiary
  }
}
