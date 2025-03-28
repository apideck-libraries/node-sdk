/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.13.0
 * Contact: support@apideck.com
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
  /**
   * Minimum date the order was last modified
   * @type {string}
   * @memberof EcommerceOrdersFilter
   */
  updated_since?: string
  /**
   * Minimum date the order was created
   * @type {string}
   * @memberof EcommerceOrdersFilter
   */
  created_since?: string
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
    customer_id: !exists(json, 'customer_id') ? undefined : json['customer_id'],
    updated_since: !exists(json, 'updated_since') ? undefined : json['updated_since'],
    created_since: !exists(json, 'created_since') ? undefined : json['created_since']
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
    customer_id: value.customer_id,
    updated_since: value.updated_since,
    created_since: value.created_since
  }
}
