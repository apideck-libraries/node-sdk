/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.41.0
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
 * @interface CompanyRowType
 */
export interface CompanyRowType {
  /**
   *
   * @type {string}
   * @memberof CompanyRowType
   */
  id?: string
  /**
   *
   * @type {string}
   * @memberof CompanyRowType
   */
  name?: string
}

export function CompanyRowTypeFromJSON(json: any): CompanyRowType {
  return CompanyRowTypeFromJSONTyped(json, false)
}

export function CompanyRowTypeFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): CompanyRowType {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    name: !exists(json, 'name') ? undefined : json['name']
  }
}

export function CompanyRowTypeToJSON(value?: CompanyRowType | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    id: value.id,
    name: value.name
  }
}
