/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.9.0
 * Contact: support@apideck.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Expense, ExpenseFromJSON, ExpenseToJSON } from './Expense'

/**
 *
 * @export
 * @interface GetExpenseResponse
 */
export interface GetExpenseResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetExpenseResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetExpenseResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetExpenseResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetExpenseResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof GetExpenseResponse
   */
  operation: string
  /**
   *
   * @type {Expense}
   * @memberof GetExpenseResponse
   */
  data: Expense
}

export function GetExpenseResponseFromJSON(json: any): GetExpenseResponse {
  return GetExpenseResponseFromJSONTyped(json, false)
}

export function GetExpenseResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetExpenseResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: ExpenseFromJSON(json['data'])
  }
}

export function GetExpenseResponseToJSON(value?: GetExpenseResponse | null): any {
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
    data: ExpenseToJSON(value.data)
  }
}
