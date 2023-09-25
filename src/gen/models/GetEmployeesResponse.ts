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
import { EmployeeList, EmployeeListFromJSON, EmployeeListToJSON } from './EmployeeList'
import { Links, LinksFromJSON, LinksToJSON } from './Links'
import { Meta, MetaFromJSON, MetaToJSON } from './Meta'

/**
 *
 * @export
 * @interface GetEmployeesResponse
 */
export interface GetEmployeesResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetEmployeesResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetEmployeesResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetEmployeesResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetEmployeesResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof GetEmployeesResponse
   */
  operation: string
  /**
   *
   * @type {Array<EmployeeList>}
   * @memberof GetEmployeesResponse
   */
  data: Array<EmployeeList>
  /**
   *
   * @type {Meta}
   * @memberof GetEmployeesResponse
   */
  meta?: Meta
  /**
   *
   * @type {Links}
   * @memberof GetEmployeesResponse
   */
  links?: Links
}

export function GetEmployeesResponseFromJSON(json: any): GetEmployeesResponse {
  return GetEmployeesResponseFromJSONTyped(json, false)
}

export function GetEmployeesResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetEmployeesResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: (json['data'] as Array<any>).map(EmployeeListFromJSON),
    meta: !exists(json, 'meta') ? undefined : MetaFromJSON(json['meta']),
    links: !exists(json, 'links') ? undefined : LinksFromJSON(json['links'])
  }
}

export function GetEmployeesResponseToJSON(value?: GetEmployeesResponse | null): any {
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
    data: (value.data as Array<any>).map(EmployeeListToJSON),
    meta: MetaToJSON(value.meta),
    links: LinksToJSON(value.links)
  }
}
