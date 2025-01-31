/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.11.2
 * Contact: support@apideck.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { Email, EmailFromJSON, EmailToJSON } from './Email'
import { PhoneNumber, PhoneNumberFromJSON, PhoneNumberToJSON } from './PhoneNumber'

/**
 *
 * @export
 * @interface OrderCustomers
 */
export interface OrderCustomers {
  /**
   *
   * @type {string}
   * @memberof OrderCustomers
   */
  id?: string
  /**
   *
   * @type {string}
   * @memberof OrderCustomers
   */
  first_name?: string | null
  /**
   *
   * @type {string}
   * @memberof OrderCustomers
   */
  middle_name?: string | null
  /**
   *
   * @type {string}
   * @memberof OrderCustomers
   */
  last_name?: string | null
  /**
   *
   * @type {Array<PhoneNumber>}
   * @memberof OrderCustomers
   */
  phone_numbers?: Array<PhoneNumber>
  /**
   *
   * @type {Array<Email>}
   * @memberof OrderCustomers
   */
  emails?: Array<Email>
}

export function OrderCustomersFromJSON(json: any): OrderCustomers {
  return OrderCustomersFromJSONTyped(json, false)
}

export function OrderCustomersFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): OrderCustomers {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    first_name: !exists(json, 'first_name') ? undefined : json['first_name'],
    middle_name: !exists(json, 'middle_name') ? undefined : json['middle_name'],
    last_name: !exists(json, 'last_name') ? undefined : json['last_name'],
    phone_numbers: !exists(json, 'phone_numbers')
      ? undefined
      : (json['phone_numbers'] as Array<any>).map(PhoneNumberFromJSON),
    emails: !exists(json, 'emails') ? undefined : (json['emails'] as Array<any>).map(EmailFromJSON)
  }
}

export function OrderCustomersToJSON(value?: OrderCustomers | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    id: value.id,
    first_name: value.first_name,
    middle_name: value.middle_name,
    last_name: value.last_name,
    phone_numbers:
      value.phone_numbers === undefined
        ? undefined
        : (value.phone_numbers as Array<any>).map(PhoneNumberToJSON),
    emails: value.emails === undefined ? undefined : (value.emails as Array<any>).map(EmailToJSON)
  }
}
