/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.11.5
 * Contact: support@apideck.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { AgedCreditors, AgedCreditorsFromJSON, AgedCreditorsToJSON } from './AgedCreditors'
import { Raw, RawFromJSON, RawToJSON } from './Raw'

/**
 *
 * @export
 * @interface GetAgedCreditorsResponse
 */
export interface GetAgedCreditorsResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetAgedCreditorsResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetAgedCreditorsResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetAgedCreditorsResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetAgedCreditorsResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof GetAgedCreditorsResponse
   */
  operation: string
  /**
   *
   * @type {AgedCreditors}
   * @memberof GetAgedCreditorsResponse
   */
  data: AgedCreditors
  /**
   *
   * @type {Raw}
   * @memberof GetAgedCreditorsResponse
   */
  _raw?: Raw | null
}

export function GetAgedCreditorsResponseFromJSON(json: any): GetAgedCreditorsResponse {
  return GetAgedCreditorsResponseFromJSONTyped(json, false)
}

export function GetAgedCreditorsResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetAgedCreditorsResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: AgedCreditorsFromJSON(json['data']),
    _raw: !exists(json, '_raw') ? undefined : RawFromJSON(json['_raw'])
  }
}

export function GetAgedCreditorsResponseToJSON(value?: GetAgedCreditorsResponse | null): any {
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
    data: AgedCreditorsToJSON(value.data),
    _raw: RawToJSON(value._raw)
  }
}
