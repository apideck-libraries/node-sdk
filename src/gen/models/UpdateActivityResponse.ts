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
import { Raw, RawFromJSON, RawToJSON } from './Raw'
import { UnifiedId, UnifiedIdFromJSON, UnifiedIdToJSON } from './UnifiedId'

/**
 *
 * @export
 * @interface UpdateActivityResponse
 */
export interface UpdateActivityResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof UpdateActivityResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof UpdateActivityResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof UpdateActivityResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof UpdateActivityResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof UpdateActivityResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof UpdateActivityResponse
   */
  data: UnifiedId
  /**
   *
   * @type {Raw}
   * @memberof UpdateActivityResponse
   */
  _raw?: Raw | null
}

export function UpdateActivityResponseFromJSON(json: any): UpdateActivityResponse {
  return UpdateActivityResponseFromJSONTyped(json, false)
}

export function UpdateActivityResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): UpdateActivityResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: UnifiedIdFromJSON(json['data']),
    _raw: !exists(json, '_raw') ? undefined : RawFromJSON(json['_raw'])
  }
}

export function UpdateActivityResponseToJSON(value?: UpdateActivityResponse | null): any {
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
    data: UnifiedIdToJSON(value.data),
    _raw: RawToJSON(value._raw)
  }
}
