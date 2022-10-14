/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.70.1
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
 * @interface CompaniesFilter
 */
export interface CompaniesFilter {
  /**
   * Name of the company to filter on
   * @type {string}
   * @memberof CompaniesFilter
   */
  name?: string
}

export function CompaniesFilterFromJSON(json: any): CompaniesFilter {
  return CompaniesFilterFromJSONTyped(json, false)
}

export function CompaniesFilterFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): CompaniesFilter {
  if (json === undefined || json === null) {
    return json
  }
  return {
    name: !exists(json, 'name') ? undefined : json['name']
  }
}

export function CompaniesFilterToJSON(value?: CompaniesFilter | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    name: value.name
  }
}
