/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.6.0
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
 * @interface CreateTicketResponse
 */
export interface CreateTicketResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof CreateTicketResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof CreateTicketResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof CreateTicketResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof CreateTicketResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof CreateTicketResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof CreateTicketResponse
   */
  data: UnifiedId
}

export function CreateTicketResponseFromJSON(json: any): CreateTicketResponse {
  return CreateTicketResponseFromJSONTyped(json, false)
}

export function CreateTicketResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): CreateTicketResponse {
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

export function CreateTicketResponseToJSON(value?: CreateTicketResponse | null): any {
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
