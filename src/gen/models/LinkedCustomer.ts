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
 * The customer this entity is linked to.
 * @export
 * @interface LinkedCustomer
 */
export interface LinkedCustomer {
  /**
   *
   * @type {string}
   * @memberof LinkedCustomer
   */
  id: string
  /**
   *
   * @type {string}
   * @memberof LinkedCustomer
   */
  readonly display_id?: string | null
  /**
   *
   * @type {string}
   * @memberof LinkedCustomer
   */
  display_name?: string | null
  /**
   *
   * @type {string}
   * @memberof LinkedCustomer
   */
  readonly company_name?: string | null
}

export function LinkedCustomerFromJSON(json: any): LinkedCustomer {
  return LinkedCustomerFromJSONTyped(json, false)
}

export function LinkedCustomerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): LinkedCustomer {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: json['id'],
    display_id: !exists(json, 'display_id') ? undefined : json['display_id'],
    display_name: !exists(json, 'display_name') ? undefined : json['display_name'],
    company_name: !exists(json, 'company_name') ? undefined : json['company_name']
  }
}

export function LinkedCustomerToJSON(value?: LinkedCustomer | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    id: value.id,
    display_name: value.display_name
  }
}
