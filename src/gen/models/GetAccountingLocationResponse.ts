/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.3.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import {
  AccountingLocation,
  AccountingLocationFromJSON,
  AccountingLocationToJSON
} from './AccountingLocation'

/**
 *
 * @export
 * @interface GetAccountingLocationResponse
 */
export interface GetAccountingLocationResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetAccountingLocationResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetAccountingLocationResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetAccountingLocationResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetAccountingLocationResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof GetAccountingLocationResponse
   */
  operation: string
  /**
   *
   * @type {AccountingLocation}
   * @memberof GetAccountingLocationResponse
   */
  data: AccountingLocation
}

export function GetAccountingLocationResponseFromJSON(json: any): GetAccountingLocationResponse {
  return GetAccountingLocationResponseFromJSONTyped(json, false)
}

export function GetAccountingLocationResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetAccountingLocationResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: AccountingLocationFromJSON(json['data'])
  }
}

export function GetAccountingLocationResponseToJSON(
  value?: GetAccountingLocationResponse | null
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
    data: AccountingLocationToJSON(value.data)
  }
}