/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.85.1
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
 * @interface CreateTenderResponse
 */
export interface CreateTenderResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof CreateTenderResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof CreateTenderResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof CreateTenderResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof CreateTenderResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof CreateTenderResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof CreateTenderResponse
   */
  data: UnifiedId
}

export function CreateTenderResponseFromJSON(json: any): CreateTenderResponse {
  return CreateTenderResponseFromJSONTyped(json, false)
}

export function CreateTenderResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): CreateTenderResponse {
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

export function CreateTenderResponseToJSON(value?: CreateTenderResponse | null): any {
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
