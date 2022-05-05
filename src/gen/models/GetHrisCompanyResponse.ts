/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.28.2
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HrisCompany, HrisCompanyFromJSON, HrisCompanyToJSON } from './HrisCompany'

/**
 *
 * @export
 * @interface GetHrisCompanyResponse
 */
export interface GetHrisCompanyResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetHrisCompanyResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetHrisCompanyResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetHrisCompanyResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetHrisCompanyResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof GetHrisCompanyResponse
   */
  operation: string
  /**
   *
   * @type {HrisCompany}
   * @memberof GetHrisCompanyResponse
   */
  data: HrisCompany
}

export function GetHrisCompanyResponseFromJSON(json: any): GetHrisCompanyResponse {
  return GetHrisCompanyResponseFromJSONTyped(json, false)
}

export function GetHrisCompanyResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetHrisCompanyResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: HrisCompanyFromJSON(json['data'])
  }
}

export function GetHrisCompanyResponseToJSON(value?: GetHrisCompanyResponse | null): any {
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
    data: HrisCompanyToJSON(value.data)
  }
}
