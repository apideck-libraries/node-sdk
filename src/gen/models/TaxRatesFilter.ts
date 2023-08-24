/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 9.9.0
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
 * @interface TaxRatesFilter
 */
export interface TaxRatesFilter {
  /**
   * Boolean to describe if tax rate can be used for asset accounts
   * @type {boolean}
   * @memberof TaxRatesFilter
   */
  assets?: boolean
  /**
   * Boolean to describe if tax rate can be used for equity accounts
   * @type {boolean}
   * @memberof TaxRatesFilter
   */
  equity?: boolean
  /**
   * Boolean to describe if tax rate can be used for expense accounts
   * @type {boolean}
   * @memberof TaxRatesFilter
   */
  expenses?: boolean
  /**
   * Boolean to describe if tax rate can be used for liability accounts
   * @type {boolean}
   * @memberof TaxRatesFilter
   */
  liabilities?: boolean
  /**
   * Boolean to describe if tax rate can be used for revenue accounts
   * @type {boolean}
   * @memberof TaxRatesFilter
   */
  revenue?: boolean
}

export function TaxRatesFilterFromJSON(json: any): TaxRatesFilter {
  return TaxRatesFilterFromJSONTyped(json, false)
}

export function TaxRatesFilterFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): TaxRatesFilter {
  if (json === undefined || json === null) {
    return json
  }
  return {
    assets: !exists(json, 'assets') ? undefined : json['assets'],
    equity: !exists(json, 'equity') ? undefined : json['equity'],
    expenses: !exists(json, 'expenses') ? undefined : json['expenses'],
    liabilities: !exists(json, 'liabilities') ? undefined : json['liabilities'],
    revenue: !exists(json, 'revenue') ? undefined : json['revenue']
  }
}

export function TaxRatesFilterToJSON(value?: TaxRatesFilter | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    assets: value.assets,
    equity: value.equity,
    expenses: value.expenses,
    liabilities: value.liabilities,
    revenue: value.revenue
  }
}
