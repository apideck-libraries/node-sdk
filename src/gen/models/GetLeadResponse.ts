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
import { Lead, LeadFromJSON, LeadToJSON } from './Lead'
import { Raw, RawFromJSON, RawToJSON } from './Raw'

/**
 *
 * @export
 * @interface GetLeadResponse
 */
export interface GetLeadResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetLeadResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetLeadResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetLeadResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetLeadResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof GetLeadResponse
   */
  operation: string
  /**
   *
   * @type {Lead}
   * @memberof GetLeadResponse
   */
  data: Lead
  /**
   *
   * @type {Raw}
   * @memberof GetLeadResponse
   */
  _raw?: Raw | null
}

export function GetLeadResponseFromJSON(json: any): GetLeadResponse {
  return GetLeadResponseFromJSONTyped(json, false)
}

export function GetLeadResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetLeadResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: LeadFromJSON(json['data']),
    _raw: !exists(json, '_raw') ? undefined : RawFromJSON(json['_raw'])
  }
}

export function GetLeadResponseToJSON(value?: GetLeadResponse | null): any {
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
    data: LeadToJSON(value.data),
    _raw: RawToJSON(value._raw)
  }
}
