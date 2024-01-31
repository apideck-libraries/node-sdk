/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.3.0
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
 * @interface DeleteSubsidiaryResponse
 */
export interface DeleteSubsidiaryResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof DeleteSubsidiaryResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof DeleteSubsidiaryResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof DeleteSubsidiaryResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof DeleteSubsidiaryResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof DeleteSubsidiaryResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof DeleteSubsidiaryResponse
   */
  data: UnifiedId
}

export function DeleteSubsidiaryResponseFromJSON(json: any): DeleteSubsidiaryResponse {
  return DeleteSubsidiaryResponseFromJSONTyped(json, false)
}

export function DeleteSubsidiaryResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): DeleteSubsidiaryResponse {
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

export function DeleteSubsidiaryResponseToJSON(value?: DeleteSubsidiaryResponse | null): any {
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
