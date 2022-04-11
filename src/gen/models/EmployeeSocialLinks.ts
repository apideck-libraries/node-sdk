/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.19.3
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
 * @interface EmployeeSocialLinks
 */
export interface EmployeeSocialLinks {
  /**
   *
   * @type {string}
   * @memberof EmployeeSocialLinks
   */
  url: string
  /**
   *
   * @type {string}
   * @memberof EmployeeSocialLinks
   */
  id?: string | null
  /**
   *
   * @type {string}
   * @memberof EmployeeSocialLinks
   */
  type?: string | null
}

export function EmployeeSocialLinksFromJSON(json: any): EmployeeSocialLinks {
  return EmployeeSocialLinksFromJSONTyped(json, false)
}

export function EmployeeSocialLinksFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): EmployeeSocialLinks {
  if (json === undefined || json === null) {
    return json
  }
  return {
    url: json['url'],
    id: !exists(json, 'id') ? undefined : json['id'],
    type: !exists(json, 'type') ? undefined : json['type']
  }
}

export function EmployeeSocialLinksToJSON(value?: EmployeeSocialLinks | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    url: value.url,
    id: value.id,
    type: value.type
  }
}
