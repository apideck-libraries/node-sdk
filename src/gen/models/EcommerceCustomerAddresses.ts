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
 * @interface EcommerceCustomerAddresses
 */
export interface EcommerceCustomerAddresses {
  /**
   *
   * @type {string}
   * @memberof EcommerceCustomerAddresses
   */
  type?: EcommerceCustomerAddressesType
  /**
   * A unique identifier for an object.
   * @type {string}
   * @memberof EcommerceCustomerAddresses
   */
  readonly id?: string | null
  /**
   * First line of the street address of the customer
   * @type {string}
   * @memberof EcommerceCustomerAddresses
   */
  line1?: string | null
  /**
   * Second line of the street address of the customer
   * @type {string}
   * @memberof EcommerceCustomerAddresses
   */
  line2?: string | null
  /**
   * City of the customer
   * @type {string}
   * @memberof EcommerceCustomerAddresses
   */
  city?: string | null
  /**
   * State of the customer
   * @type {string}
   * @memberof EcommerceCustomerAddresses
   */
  state?: string | null
  /**
   * Postal code of the customer
   * @type {string}
   * @memberof EcommerceCustomerAddresses
   */
  postal_code?: string | null
  /**
   * Country of the customer
   * @type {string}
   * @memberof EcommerceCustomerAddresses
   */
  country?: string | null
}

/**
 * @export
 * @enum {string}
 */
export enum EcommerceCustomerAddressesType {
  billing = 'billing',
  shipping = 'shipping',
  other = 'other'
}

export function EcommerceCustomerAddressesFromJSON(json: any): EcommerceCustomerAddresses {
  return EcommerceCustomerAddressesFromJSONTyped(json, false)
}

export function EcommerceCustomerAddressesFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): EcommerceCustomerAddresses {
  if (json === undefined || json === null) {
    return json
  }
  return {
    type: !exists(json, 'type') ? undefined : json['type'],
    id: !exists(json, 'id') ? undefined : json['id'],
    line1: !exists(json, 'line1') ? undefined : json['line1'],
    line2: !exists(json, 'line2') ? undefined : json['line2'],
    city: !exists(json, 'city') ? undefined : json['city'],
    state: !exists(json, 'state') ? undefined : json['state'],
    postal_code: !exists(json, 'postal_code') ? undefined : json['postal_code'],
    country: !exists(json, 'country') ? undefined : json['country']
  }
}

export function EcommerceCustomerAddressesToJSON(value?: EcommerceCustomerAddresses | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    type: value.type,
    line1: value.line1,
    line2: value.line2,
    city: value.city,
    state: value.state,
    postal_code: value.postal_code,
    country: value.country
  }
}
