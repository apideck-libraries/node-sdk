/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.37.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { SharedLink, SharedLinkFromJSON, SharedLinkToJSON } from './SharedLink'

/**
 *
 * @export
 * @interface GetSharedLinkResponse
 */
export interface GetSharedLinkResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetSharedLinkResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetSharedLinkResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetSharedLinkResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetSharedLinkResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof GetSharedLinkResponse
   */
  operation: string
  /**
   *
   * @type {SharedLink}
   * @memberof GetSharedLinkResponse
   */
  data: SharedLink
}

export function GetSharedLinkResponseFromJSON(json: any): GetSharedLinkResponse {
  return GetSharedLinkResponseFromJSONTyped(json, false)
}

export function GetSharedLinkResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetSharedLinkResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: SharedLinkFromJSON(json['data'])
  }
}

export function GetSharedLinkResponseToJSON(value?: GetSharedLinkResponse | null): any {
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
    data: SharedLinkToJSON(value.data)
  }
}
