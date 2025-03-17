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
 * @interface CreateModifierResponse
 */
export interface CreateModifierResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof CreateModifierResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof CreateModifierResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof CreateModifierResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof CreateModifierResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof CreateModifierResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof CreateModifierResponse
   */
  data: UnifiedId
  /**
   *
   * @type {Raw}
   * @memberof CreateModifierResponse
   */
  _raw?: Raw | null
}

export function CreateModifierResponseFromJSON(json: any): CreateModifierResponse {
  return CreateModifierResponseFromJSONTyped(json, false)
}

export function CreateModifierResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): CreateModifierResponse {
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

export function CreateModifierResponseToJSON(value?: CreateModifierResponse | null): any {
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
