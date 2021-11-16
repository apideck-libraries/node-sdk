/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.7.1
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
 * @interface CreateLedgerAccountResponse
 */
export interface CreateLedgerAccountResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof CreateLedgerAccountResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof CreateLedgerAccountResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof CreateLedgerAccountResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof CreateLedgerAccountResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof CreateLedgerAccountResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof CreateLedgerAccountResponse
   */
  data: UnifiedId
}

export function CreateLedgerAccountResponseFromJSON(json: any): CreateLedgerAccountResponse {
  return CreateLedgerAccountResponseFromJSONTyped(json, false)
}

export function CreateLedgerAccountResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): CreateLedgerAccountResponse {
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

export function CreateLedgerAccountResponseToJSON(value?: CreateLedgerAccountResponse | null): any {
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
