/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.17.0
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
 * @interface UpdateLedgerAccountResponse
 */
export interface UpdateLedgerAccountResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof UpdateLedgerAccountResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof UpdateLedgerAccountResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof UpdateLedgerAccountResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof UpdateLedgerAccountResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof UpdateLedgerAccountResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof UpdateLedgerAccountResponse
   */
  data: UnifiedId
}

export function UpdateLedgerAccountResponseFromJSON(json: any): UpdateLedgerAccountResponse {
  return UpdateLedgerAccountResponseFromJSONTyped(json, false)
}

export function UpdateLedgerAccountResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): UpdateLedgerAccountResponse {
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

export function UpdateLedgerAccountResponseToJSON(value?: UpdateLedgerAccountResponse | null): any {
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
