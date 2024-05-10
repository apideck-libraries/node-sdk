/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.4.2
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
 * @interface DeleteHrisCompanyResponse
 */
export interface DeleteHrisCompanyResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof DeleteHrisCompanyResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof DeleteHrisCompanyResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof DeleteHrisCompanyResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof DeleteHrisCompanyResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof DeleteHrisCompanyResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof DeleteHrisCompanyResponse
   */
  data: UnifiedId
}

export function DeleteHrisCompanyResponseFromJSON(json: any): DeleteHrisCompanyResponse {
  return DeleteHrisCompanyResponseFromJSONTyped(json, false)
}

export function DeleteHrisCompanyResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): DeleteHrisCompanyResponse {
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

export function DeleteHrisCompanyResponseToJSON(value?: DeleteHrisCompanyResponse | null): any {
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
