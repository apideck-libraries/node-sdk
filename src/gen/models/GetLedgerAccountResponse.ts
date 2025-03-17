/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.13.0
 * Contact: support@apideck.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { LedgerAccount, LedgerAccountFromJSON, LedgerAccountToJSON } from './LedgerAccount'
import { Raw, RawFromJSON, RawToJSON } from './Raw'

/**
 *
 * @export
 * @interface GetLedgerAccountResponse
 */
export interface GetLedgerAccountResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetLedgerAccountResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetLedgerAccountResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetLedgerAccountResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetLedgerAccountResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof GetLedgerAccountResponse
   */
  operation: string
  /**
   *
   * @type {LedgerAccount}
   * @memberof GetLedgerAccountResponse
   */
  data: LedgerAccount
  /**
   *
   * @type {Raw}
   * @memberof GetLedgerAccountResponse
   */
  _raw?: Raw | null
}

export function GetLedgerAccountResponseFromJSON(json: any): GetLedgerAccountResponse {
  return GetLedgerAccountResponseFromJSONTyped(json, false)
}

export function GetLedgerAccountResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetLedgerAccountResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: LedgerAccountFromJSON(json['data']),
    _raw: !exists(json, '_raw') ? undefined : RawFromJSON(json['_raw'])
  }
}

export function GetLedgerAccountResponseToJSON(value?: GetLedgerAccountResponse | null): any {
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
    data: LedgerAccountToJSON(value.data),
    _raw: RawToJSON(value._raw)
  }
}
