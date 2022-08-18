/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.41.0
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
 * @interface CreateHrisCompanyResponse
 */
export interface CreateHrisCompanyResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof CreateHrisCompanyResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof CreateHrisCompanyResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof CreateHrisCompanyResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof CreateHrisCompanyResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof CreateHrisCompanyResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof CreateHrisCompanyResponse
   */
  data: UnifiedId
}

export function CreateHrisCompanyResponseFromJSON(json: any): CreateHrisCompanyResponse {
  return CreateHrisCompanyResponseFromJSONTyped(json, false)
}

export function CreateHrisCompanyResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): CreateHrisCompanyResponse {
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

export function CreateHrisCompanyResponseToJSON(value?: CreateHrisCompanyResponse | null): any {
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
