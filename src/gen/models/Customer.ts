/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 5.11.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { Address, AddressFromJSON, AddressToJSON } from './Address'
import { Currency, CurrencyFromJSON, CurrencyToJSON } from './Currency'
import { LinkedTaxRate, LinkedTaxRateFromJSON, LinkedTaxRateToJSON } from './LinkedTaxRate'

/**
 *
 * @export
 * @interface Customer
 */
export interface Customer {
  /**
   *
   * @type {string}
   * @memberof Customer
   */
  id?: string
  /**
   *
   * @type {string}
   * @memberof Customer
   */
  company_name?: string | null
  /**
   *
   * @type {string}
   * @memberof Customer
   */
  first_name?: string | null
  /**
   *
   * @type {string}
   * @memberof Customer
   */
  last_name?: string | null
  /**
   *
   * @type {boolean}
   * @memberof Customer
   */
  individual?: boolean | null
  /**
   *
   * @type {Array<Address>}
   * @memberof Customer
   */
  addresses?: Array<Address>
  /**
   *
   * @type {string}
   * @memberof Customer
   */
  notes?: string | null
  /**
   *
   * @type {LinkedTaxRate}
   * @memberof Customer
   */
  tax_rate?: LinkedTaxRate
  /**
   *
   * @type {Currency}
   * @memberof Customer
   */
  currency?: Currency | null
  /**
   *
   * @type {string}
   * @memberof Customer
   */
  readonly updated_by?: string | null
  /**
   *
   * @type {string}
   * @memberof Customer
   */
  readonly created_by?: string | null
  /**
   *
   * @type {Date}
   * @memberof Customer
   */
  readonly updated_at?: Date
  /**
   *
   * @type {Date}
   * @memberof Customer
   */
  readonly created_at?: Date
}

export function CustomerFromJSON(json: any): Customer {
  return CustomerFromJSONTyped(json, false)
}

export function CustomerFromJSONTyped(json: any, ignoreDiscriminator: boolean): Customer {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    company_name: !exists(json, 'company_name') ? undefined : json['company_name'],
    first_name: !exists(json, 'first_name') ? undefined : json['first_name'],
    last_name: !exists(json, 'last_name') ? undefined : json['last_name'],
    individual: !exists(json, 'individual') ? undefined : json['individual'],
    addresses: !exists(json, 'addresses')
      ? undefined
      : (json['addresses'] as Array<any>).map(AddressFromJSON),
    notes: !exists(json, 'notes') ? undefined : json['notes'],
    tax_rate: !exists(json, 'tax_rate') ? undefined : LinkedTaxRateFromJSON(json['tax_rate']),
    currency: !exists(json, 'currency') ? undefined : CurrencyFromJSON(json['currency']),
    updated_by: !exists(json, 'updated_by') ? undefined : json['updated_by'],
    created_by: !exists(json, 'created_by') ? undefined : json['created_by'],
    updated_at: !exists(json, 'updated_at') ? undefined : new Date(json['updated_at']),
    created_at: !exists(json, 'created_at') ? undefined : new Date(json['created_at'])
  }
}

export function CustomerToJSON(value?: Customer | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    id: value.id,
    company_name: value.company_name,
    first_name: value.first_name,
    last_name: value.last_name,
    individual: value.individual,
    addresses:
      value.addresses === undefined
        ? undefined
        : (value.addresses as Array<any>).map(AddressToJSON),
    notes: value.notes,
    tax_rate: LinkedTaxRateToJSON(value.tax_rate),
    currency: CurrencyToJSON(value.currency)
  }
}
