/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 9.8.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
/**
 * The parent customer this entity is linked to.
 * @export
 * @interface LinkedParentCustomer
 */
export interface LinkedParentCustomer {
  /**
   * The parent ID of the customer this entity is linked to.
   * @type {string}
   * @memberof LinkedParentCustomer
   */
  id: string
  /**
   * The name of the parent customer.
   * @type {string}
   * @memberof LinkedParentCustomer
   */
  name?: string
}

export function LinkedParentCustomerFromJSON(json: any): LinkedParentCustomer {
  return LinkedParentCustomerFromJSONTyped(json, false)
}

export function LinkedParentCustomerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): LinkedParentCustomer {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: json['id'],
    name: !exists(json, 'name') ? undefined : json['name']
  }
}

export function LinkedParentCustomerToJSON(value?: LinkedParentCustomer | null): any {
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
