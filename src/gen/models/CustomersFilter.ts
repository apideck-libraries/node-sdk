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
 * @interface CustomersFilter
 */
export interface CustomersFilter {
  /**
   * Company Name of customer to search for
   * @type {string}
   * @memberof CustomersFilter
   */
  company_name?: string
  /**
   * Display Name of customer to search for
   * @type {string}
   * @memberof CustomersFilter
   */
  display_name?: string
  /**
   * First name of customer to search for
   * @type {string}
   * @memberof CustomersFilter
   */
  first_name?: string
  /**
   * Last name of customer to search for
   * @type {string}
   * @memberof CustomersFilter
   */
  last_name?: string
  /**
   * Email of customer to search for
   * @type {string}
   * @memberof CustomersFilter
   */
  email?: string
  /**
   * Status of customer to filter on
   * @type {string}
   * @memberof CustomersFilter
   */
  status?: CustomersFilterStatus
  /**
   *
   * @type {Date}
   * @memberof CustomersFilter
   */
  updated_since?: Date
  /**
   * Supplier ID of customer to search for
   * @type {string}
   * @memberof CustomersFilter
   */
  supplier_id?: string
}

/**
 * @export
 * @enum {string}
 */
export enum CustomersFilterStatus {
  active = 'active',
  inactive = 'inactive',
  archived = 'archived',
  all = 'all'
}

export function CustomersFilterFromJSON(json: any): CustomersFilter {
  return CustomersFilterFromJSONTyped(json, false)
}

export function CustomersFilterFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): CustomersFilter {
  if (json === undefined || json === null) {
    return json
  }
  return {
    company_name: !exists(json, 'company_name') ? undefined : json['company_name'],
    display_name: !exists(json, 'display_name') ? undefined : json['display_name'],
    first_name: !exists(json, 'first_name') ? undefined : json['first_name'],
    last_name: !exists(json, 'last_name') ? undefined : json['last_name'],
    email: !exists(json, 'email') ? undefined : json['email'],
    status: !exists(json, 'status') ? undefined : json['status'],
    updated_since: !exists(json, 'updated_since') ? undefined : new Date(json['updated_since']),
    supplier_id: !exists(json, 'supplier_id') ? undefined : json['supplier_id']
  }
}

export function CustomersFilterToJSON(value?: CustomersFilter | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    company_name: value.company_name,
    display_name: value.display_name,
    first_name: value.first_name,
    last_name: value.last_name,
    email: value.email,
    status: value.status,
    updated_since:
      value.updated_since === undefined ? undefined : new Date(value.updated_since).toISOString(),
    supplier_id: value.supplier_id
  }
}
