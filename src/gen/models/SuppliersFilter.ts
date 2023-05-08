/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 9.3.1
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
 * @interface SuppliersFilter
 */
export interface SuppliersFilter {
  /**
   * Company Name of supplier to search for
   * @type {string}
   * @memberof SuppliersFilter
   */
  company_name?: string
  /**
   * Email of supplier to search for
   * @type {string}
   * @memberof SuppliersFilter
   */
  email?: string
}

export function SuppliersFilterFromJSON(json: any): SuppliersFilter {
  return SuppliersFilterFromJSONTyped(json, false)
}

export function SuppliersFilterFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): SuppliersFilter {
  if (json === undefined || json === null) {
    return json
  }
  return {
    company_name: !exists(json, 'company_name') ? undefined : json['company_name'],
    email: !exists(json, 'email') ? undefined : json['email']
  }
}

export function SuppliersFilterToJSON(value?: SuppliersFilter | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    company_name: value.company_name,
    email: value.email
  }
}
