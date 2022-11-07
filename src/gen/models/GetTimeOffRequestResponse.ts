/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.78.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { TimeOffRequest, TimeOffRequestFromJSON, TimeOffRequestToJSON } from './TimeOffRequest'

/**
 *
 * @export
 * @interface GetTimeOffRequestResponse
 */
export interface GetTimeOffRequestResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetTimeOffRequestResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetTimeOffRequestResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetTimeOffRequestResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetTimeOffRequestResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof GetTimeOffRequestResponse
   */
  operation: string
  /**
   *
   * @type {TimeOffRequest}
   * @memberof GetTimeOffRequestResponse
   */
  data: TimeOffRequest
}

export function GetTimeOffRequestResponseFromJSON(json: any): GetTimeOffRequestResponse {
  return GetTimeOffRequestResponseFromJSONTyped(json, false)
}

export function GetTimeOffRequestResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetTimeOffRequestResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: TimeOffRequestFromJSON(json['data'])
  }
}

export function GetTimeOffRequestResponseToJSON(value?: GetTimeOffRequestResponse | null): any {
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
    data: TimeOffRequestToJSON(value.data)
  }
}
