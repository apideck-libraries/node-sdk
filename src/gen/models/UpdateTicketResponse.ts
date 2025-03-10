/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.12.1
 * Contact: support@apideck.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { Raw, RawFromJSON, RawToJSON } from './Raw'
import { UnifiedId, UnifiedIdFromJSON, UnifiedIdToJSON } from './UnifiedId'

/**
 *
 * @export
 * @interface UpdateTicketResponse
 */
export interface UpdateTicketResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof UpdateTicketResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof UpdateTicketResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof UpdateTicketResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof UpdateTicketResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof UpdateTicketResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof UpdateTicketResponse
   */
  data: UnifiedId
  /**
   *
   * @type {Raw}
   * @memberof UpdateTicketResponse
   */
  _raw?: Raw | null
}

export function UpdateTicketResponseFromJSON(json: any): UpdateTicketResponse {
  return UpdateTicketResponseFromJSONTyped(json, false)
}

export function UpdateTicketResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): UpdateTicketResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: UnifiedIdFromJSON(json['data']),
    _raw: !exists(json, '_raw') ? undefined : RawFromJSON(json['_raw'])
  }
}

export function UpdateTicketResponseToJSON(value?: UpdateTicketResponse | null): any {
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
    data: UnifiedIdToJSON(value.data),
    _raw: RawToJSON(value._raw)
  }
}
