/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.3.3
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
 * @interface UpdateApplicantResponse
 */
export interface UpdateApplicantResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof UpdateApplicantResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof UpdateApplicantResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof UpdateApplicantResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof UpdateApplicantResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof UpdateApplicantResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof UpdateApplicantResponse
   */
  data: UnifiedId
}

export function UpdateApplicantResponseFromJSON(json: any): UpdateApplicantResponse {
  return UpdateApplicantResponseFromJSONTyped(json, false)
}

export function UpdateApplicantResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): UpdateApplicantResponse {
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

export function UpdateApplicantResponseToJSON(value?: UpdateApplicantResponse | null): any {
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
