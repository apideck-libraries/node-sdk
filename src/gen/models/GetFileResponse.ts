/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.8.2
 * Contact: support@apideck.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { UnifiedFile, UnifiedFileFromJSON, UnifiedFileToJSON } from './UnifiedFile'

/**
 *
 * @export
 * @interface GetFileResponse
 */
export interface GetFileResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetFileResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetFileResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetFileResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetFileResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof GetFileResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedFile}
   * @memberof GetFileResponse
   */
  data: UnifiedFile
}

export function GetFileResponseFromJSON(json: any): GetFileResponse {
  return GetFileResponseFromJSONTyped(json, false)
}

export function GetFileResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetFileResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: UnifiedFileFromJSON(json['data'])
  }
}

export function GetFileResponseToJSON(value?: GetFileResponse | null): any {
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
    data: UnifiedFileToJSON(value.data)
  }
}
