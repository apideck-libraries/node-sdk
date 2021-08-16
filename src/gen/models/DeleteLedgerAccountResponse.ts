/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 5.2.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

// Override template imports only to fix circulr dependencies generated by default template
// https://github.com/OpenAPITools/openapi-generator/issues/6140

import { UnifiedId, UnifiedIdFromJSON, UnifiedIdToJSON } from './UnifiedId'

/**
 *
 * @export
 * @interface DeleteLedgerAccountResponse
 */
export interface DeleteLedgerAccountResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof DeleteLedgerAccountResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof DeleteLedgerAccountResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof DeleteLedgerAccountResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof DeleteLedgerAccountResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof DeleteLedgerAccountResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof DeleteLedgerAccountResponse
   */
  data: UnifiedId
}

export function DeleteLedgerAccountResponseFromJSON(json: any): DeleteLedgerAccountResponse {
  return DeleteLedgerAccountResponseFromJSONTyped(json, false)
}

export function DeleteLedgerAccountResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): DeleteLedgerAccountResponse {
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

export function DeleteLedgerAccountResponseToJSON(value?: DeleteLedgerAccountResponse | null): any {
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
