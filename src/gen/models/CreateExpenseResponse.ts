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
import { Raw, RawFromJSON, RawToJSON } from './Raw'
import { UnifiedId, UnifiedIdFromJSON, UnifiedIdToJSON } from './UnifiedId'

/**
 *
 * @export
 * @interface CreateExpenseResponse
 */
export interface CreateExpenseResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof CreateExpenseResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof CreateExpenseResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof CreateExpenseResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof CreateExpenseResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof CreateExpenseResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof CreateExpenseResponse
   */
  data: UnifiedId
  /**
   *
   * @type {Raw}
   * @memberof CreateExpenseResponse
   */
  _raw?: Raw | null
}

export function CreateExpenseResponseFromJSON(json: any): CreateExpenseResponse {
  return CreateExpenseResponseFromJSONTyped(json, false)
}

export function CreateExpenseResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): CreateExpenseResponse {
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

export function CreateExpenseResponseToJSON(value?: CreateExpenseResponse | null): any {
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
