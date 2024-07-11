/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.6.3
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import {
  AccountingDepartment,
  AccountingDepartmentFromJSON,
  AccountingDepartmentToJSON
} from './AccountingDepartment'
import { Links, LinksFromJSON, LinksToJSON } from './Links'
import { Meta, MetaFromJSON, MetaToJSON } from './Meta'

/**
 *
 * @export
 * @interface GetAccountingDepartmentsResponse
 */
export interface GetAccountingDepartmentsResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetAccountingDepartmentsResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetAccountingDepartmentsResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetAccountingDepartmentsResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetAccountingDepartmentsResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof GetAccountingDepartmentsResponse
   */
  operation: string
  /**
   *
   * @type {Array<AccountingDepartment>}
   * @memberof GetAccountingDepartmentsResponse
   */
  data: Array<AccountingDepartment>
  /**
   *
   * @type {Meta}
   * @memberof GetAccountingDepartmentsResponse
   */
  meta?: Meta
  /**
   *
   * @type {Links}
   * @memberof GetAccountingDepartmentsResponse
   */
  links?: Links
}

export function GetAccountingDepartmentsResponseFromJSON(
  json: any
): GetAccountingDepartmentsResponse {
  return GetAccountingDepartmentsResponseFromJSONTyped(json, false)
}

export function GetAccountingDepartmentsResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetAccountingDepartmentsResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: (json['data'] as Array<any>).map(AccountingDepartmentFromJSON),
    meta: !exists(json, 'meta') ? undefined : MetaFromJSON(json['meta']),
    links: !exists(json, 'links') ? undefined : LinksFromJSON(json['links'])
  }
}

export function GetAccountingDepartmentsResponseToJSON(
  value?: GetAccountingDepartmentsResponse | null
): any {
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
    data: (value.data as Array<any>).map(AccountingDepartmentToJSON),
    meta: MetaToJSON(value.meta),
    links: LinksToJSON(value.links)
  }
}
