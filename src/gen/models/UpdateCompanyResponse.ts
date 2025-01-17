/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.10.0
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
 * @interface UpdateCompanyResponse
 */
export interface UpdateCompanyResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof UpdateCompanyResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof UpdateCompanyResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof UpdateCompanyResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof UpdateCompanyResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof UpdateCompanyResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof UpdateCompanyResponse
   */
  data: UnifiedId
}

export function UpdateCompanyResponseFromJSON(json: any): UpdateCompanyResponse {
  return UpdateCompanyResponseFromJSONTyped(json, false)
}

export function UpdateCompanyResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): UpdateCompanyResponse {
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

export function UpdateCompanyResponseToJSON(value?: UpdateCompanyResponse | null): any {
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
