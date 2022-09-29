/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.66.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Modifier, ModifierFromJSON, ModifierToJSON } from './Modifier'

/**
 *
 * @export
 * @interface GetModifierResponse
 */
export interface GetModifierResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetModifierResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetModifierResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetModifierResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetModifierResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof GetModifierResponse
   */
  operation: string
  /**
   *
   * @type {Modifier}
   * @memberof GetModifierResponse
   */
  data: Modifier
}

export function GetModifierResponseFromJSON(json: any): GetModifierResponse {
  return GetModifierResponseFromJSONTyped(json, false)
}

export function GetModifierResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetModifierResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: ModifierFromJSON(json['data'])
  }
}

export function GetModifierResponseToJSON(value?: GetModifierResponse | null): any {
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
    data: ModifierToJSON(value.data)
  }
}
