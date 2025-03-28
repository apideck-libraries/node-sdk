/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.12.4
 * Contact: support@apideck.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { Expense, ExpenseFromJSON, ExpenseToJSON } from './Expense'
import { Links, LinksFromJSON, LinksToJSON } from './Links'
import { Meta, MetaFromJSON, MetaToJSON } from './Meta'
import { Raw, RawFromJSON, RawToJSON } from './Raw'

/**
 *
 * @export
 * @interface GetExpensesResponse
 */
export interface GetExpensesResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetExpensesResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetExpensesResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetExpensesResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetExpensesResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof GetExpensesResponse
   */
  operation: string
  /**
   *
   * @type {Array<Expense>}
   * @memberof GetExpensesResponse
   */
  data: Array<Expense>
  /**
   *
   * @type {Meta}
   * @memberof GetExpensesResponse
   */
  meta?: Meta
  /**
   *
   * @type {Links}
   * @memberof GetExpensesResponse
   */
  links?: Links
  /**
   *
   * @type {Raw}
   * @memberof GetExpensesResponse
   */
  _raw?: Raw | null
}

export function GetExpensesResponseFromJSON(json: any): GetExpensesResponse {
  return GetExpensesResponseFromJSONTyped(json, false)
}

export function GetExpensesResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetExpensesResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: (json['data'] as Array<any>).map(ExpenseFromJSON),
    meta: !exists(json, 'meta') ? undefined : MetaFromJSON(json['meta']),
    links: !exists(json, 'links') ? undefined : LinksFromJSON(json['links']),
    _raw: !exists(json, '_raw') ? undefined : RawFromJSON(json['_raw'])
  }
}

export function GetExpensesResponseToJSON(value?: GetExpensesResponse | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    status_code: value.status_code,
    status: value.status,
    service: value.service,
    resource: value.resource,
    operation: value.operation,
    data: (value.data as Array<any>).map(ExpenseToJSON),
    meta: MetaToJSON(value.meta),
    links: LinksToJSON(value.links),
    _raw: RawToJSON(value._raw)
  }
}
