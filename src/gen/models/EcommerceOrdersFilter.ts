/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.3.3
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
 * @interface EcommerceOrdersFilter
 */
export interface EcommerceOrdersFilter {
  /**
   * Customer email address to filter on
   * @type {string}
   * @memberof EcommerceOrdersFilter
   */
  email?: string
  /**
   * Customer id to filter on
   * @type {string}
   * @memberof EcommerceOrdersFilter
   */
  customer_id?: string
}

export function EcommerceOrdersFilterFromJSON(json: any): EcommerceOrdersFilter {
  return EcommerceOrdersFilterFromJSONTyped(json, false)
}

export function EcommerceOrdersFilterFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): EcommerceOrdersFilter {
  if (json === undefined || json === null) {
    return json
  }
  return {
    email: !exists(json, 'email') ? undefined : json['email'],
    customer_id: !exists(json, 'customer_id') ? undefined : json['customer_id']
  }
}

export function EcommerceOrdersFilterToJSON(value?: EcommerceOrdersFilter | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    email: value.email,
    customer_id: value.customer_id
  }
}
