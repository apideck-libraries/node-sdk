/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.6.3
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
 * @interface EcommerceCustomersFilter
 */
export interface EcommerceCustomersFilter {
  /**
   * Customer email address to filter on
   * @type {string}
   * @memberof EcommerceCustomersFilter
   */
  email?: string
  /**
   * Customer phone number to filter on
   * @type {string}
   * @memberof EcommerceCustomersFilter
   */
  phone_number?: string
}

export function EcommerceCustomersFilterFromJSON(json: any): EcommerceCustomersFilter {
  return EcommerceCustomersFilterFromJSONTyped(json, false)
}

export function EcommerceCustomersFilterFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): EcommerceCustomersFilter {
  if (json === undefined || json === null) {
    return json
  }
  return {
    email: !exists(json, 'email') ? undefined : json['email'],
    phone_number: !exists(json, 'phone_number') ? undefined : json['phone_number']
  }
}

export function EcommerceCustomersFilterToJSON(value?: EcommerceCustomersFilter | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    email: value.email,
    phone_number: value.phone_number
  }
}
