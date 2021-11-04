/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.3.2
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
 * @interface CreateApplicantResponse
 */
export interface CreateApplicantResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof CreateApplicantResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof CreateApplicantResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof CreateApplicantResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof CreateApplicantResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof CreateApplicantResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof CreateApplicantResponse
   */
  data: UnifiedId
}

export function CreateApplicantResponseFromJSON(json: any): CreateApplicantResponse {
  return CreateApplicantResponseFromJSONTyped(json, false)
}

export function CreateApplicantResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): CreateApplicantResponse {
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

export function CreateApplicantResponseToJSON(value?: CreateApplicantResponse | null): any {
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