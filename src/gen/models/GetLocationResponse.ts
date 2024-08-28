/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.7.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Location, LocationFromJSON, LocationToJSON } from './Location'

/**
 *
 * @export
 * @interface GetLocationResponse
 */
export interface GetLocationResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetLocationResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetLocationResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetLocationResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetLocationResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof GetLocationResponse
   */
  operation: string
  /**
   *
   * @type {Location}
   * @memberof GetLocationResponse
   */
  data: Location
}

export function GetLocationResponseFromJSON(json: any): GetLocationResponse {
  return GetLocationResponseFromJSONTyped(json, false)
}

export function GetLocationResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetLocationResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: LocationFromJSON(json['data'])
  }
}

export function GetLocationResponseToJSON(value?: GetLocationResponse | null): any {
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
    data: LocationToJSON(value.data)
  }
}
