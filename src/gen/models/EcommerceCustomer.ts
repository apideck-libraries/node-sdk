/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 9.9.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { Currency, CurrencyFromJSON, CurrencyToJSON } from './Currency'
import {
  EcommerceCustomerAddresses,
  EcommerceCustomerAddressesFromJSON,
  EcommerceCustomerAddressesToJSON
} from './EcommerceCustomerAddresses'
import { Email, EmailFromJSON, EmailToJSON } from './Email'
import {
  LinkedEcommerceOrder,
  LinkedEcommerceOrderFromJSON,
  LinkedEcommerceOrderToJSON
} from './LinkedEcommerceOrder'
import { PhoneNumber, PhoneNumberFromJSON, PhoneNumberToJSON } from './PhoneNumber'

/**
 *
 * @export
 * @interface EcommerceCustomer
 */
export interface EcommerceCustomer {
  /**
   * A unique identifier for an object.
   * @type {string}
   * @memberof EcommerceCustomer
   */
  readonly id: string
  /**
   * Full name of the customer
   * @type {string}
   * @memberof EcommerceCustomer
   */
  name?: string | null
  /**
   * First name of the customer
   * @type {string}
   * @memberof EcommerceCustomer
   */
  first_name?: string | null
  /**
   * Last name of the customer
   * @type {string}
   * @memberof EcommerceCustomer
   */
  last_name?: string | null
  /**
   * Company name of the customer
   * @type {string}
   * @memberof EcommerceCustomer
   */
  company_name?: string | null
  /**
   * The current status of the customer
   * @type {string}
   * @memberof EcommerceCustomer
   */
  status?: EcommerceCustomerStatus
  /**
   *
   * @type {Currency}
   * @memberof EcommerceCustomer
   */
  currency?: Currency | null
  /**
   * An array of email addresses for the customer.
   * @type {Array<Email>}
   * @memberof EcommerceCustomer
   */
  emails?: Array<Email> | null
  /**
   * An array of phone numbers for the customer.
   * @type {Array<PhoneNumber>}
   * @memberof EcommerceCustomer
   */
  phone_numbers?: Array<PhoneNumber> | null
  /**
   * An array of addresses for the customer.
   * @type {Array<EcommerceCustomerAddresses>}
   * @memberof EcommerceCustomer
   */
  addresses?: Array<EcommerceCustomerAddresses>
  /**
   *
   * @type {Array<LinkedEcommerceOrder>}
   * @memberof EcommerceCustomer
   */
  orders?: Array<LinkedEcommerceOrder>
  /**
   * The date and time when the object was created.
   * @type {Date}
   * @memberof EcommerceCustomer
   */
  readonly created_at?: Date | null
  /**
   * The date and time when the object was last updated.
   * @type {Date}
   * @memberof EcommerceCustomer
   */
  readonly updated_at?: Date | null
}

/**
 * @export
 * @enum {string}
 */
export enum EcommerceCustomerStatus {
  active = 'active',
  archived = 'archived'
}

export function EcommerceCustomerFromJSON(json: any): EcommerceCustomer {
  return EcommerceCustomerFromJSONTyped(json, false)
}

export function EcommerceCustomerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): EcommerceCustomer {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: json['id'],
    name: !exists(json, 'name') ? undefined : json['name'],
    first_name: !exists(json, 'first_name') ? undefined : json['first_name'],
    last_name: !exists(json, 'last_name') ? undefined : json['last_name'],
    company_name: !exists(json, 'company_name') ? undefined : json['company_name'],
    status: !exists(json, 'status') ? undefined : json['status'],
    currency: !exists(json, 'currency') ? undefined : CurrencyFromJSON(json['currency']),
    emails: !exists(json, 'emails')
      ? undefined
      : json['emails'] === null
      ? null
      : (json['emails'] as Array<any>).map(EmailFromJSON),
    phone_numbers: !exists(json, 'phone_numbers')
      ? undefined
      : json['phone_numbers'] === null
      ? null
      : (json['phone_numbers'] as Array<any>).map(PhoneNumberFromJSON),
    addresses: !exists(json, 'addresses')
      ? undefined
      : (json['addresses'] as Array<any>).map(EcommerceCustomerAddressesFromJSON),
    orders: !exists(json, 'orders')
      ? undefined
      : (json['orders'] as Array<any>).map(LinkedEcommerceOrderFromJSON),
    created_at: !exists(json, 'created_at')
      ? undefined
      : json['created_at'] === null
      ? null
      : new Date(json['created_at']),
    updated_at: !exists(json, 'updated_at')
      ? undefined
      : json['updated_at'] === null
      ? null
      : new Date(json['updated_at'])
  }
}

export function EcommerceCustomerToJSON(value?: EcommerceCustomer | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    name: value.name,
    first_name: value.first_name,
    last_name: value.last_name,
    company_name: value.company_name,
    status: value.status,
    currency: CurrencyToJSON(value.currency),
    emails:
      value.emails === undefined
        ? undefined
        : value.emails === null
        ? null
        : (value.emails as Array<any>).map(EmailToJSON),
    phone_numbers:
      value.phone_numbers === undefined
        ? undefined
        : value.phone_numbers === null
        ? null
        : (value.phone_numbers as Array<any>).map(PhoneNumberToJSON),
    addresses:
      value.addresses === undefined
        ? undefined
        : (value.addresses as Array<any>).map(EcommerceCustomerAddressesToJSON),
    orders:
      value.orders === undefined
        ? undefined
        : (value.orders as Array<any>).map(LinkedEcommerceOrderToJSON)
  }
}
