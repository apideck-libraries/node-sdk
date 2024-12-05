/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.8.2
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
 * @interface DeleteAccountingLocationResponse
 */
export interface DeleteAccountingLocationResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof DeleteAccountingLocationResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof DeleteAccountingLocationResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof DeleteAccountingLocationResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof DeleteAccountingLocationResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof DeleteAccountingLocationResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof DeleteAccountingLocationResponse
   */
  data: UnifiedId
}

export function DeleteAccountingLocationResponseFromJSON(
  json: any
): DeleteAccountingLocationResponse {
  return DeleteAccountingLocationResponseFromJSONTyped(json, false)
}

export function DeleteAccountingLocationResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): DeleteAccountingLocationResponse {
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

export function DeleteAccountingLocationResponseToJSON(
  value?: DeleteAccountingLocationResponse | null
): any {
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
