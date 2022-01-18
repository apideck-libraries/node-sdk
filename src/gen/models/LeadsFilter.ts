/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.11.0
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
 * @interface LeadsFilter
 */
export interface LeadsFilter {
  /**
   * Name of the lead to filter on
   * @type {string}
   * @memberof LeadsFilter
   */
  name?: string
  /**
   * First name of the lead to filter on
   * @type {string}
   * @memberof LeadsFilter
   */
  first_name?: string
  /**
   * Last name of the lead to filter on
   * @type {string}
   * @memberof LeadsFilter
   */
  last_name?: string
  /**
   * E-mail of the lead to filter on
   * @type {string}
   * @memberof LeadsFilter
   */
  email?: string
}

export function LeadsFilterFromJSON(json: any): LeadsFilter {
  return LeadsFilterFromJSONTyped(json, false)
}

export function LeadsFilterFromJSONTyped(json: any, ignoreDiscriminator: boolean): LeadsFilter {
  if (json === undefined || json === null) {
    return json
  }
  return {
    name: !exists(json, 'name') ? undefined : json['name'],
    first_name: !exists(json, 'first_name') ? undefined : json['first_name'],
    last_name: !exists(json, 'last_name') ? undefined : json['last_name'],
    email: !exists(json, 'email') ? undefined : json['email']
  }
}

export function LeadsFilterToJSON(value?: LeadsFilter | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    name: value.name,
    first_name: value.first_name,
    last_name: value.last_name,
    email: value.email
  }
}
