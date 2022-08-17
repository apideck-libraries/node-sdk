/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.41.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { BalanceSheet, BalanceSheetFromJSON, BalanceSheetToJSON } from './BalanceSheet'

/**
 *
 * @export
 * @interface GetBalanceSheetResponse
 */
export interface GetBalanceSheetResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetBalanceSheetResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetBalanceSheetResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetBalanceSheetResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetBalanceSheetResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof GetBalanceSheetResponse
   */
  operation: string
  /**
   *
   * @type {BalanceSheet}
   * @memberof GetBalanceSheetResponse
   */
  data: BalanceSheet
}

export function GetBalanceSheetResponseFromJSON(json: any): GetBalanceSheetResponse {
  return GetBalanceSheetResponseFromJSONTyped(json, false)
}

export function GetBalanceSheetResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetBalanceSheetResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: BalanceSheetFromJSON(json['data'])
  }
}

export function GetBalanceSheetResponseToJSON(value?: GetBalanceSheetResponse | null): any {
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
    data: BalanceSheetToJSON(value.data)
  }
}
