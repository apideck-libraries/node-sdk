/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.7.3
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
   * Display Name of supplier to search for
   * @type {string}
   * @memberof SuppliersFilter
   */
  display_name?: string
  /**
   * First name of supplier to search for
   * @type {string}
   * @memberof SuppliersFilter
   */
  first_name?: string
  /**
   * Last name of supplier to search for
   * @type {string}
   * @memberof SuppliersFilter
   */
  last_name?: string
  /**
   * Email of supplier to search for
   * @type {string}
   * @memberof SuppliersFilter
   */
  email?: string
  /**
   *
   * @type {Date}
   * @memberof SuppliersFilter
   */
  updated_since?: Date
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
    display_name: !exists(json, 'display_name') ? undefined : json['display_name'],
    first_name: !exists(json, 'first_name') ? undefined : json['first_name'],
    last_name: !exists(json, 'last_name') ? undefined : json['last_name'],
    email: !exists(json, 'email') ? undefined : json['email'],
    updated_since: !exists(json, 'updated_since') ? undefined : new Date(json['updated_since'])
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
    display_name: value.display_name,
    first_name: value.first_name,
    last_name: value.last_name,
    email: value.email,
    updated_since:
      value.updated_since === undefined ? undefined : new Date(value.updated_since).toISOString()
  }
}
