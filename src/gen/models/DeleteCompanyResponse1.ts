/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 5.1.0
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
 * @interface DeleteCompanyResponse1
 */
export interface DeleteCompanyResponse1 {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof DeleteCompanyResponse1
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof DeleteCompanyResponse1
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof DeleteCompanyResponse1
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof DeleteCompanyResponse1
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof DeleteCompanyResponse1
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof DeleteCompanyResponse1
   */
  data: UnifiedId
}

export function DeleteCompanyResponse1FromJSON(json: any): DeleteCompanyResponse1 {
  return DeleteCompanyResponse1FromJSONTyped(json, false)
}

export function DeleteCompanyResponse1FromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): DeleteCompanyResponse1 {
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

export function DeleteCompanyResponse1ToJSON(value?: DeleteCompanyResponse1 | null): any {
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
