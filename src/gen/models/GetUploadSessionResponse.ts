/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.32.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { UploadSession, UploadSessionFromJSON, UploadSessionToJSON } from './UploadSession'

/**
 *
 * @export
 * @interface GetUploadSessionResponse
 */
export interface GetUploadSessionResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetUploadSessionResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetUploadSessionResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetUploadSessionResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetUploadSessionResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof GetUploadSessionResponse
   */
  operation: string
  /**
   *
   * @type {UploadSession}
   * @memberof GetUploadSessionResponse
   */
  data: UploadSession
}

export function GetUploadSessionResponseFromJSON(json: any): GetUploadSessionResponse {
  return GetUploadSessionResponseFromJSONTyped(json, false)
}

export function GetUploadSessionResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetUploadSessionResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: UploadSessionFromJSON(json['data'])
  }
}

export function GetUploadSessionResponseToJSON(value?: GetUploadSessionResponse | null): any {
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
    data: UploadSessionToJSON(value.data)
  }
}
