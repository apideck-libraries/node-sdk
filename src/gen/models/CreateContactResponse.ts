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

import { UnifiedId, UnifiedIdFromJSON, UnifiedIdToJSON } from './UnifiedId'

/**
 *
 * @export
 * @interface CreateContactResponse
 */
export interface CreateContactResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof CreateContactResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof CreateContactResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof CreateContactResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof CreateContactResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof CreateContactResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof CreateContactResponse
   */
  data: UnifiedId
}

export function CreateContactResponseFromJSON(json: any): CreateContactResponse {
  return CreateContactResponseFromJSONTyped(json, false)
}

export function CreateContactResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): CreateContactResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: UnifiedIdFromJSON(json['data'])
  }
}

export function CreateContactResponseToJSON(value?: CreateContactResponse | null): any {
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
    data: UnifiedIdToJSON(value.data)
  }
}
