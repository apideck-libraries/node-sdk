/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.63.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { Address, AddressFromJSON, AddressToJSON } from './Address'
import { Email, EmailFromJSON, EmailToJSON } from './Email'
import { PhoneNumber, PhoneNumberFromJSON, PhoneNumberToJSON } from './PhoneNumber'

/**
 *
 * @export
 * @interface OrderPickupDetailsRecipient
 */
export interface OrderPickupDetailsRecipient {
  /**
   *
   * @type {string}
   * @memberof OrderPickupDetailsRecipient
   */
  customer_id?: string
  /**
   *
   * @type {string}
   * @memberof OrderPickupDetailsRecipient
   */
  display_name?: string
  /**
   *
   * @type {Address}
   * @memberof OrderPickupDetailsRecipient
   */
  address?: Address
  /**
   *
   * @type {PhoneNumber}
   * @memberof OrderPickupDetailsRecipient
   */
  phone_number?: PhoneNumber
  /**
   *
   * @type {Email}
   * @memberof OrderPickupDetailsRecipient
   */
  email?: Email
}

export function OrderPickupDetailsRecipientFromJSON(json: any): OrderPickupDetailsRecipient {
  return OrderPickupDetailsRecipientFromJSONTyped(json, false)
}

export function OrderPickupDetailsRecipientFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): OrderPickupDetailsRecipient {
  if (json === undefined || json === null) {
    return json
  }
  return {
    customer_id: !exists(json, 'customer_id') ? undefined : json['customer_id'],
    display_name: !exists(json, 'display_name') ? undefined : json['display_name'],
    address: !exists(json, 'address') ? undefined : AddressFromJSON(json['address']),
    phone_number: !exists(json, 'phone_number')
      ? undefined
      : PhoneNumberFromJSON(json['phone_number']),
    email: !exists(json, 'email') ? undefined : EmailFromJSON(json['email'])
  }
}

export function OrderPickupDetailsRecipientToJSON(value?: OrderPickupDetailsRecipient | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    customer_id: value.customer_id,
    display_name: value.display_name,
    address: AddressToJSON(value.address),
    phone_number: PhoneNumberToJSON(value.phone_number),
    email: EmailToJSON(value.email)
  }
}
