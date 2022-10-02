/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.66.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Bill, BillFromJSON, BillToJSON } from './Bill'

/**
 *
 * @export
 * @interface GetBillResponse
 */
export interface GetBillResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetBillResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetBillResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetBillResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetBillResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof GetBillResponse
   */
  operation: string
  /**
   *
   * @type {Bill}
   * @memberof GetBillResponse
   */
  data: Bill
}

export function GetBillResponseFromJSON(json: any): GetBillResponse {
  return GetBillResponseFromJSONTyped(json, false)
}

export function GetBillResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetBillResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: BillFromJSON(json['data'])
  }
}

export function GetBillResponseToJSON(value?: GetBillResponse | null): any {
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
    data: BillToJSON(value.data)
  }
}
