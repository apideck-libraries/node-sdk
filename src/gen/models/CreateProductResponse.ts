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

import { UnifiedId, UnifiedIdFromJSON, UnifiedIdToJSON } from './UnifiedId'

/**
 *
 * @export
 * @interface CreateProductResponse
 */
export interface CreateProductResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof CreateProductResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof CreateProductResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof CreateProductResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof CreateProductResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof CreateProductResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof CreateProductResponse
   */
  data: UnifiedId
}

export function CreateProductResponseFromJSON(json: any): CreateProductResponse {
  return CreateProductResponseFromJSONTyped(json, false)
}

export function CreateProductResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): CreateProductResponse {
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

export function CreateProductResponseToJSON(value?: CreateProductResponse | null): any {
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
