/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.13.0
 * Contact: support@apideck.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { Company, CompanyFromJSON, CompanyToJSON } from './Company'
import { Raw, RawFromJSON, RawToJSON } from './Raw'

/**
 *
 * @export
 * @interface GetCompanyResponse
 */
export interface GetCompanyResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetCompanyResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetCompanyResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetCompanyResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetCompanyResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof GetCompanyResponse
   */
  operation: string
  /**
   *
   * @type {Company}
   * @memberof GetCompanyResponse
   */
  data: Company
  /**
   *
   * @type {Raw}
   * @memberof GetCompanyResponse
   */
  _raw?: Raw | null
}

export function GetCompanyResponseFromJSON(json: any): GetCompanyResponse {
  return GetCompanyResponseFromJSONTyped(json, false)
}

export function GetCompanyResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetCompanyResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: CompanyFromJSON(json['data']),
    _raw: !exists(json, '_raw') ? undefined : RawFromJSON(json['_raw'])
  }
}

export function GetCompanyResponseToJSON(value?: GetCompanyResponse | null): any {
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
    data: CompanyToJSON(value.data),
    _raw: RawToJSON(value._raw)
  }
}
