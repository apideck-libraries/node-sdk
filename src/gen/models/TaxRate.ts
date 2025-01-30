/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.11.1
 * Contact: support@apideck.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { CustomField, CustomFieldFromJSON, CustomFieldToJSON } from './CustomField'
import { PassThroughBody, PassThroughBodyFromJSON, PassThroughBodyToJSON } from './PassThroughBody'

/**
 *
 * @export
 * @interface TaxRate
 */
export interface TaxRate {
  /**
   * ID assigned to identify this tax rate.
   * @type {string}
   * @memberof TaxRate
   */
  id?: string | null
  /**
   * Name assigned to identify this tax rate.
   * @type {string}
   * @memberof TaxRate
   */
  name?: string
  /**
   * Tax code assigned to identify this tax rate.
   * @type {string}
   * @memberof TaxRate
   */
  code?: string | null
  /**
   * Description of tax rate
   * @type {string}
   * @memberof TaxRate
   */
  description?: string | null
  /**
   * Effective tax rate
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
   * Tax type used to indicate the source of tax collected or paid
   * @type {string}
   * @memberof TaxRate
   */
  type?: string | null
  /**
   * Report Tax type to aggregate tax collected or paid for reporting purposes
   * @type {string}
   * @memberof TaxRate
   */
  report_tax_type?: string | null
  /**
   * ID of the original tax rate from which the new tax rate is derived. Helps to understand the relationship between corresponding tax rate entities.
   * @type {string}
   * @memberof TaxRate
   */
  original_tax_rate_id?: string | null
  /**
   * Tax rate status
   * @type {string}
   * @memberof TaxRate
   */
  status?: TaxRateStatus
  /**
   * When custom mappings are configured on the resource, the result is included here.
   * @type {object}
   * @memberof TaxRate
   */
  readonly custom_mappings?: object | null
  /**
   * A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object.
   * @type {string}
   * @memberof TaxRate
   */
  row_version?: string | null
  /**
   * The user who last updated the object.
   * @type {string}
   * @memberof TaxRate
   */
  readonly updated_by?: string | null
  /**
   * The user who created the object.
   * @type {string}
   * @memberof TaxRate
   */
  readonly created_by?: string | null
  /**
   * The date and time when the object was last updated.
   * @type {Date}
   * @memberof TaxRate
   */
  readonly updated_at?: Date | null
  /**
   * The date and time when the object was created.
   * @type {Date}
   * @memberof TaxRate
   */
  readonly created_at?: Date | null
  /**
   *
   * @type {PassThroughBody}
   * @memberof TaxRate
   */
  pass_through?: PassThroughBody
  /**
   * The subsidiaries this belongs to.
   * @type {Array<object>}
   * @memberof TaxRate
   */
  subsidiaries?: Array<object>
  /**
   *
   * @type {Array<CustomField>}
   * @memberof TaxRate
   */
  custom_fields?: Array<CustomField>
}

/**
 * @export
 * @enum {string}
 */
export enum TaxRateStatus {
  active = 'active',
  inactive = 'inactive',
  archived = 'archived'
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
    type: !exists(json, 'type') ? undefined : json['type'],
    report_tax_type: !exists(json, 'report_tax_type') ? undefined : json['report_tax_type'],
    original_tax_rate_id: !exists(json, 'original_tax_rate_id')
      ? undefined
      : json['original_tax_rate_id'],
    status: !exists(json, 'status') ? undefined : json['status'],
    custom_mappings: !exists(json, 'custom_mappings') ? undefined : json['custom_mappings'],
    row_version: !exists(json, 'row_version') ? undefined : json['row_version'],
    updated_by: !exists(json, 'updated_by') ? undefined : json['updated_by'],
    created_by: !exists(json, 'created_by') ? undefined : json['created_by'],
    updated_at: !exists(json, 'updated_at')
      ? undefined
      : json['updated_at'] === null
      ? null
      : new Date(json['updated_at']),
    created_at: !exists(json, 'created_at')
      ? undefined
      : json['created_at'] === null
      ? null
      : new Date(json['created_at']),
    pass_through: !exists(json, 'pass_through')
      ? undefined
      : PassThroughBodyFromJSON(json['pass_through']),
    subsidiaries: !exists(json, 'subsidiaries') ? undefined : json['subsidiaries'],
    custom_fields: !exists(json, 'custom_fields')
      ? undefined
      : (json['custom_fields'] as Array<any>).map(CustomFieldFromJSON)
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
    id: value.id,
    name: value.name,
    code: value.code,
    description: value.description,
    effective_tax_rate: value.effective_tax_rate,
    total_tax_rate: value.total_tax_rate,
    tax_payable_account_id: value.tax_payable_account_id,
    tax_remitted_account_id: value.tax_remitted_account_id,
    components: value.components,
    type: value.type,
    report_tax_type: value.report_tax_type,
    original_tax_rate_id: value.original_tax_rate_id,
    status: value.status,
    row_version: value.row_version,
    pass_through: PassThroughBodyToJSON(value.pass_through),
    subsidiaries: value.subsidiaries,
    custom_fields:
      value.custom_fields === undefined
        ? undefined
        : (value.custom_fields as Array<any>).map(CustomFieldToJSON)
  }
}
