/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.2.0
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
 * @interface TaxRate
 */
export interface TaxRate {
  /**
   *
   * @type {string}
   * @memberof TaxRate
   */
  readonly id?: string
  /**
   *
   * @type {string}
   * @memberof TaxRate
   */
  name?: string
  /**
   *
   * @type {string}
   * @memberof TaxRate
   */
  code?: string | null
  /**
   *
   * @type {string}
   * @memberof TaxRate
   */
  description?: string | null
  /**
   *
   * @type {number}
   * @memberof TaxRate
   */
  effective_tax_rate?: number | null
  /**
   * Not compounded sum of the components of a tax rate
   * @type {number}
   * @memberof TaxRate
   */
  total_tax_rate?: number | null
  /**
   * Unique identifier for the account for tax collected.
   * @type {string}
   * @memberof TaxRate
   */
  tax_payable_account_id?: string | null
  /**
   * Unique identifier for the account for tax remitted.
   * @type {string}
   * @memberof TaxRate
   */
  tax_remitted_account_id?: string | null
  /**
   *
   * @type {Array<object>}
   * @memberof TaxRate
   */
  components?: Array<object> | null
  /**
   * Tax type used to define the source of tax collected or paid
   * @type {string}
   * @memberof TaxRate
   */
  tax_type?: TaxRateTaxType
  /**
   * ID of the original tax rate from which the new tax rate is derived. Helps to understand the relationship between corresponding tax rate entities.
   * @type {string}
   * @memberof TaxRate
   */
  original_tax_rate_id?: string | null
  /**
   *
   * @type {boolean}
   * @memberof TaxRate
   */
  active?: boolean | null
  /**
   *
   * @type {string}
   * @memberof TaxRate
   */
  row_version?: string | null
  /**
   *
   * @type {string}
   * @memberof TaxRate
   */
  readonly updated_by?: string | null
  /**
   *
   * @type {string}
   * @memberof TaxRate
   */
  readonly created_by?: string | null
  /**
   *
   * @type {Date}
   * @memberof TaxRate
   */
  readonly updated_at?: Date
  /**
   *
   * @type {Date}
   * @memberof TaxRate
   */
  readonly created_at?: Date
}

/**
 * @export
 * @enum {string}
 */
export enum TaxRateTaxType {
  output = 'output',
  input = 'input',
  withholdings = 'withholdings',
  import_gst = 'import_gst',
  output_gst = 'output_gst',
  input_exempt = 'input_exempt',
  output_exempt = 'output_exempt',
  consolidated = 'consolidated',
  luxury_car_tax = 'luxury_car_tax',
  none = 'none'
}

export function TaxRateFromJSON(json: any): TaxRate {
  return TaxRateFromJSONTyped(json, false)
}

export function TaxRateFromJSONTyped(json: any, ignoreDiscriminator: boolean): TaxRate {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    name: !exists(json, 'name') ? undefined : json['name'],
    code: !exists(json, 'code') ? undefined : json['code'],
    description: !exists(json, 'description') ? undefined : json['description'],
    effective_tax_rate: !exists(json, 'effective_tax_rate')
      ? undefined
      : json['effective_tax_rate'],
    total_tax_rate: !exists(json, 'total_tax_rate') ? undefined : json['total_tax_rate'],
    tax_payable_account_id: !exists(json, 'tax_payable_account_id')
      ? undefined
      : json['tax_payable_account_id'],
    tax_remitted_account_id: !exists(json, 'tax_remitted_account_id')
      ? undefined
      : json['tax_remitted_account_id'],
    components: !exists(json, 'components') ? undefined : json['components'],
    tax_type: !exists(json, 'tax_type') ? undefined : json['tax_type'],
    original_tax_rate_id: !exists(json, 'original_tax_rate_id')
      ? undefined
      : json['original_tax_rate_id'],
    active: !exists(json, 'active') ? undefined : json['active'],
    row_version: !exists(json, 'row_version') ? undefined : json['row_version'],
    updated_by: !exists(json, 'updated_by') ? undefined : json['updated_by'],
    created_by: !exists(json, 'created_by') ? undefined : json['created_by'],
    updated_at: !exists(json, 'updated_at') ? undefined : new Date(json['updated_at']),
    created_at: !exists(json, 'created_at') ? undefined : new Date(json['created_at'])
  }
}

export function TaxRateToJSON(value?: TaxRate | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    name: value.name,
    code: value.code,
    description: value.description,
    effective_tax_rate: value.effective_tax_rate,
    total_tax_rate: value.total_tax_rate,
    tax_payable_account_id: value.tax_payable_account_id,
    tax_remitted_account_id: value.tax_remitted_account_id,
    components: value.components,
    tax_type: value.tax_type,
    original_tax_rate_id: value.original_tax_rate_id,
    active: value.active,
    row_version: value.row_version
  }
}
