/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.11.2
 * Contact: support@apideck.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { UnifiedId, UnifiedIdFromJSON, UnifiedIdToJSON } from './UnifiedId'

/**
 *
 * @export
 * @interface CreateBillResponse
 */
export interface CreateBillResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof CreateBillResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof CreateBillResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof CreateBillResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof CreateBillResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof CreateBillResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof CreateBillResponse
   */
  data: UnifiedId
}

export function CreateBillResponseFromJSON(json: any): CreateBillResponse {
  return CreateBillResponseFromJSONTyped(json, false)
}

export function CreateBillResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): CreateBillResponse {
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

export function CreateBillResponseToJSON(value?: CreateBillResponse | null): any {
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
