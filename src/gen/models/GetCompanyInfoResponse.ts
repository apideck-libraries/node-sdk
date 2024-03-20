/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.3.6
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { CompanyInfo, CompanyInfoFromJSON, CompanyInfoToJSON } from './CompanyInfo'

/**
 *
 * @export
 * @interface GetCompanyInfoResponse
 */
export interface GetCompanyInfoResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetCompanyInfoResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetCompanyInfoResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetCompanyInfoResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetCompanyInfoResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof GetCompanyInfoResponse
   */
  operation: string
  /**
   *
   * @type {CompanyInfo}
   * @memberof GetCompanyInfoResponse
   */
  data: CompanyInfo
}

export function GetCompanyInfoResponseFromJSON(json: any): GetCompanyInfoResponse {
  return GetCompanyInfoResponseFromJSONTyped(json, false)
}

export function GetCompanyInfoResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetCompanyInfoResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: CompanyInfoFromJSON(json['data'])
  }
}

export function GetCompanyInfoResponseToJSON(value?: GetCompanyInfoResponse | null): any {
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
    data: CompanyInfoToJSON(value.data)
  }
}
