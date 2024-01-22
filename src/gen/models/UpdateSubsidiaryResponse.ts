/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.2.2
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
 * @interface UpdateSubsidiaryResponse
 */
export interface UpdateSubsidiaryResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof UpdateSubsidiaryResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof UpdateSubsidiaryResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof UpdateSubsidiaryResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof UpdateSubsidiaryResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof UpdateSubsidiaryResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof UpdateSubsidiaryResponse
   */
  data: UnifiedId
}

export function UpdateSubsidiaryResponseFromJSON(json: any): UpdateSubsidiaryResponse {
  return UpdateSubsidiaryResponseFromJSONTyped(json, false)
}

export function UpdateSubsidiaryResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): UpdateSubsidiaryResponse {
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

export function UpdateSubsidiaryResponseToJSON(value?: UpdateSubsidiaryResponse | null): any {
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
