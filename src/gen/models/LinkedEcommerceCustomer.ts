/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 9.3.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { Email, EmailFromJSON, EmailToJSON } from './Email'
import { PhoneNumber, PhoneNumberFromJSON, PhoneNumberToJSON } from './PhoneNumber'

/**
 * The customer this entity is linked to.
 * @export
 * @interface LinkedEcommerceCustomer
 */
export interface LinkedEcommerceCustomer {
  /**
   * The ID of the customer this entity is linked to.
   * @type {string}
   * @memberof LinkedEcommerceCustomer
   */
  id: string
  /**
   * Full name of the customer
   * @type {string}
   * @memberof LinkedEcommerceCustomer
   */
  name?: string
  /**
   * First name of the customer
   * @type {string}
   * @memberof LinkedEcommerceCustomer
   */
  first_name?: string
  /**
   * Last name of the customer
   * @type {string}
   * @memberof LinkedEcommerceCustomer
   */
  last_name?: string
  /**
   * Company name of the customer
   * @type {string}
   * @memberof LinkedEcommerceCustomer
   */
  company_name?: string
  /**
   *
   * @type {Array<PhoneNumber>}
   * @memberof LinkedEcommerceCustomer
   */
  phone_numbers?: Array<PhoneNumber>
  /**
   *
   * @type {Array<Email>}
   * @memberof LinkedEcommerceCustomer
   */
  emails?: Array<Email>
}

export function LinkedEcommerceCustomerFromJSON(json: any): LinkedEcommerceCustomer {
  return LinkedEcommerceCustomerFromJSONTyped(json, false)
}

export function LinkedEcommerceCustomerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): LinkedEcommerceCustomer {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: json['id'],
    name: !exists(json, 'name') ? undefined : json['name'],
    first_name: !exists(json, 'first_name') ? undefined : json['first_name'],
    last_name: !exists(json, 'last_name') ? undefined : json['last_name'],
    company_name: !exists(json, 'company_name') ? undefined : json['company_name'],
    phone_numbers: !exists(json, 'phone_numbers')
      ? undefined
      : (json['phone_numbers'] as Array<any>).map(PhoneNumberFromJSON),
    emails: !exists(json, 'emails') ? undefined : (json['emails'] as Array<any>).map(EmailFromJSON)
  }
}

export function LinkedEcommerceCustomerToJSON(value?: LinkedEcommerceCustomer | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    id: value.id,
    name: value.name,
    first_name: value.first_name,
    last_name: value.last_name,
    company_name: value.company_name,
    phone_numbers:
      value.phone_numbers === undefined
        ? undefined
        : (value.phone_numbers as Array<any>).map(PhoneNumberToJSON),
    emails: value.emails === undefined ? undefined : (value.emails as Array<any>).map(EmailToJSON)
  }
}
