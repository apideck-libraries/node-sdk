/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 5.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

// Override template imports only to fix circulr dependencies generated by default template
// https://github.com/OpenAPITools/openapi-generator/issues/6140

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
  statusCode: number
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
    statusCode: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: UnifiedIdFromJSON(json['data'])
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
    status_code: value.statusCode,
    status: value.status,
    service: value.service,
    resource: value.resource,
    operation: value.operation,
    data: UnifiedIdToJSON(value.data)
  }
}
