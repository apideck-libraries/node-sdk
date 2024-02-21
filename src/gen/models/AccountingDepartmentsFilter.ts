/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.3.1
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
 * @interface AccountingDepartmentsFilter
 */
export interface AccountingDepartmentsFilter {
  /**
   * Id of the subsidiary to search for
   * @type {string}
   * @memberof AccountingDepartmentsFilter
   */
  subsidiary?: string
}

export function AccountingDepartmentsFilterFromJSON(json: any): AccountingDepartmentsFilter {
  return AccountingDepartmentsFilterFromJSONTyped(json, false)
}

export function AccountingDepartmentsFilterFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): AccountingDepartmentsFilter {
  if (json === undefined || json === null) {
    return json
  }
  return {
    subsidiary: !exists(json, 'subsidiary') ? undefined : json['subsidiary']
  }
}

export function AccountingDepartmentsFilterToJSON(value?: AccountingDepartmentsFilter | null): any {
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
