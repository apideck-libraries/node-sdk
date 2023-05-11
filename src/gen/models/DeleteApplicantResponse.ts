/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 9.4.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { UnifiedId, UnifiedIdFromJSON, UnifiedIdToJSON } from './UnifiedId'

/**
 *
 * @export
 * @interface DeleteApplicantResponse
 */
export interface DeleteApplicantResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof DeleteApplicantResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof DeleteApplicantResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof DeleteApplicantResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof DeleteApplicantResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof DeleteApplicantResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof DeleteApplicantResponse
   */
  data: UnifiedId
}

export function DeleteApplicantResponseFromJSON(json: any): DeleteApplicantResponse {
  return DeleteApplicantResponseFromJSONTyped(json, false)
}

export function DeleteApplicantResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): DeleteApplicantResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: UnifiedIdFromJSON(json['data'])
  }
}

export function DeleteApplicantResponseToJSON(value?: DeleteApplicantResponse | null): any {
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
    data: UnifiedIdToJSON(value.data)
  }
}