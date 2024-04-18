/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.4.0
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
 * @interface UpdateHrisCompanyResponse
 */
export interface UpdateHrisCompanyResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof UpdateHrisCompanyResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof UpdateHrisCompanyResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof UpdateHrisCompanyResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof UpdateHrisCompanyResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof UpdateHrisCompanyResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof UpdateHrisCompanyResponse
   */
  data: UnifiedId
}

export function UpdateHrisCompanyResponseFromJSON(json: any): UpdateHrisCompanyResponse {
  return UpdateHrisCompanyResponseFromJSONTyped(json, false)
}

export function UpdateHrisCompanyResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): UpdateHrisCompanyResponse {
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

export function UpdateHrisCompanyResponseToJSON(value?: UpdateHrisCompanyResponse | null): any {
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
