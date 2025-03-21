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
import {
  AccountingDepartment,
  AccountingDepartmentFromJSON,
  AccountingDepartmentToJSON
} from './AccountingDepartment'
import { Raw, RawFromJSON, RawToJSON } from './Raw'

/**
 *
 * @export
 * @interface GetAccountingDepartmentResponse
 */
export interface GetAccountingDepartmentResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetAccountingDepartmentResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetAccountingDepartmentResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetAccountingDepartmentResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetAccountingDepartmentResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof GetAccountingDepartmentResponse
   */
  operation: string
  /**
   *
   * @type {AccountingDepartment}
   * @memberof GetAccountingDepartmentResponse
   */
  data: AccountingDepartment
  /**
   *
   * @type {Raw}
   * @memberof GetAccountingDepartmentResponse
   */
  _raw?: Raw | null
}

export function GetAccountingDepartmentResponseFromJSON(
  json: any
): GetAccountingDepartmentResponse {
  return GetAccountingDepartmentResponseFromJSONTyped(json, false)
}

export function GetAccountingDepartmentResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetAccountingDepartmentResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: AccountingDepartmentFromJSON(json['data']),
    _raw: !exists(json, '_raw') ? undefined : RawFromJSON(json['_raw'])
  }
}

export function GetAccountingDepartmentResponseToJSON(
  value?: GetAccountingDepartmentResponse | null
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
    data: AccountingDepartmentToJSON(value.data),
    _raw: RawToJSON(value._raw)
  }
}
