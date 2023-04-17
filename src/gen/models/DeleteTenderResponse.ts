/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 9.2.0
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
 * @interface DeleteTenderResponse
 */
export interface DeleteTenderResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof DeleteTenderResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof DeleteTenderResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof DeleteTenderResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof DeleteTenderResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof DeleteTenderResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof DeleteTenderResponse
   */
  data: UnifiedId
}

export function DeleteTenderResponseFromJSON(json: any): DeleteTenderResponse {
  return DeleteTenderResponseFromJSONTyped(json, false)
}

export function DeleteTenderResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): DeleteTenderResponse {
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

export function DeleteTenderResponseToJSON(value?: DeleteTenderResponse | null): any {
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
