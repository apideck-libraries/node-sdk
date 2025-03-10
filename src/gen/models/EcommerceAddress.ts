/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.12.1
 * Contact: support@apideck.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
/**
 * An object representing a shipping or billing address.
 * @export
 * @interface EcommerceAddress
 */
export interface EcommerceAddress {
  /**
   * Address line 1 of the billing address.
   * @type {string}
   * @memberof EcommerceAddress
   */
  line1?: string | null
  /**
   * Address line 2 of the billing address.
   * @type {string}
   * @memberof EcommerceAddress
   */
  line2?: string | null
  /**
   * Company name of the customer
   * @type {string}
   * @memberof EcommerceAddress
   */
  company_name?: string | null
  /**
   * City of the billing address.
   * @type {string}
   * @memberof EcommerceAddress
   */
  city?: string | null
  /**
   * State/province of the billing address.
   * @type {string}
   * @memberof EcommerceAddress
   */
  state?: string | null
  /**
   * Postal/ZIP code of the billing address.
   * @type {string}
   * @memberof EcommerceAddress
   */
  postal_code?: string | null
  /**
   * Country of the billing address.
   * @type {string}
   * @memberof EcommerceAddress
   */
  country?: string | null
}

export function EcommerceAddressFromJSON(json: any): EcommerceAddress {
  return EcommerceAddressFromJSONTyped(json, false)
}

export function EcommerceAddressFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): EcommerceAddress {
  if (json === undefined || json === null) {
    return json
  }
  return {
    line1: !exists(json, 'line1') ? undefined : json['line1'],
    line2: !exists(json, 'line2') ? undefined : json['line2'],
    company_name: !exists(json, 'company_name') ? undefined : json['company_name'],
    city: !exists(json, 'city') ? undefined : json['city'],
    state: !exists(json, 'state') ? undefined : json['state'],
    postal_code: !exists(json, 'postal_code') ? undefined : json['postal_code'],
    country: !exists(json, 'country') ? undefined : json['country']
  }
}

export function EcommerceAddressToJSON(value?: EcommerceAddress | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    line1: value.line1,
    line2: value.line2,
    company_name: value.company_name,
    city: value.city,
    state: value.state,
    postal_code: value.postal_code,
    country: value.country
  }
}
