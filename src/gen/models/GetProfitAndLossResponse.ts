/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.12.2
 * Contact: support@apideck.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { ProfitAndLoss, ProfitAndLossFromJSON, ProfitAndLossToJSON } from './ProfitAndLoss'
import { Raw, RawFromJSON, RawToJSON } from './Raw'

/**
 *
 * @export
 * @interface GetProfitAndLossResponse
 */
export interface GetProfitAndLossResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetProfitAndLossResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetProfitAndLossResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetProfitAndLossResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetProfitAndLossResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof GetProfitAndLossResponse
   */
  operation: string
  /**
   *
   * @type {ProfitAndLoss}
   * @memberof GetProfitAndLossResponse
   */
  data: ProfitAndLoss
  /**
   *
   * @type {Raw}
   * @memberof GetProfitAndLossResponse
   */
  _raw?: Raw | null
}

export function GetProfitAndLossResponseFromJSON(json: any): GetProfitAndLossResponse {
  return GetProfitAndLossResponseFromJSONTyped(json, false)
}

export function GetProfitAndLossResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetProfitAndLossResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: ProfitAndLossFromJSON(json['data']),
    _raw: !exists(json, '_raw') ? undefined : RawFromJSON(json['_raw'])
  }
}

export function GetProfitAndLossResponseToJSON(value?: GetProfitAndLossResponse | null): any {
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
    data: ProfitAndLossToJSON(value.data),
    _raw: RawToJSON(value._raw)
  }
}
