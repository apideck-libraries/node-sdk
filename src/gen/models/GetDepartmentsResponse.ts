/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.74.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { Department, DepartmentFromJSON, DepartmentToJSON } from './Department'
import { Links, LinksFromJSON, LinksToJSON } from './Links'
import { Meta, MetaFromJSON, MetaToJSON } from './Meta'

/**
 *
 * @export
 * @interface GetDepartmentsResponse
 */
export interface GetDepartmentsResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetDepartmentsResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetDepartmentsResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetDepartmentsResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetDepartmentsResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof GetDepartmentsResponse
   */
  operation: string
  /**
   *
   * @type {Array<Department>}
   * @memberof GetDepartmentsResponse
   */
  data: Array<Department>
  /**
   *
   * @type {Meta}
   * @memberof GetDepartmentsResponse
   */
  meta?: Meta
  /**
   *
   * @type {Links}
   * @memberof GetDepartmentsResponse
   */
  links?: Links
}

export function GetDepartmentsResponseFromJSON(json: any): GetDepartmentsResponse {
  return GetDepartmentsResponseFromJSONTyped(json, false)
}

export function GetDepartmentsResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetDepartmentsResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: (json['data'] as Array<any>).map(DepartmentFromJSON),
    meta: !exists(json, 'meta') ? undefined : MetaFromJSON(json['meta']),
    links: !exists(json, 'links') ? undefined : LinksFromJSON(json['links'])
  }
}

export function GetDepartmentsResponseToJSON(value?: GetDepartmentsResponse | null): any {
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
    data: (value.data as Array<any>).map(DepartmentToJSON),
    meta: MetaToJSON(value.meta),
    links: LinksToJSON(value.links)
  }
}
