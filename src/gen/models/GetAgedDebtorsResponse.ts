/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.12.4
 * Contact: support@apideck.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { AgedDebtors, AgedDebtorsFromJSON, AgedDebtorsToJSON } from './AgedDebtors'
import { Raw, RawFromJSON, RawToJSON } from './Raw'

/**
 *
 * @export
 * @interface GetAgedDebtorsResponse
 */
export interface GetAgedDebtorsResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetAgedDebtorsResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetAgedDebtorsResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetAgedDebtorsResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetAgedDebtorsResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof GetAgedDebtorsResponse
   */
  operation: string
  /**
   *
   * @type {AgedDebtors}
   * @memberof GetAgedDebtorsResponse
   */
  data: AgedDebtors
  /**
   *
   * @type {Raw}
   * @memberof GetAgedDebtorsResponse
   */
  _raw?: Raw | null
}

export function GetAgedDebtorsResponseFromJSON(json: any): GetAgedDebtorsResponse {
  return GetAgedDebtorsResponseFromJSONTyped(json, false)
}

export function GetAgedDebtorsResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetAgedDebtorsResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: AgedDebtorsFromJSON(json['data']),
    _raw: !exists(json, '_raw') ? undefined : RawFromJSON(json['_raw'])
  }
}

export function GetAgedDebtorsResponseToJSON(value?: GetAgedDebtorsResponse | null): any {
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
    data: AgedDebtorsToJSON(value.data),
    _raw: RawToJSON(value._raw)
  }
}
