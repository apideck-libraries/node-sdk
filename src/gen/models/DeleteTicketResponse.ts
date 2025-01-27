/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.11.0
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
 * @interface DeleteTicketResponse
 */
export interface DeleteTicketResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof DeleteTicketResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof DeleteTicketResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof DeleteTicketResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof DeleteTicketResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof DeleteTicketResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof DeleteTicketResponse
   */
  data: UnifiedId
}

export function DeleteTicketResponseFromJSON(json: any): DeleteTicketResponse {
  return DeleteTicketResponseFromJSONTyped(json, false)
}

export function DeleteTicketResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): DeleteTicketResponse {
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

export function DeleteTicketResponseToJSON(value?: DeleteTicketResponse | null): any {
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
