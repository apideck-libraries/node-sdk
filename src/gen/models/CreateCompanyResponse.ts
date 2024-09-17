/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.7.3
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { UnifiedId, UnifiedIdFromJSON, UnifiedIdToJSON } from './UnifiedId'

/**
 *
 * @export
 * @interface CreateCompanyResponse
 */
export interface CreateCompanyResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof CreateCompanyResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof CreateCompanyResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof CreateCompanyResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof CreateCompanyResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof CreateCompanyResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof CreateCompanyResponse
   */
  data: UnifiedId
}

export function CreateCompanyResponseFromJSON(json: any): CreateCompanyResponse {
  return CreateCompanyResponseFromJSONTyped(json, false)
}

export function CreateCompanyResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): CreateCompanyResponse {
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

export function CreateCompanyResponseToJSON(value?: CreateCompanyResponse | null): any {
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
