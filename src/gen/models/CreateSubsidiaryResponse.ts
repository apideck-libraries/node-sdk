/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.3.5
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
 * @interface CreateSubsidiaryResponse
 */
export interface CreateSubsidiaryResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof CreateSubsidiaryResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof CreateSubsidiaryResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof CreateSubsidiaryResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof CreateSubsidiaryResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof CreateSubsidiaryResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof CreateSubsidiaryResponse
   */
  data: UnifiedId
}

export function CreateSubsidiaryResponseFromJSON(json: any): CreateSubsidiaryResponse {
  return CreateSubsidiaryResponseFromJSONTyped(json, false)
}

export function CreateSubsidiaryResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): CreateSubsidiaryResponse {
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

export function CreateSubsidiaryResponseToJSON(value?: CreateSubsidiaryResponse | null): any {
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
