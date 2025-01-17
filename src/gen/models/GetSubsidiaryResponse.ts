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

import { Subsidiary, SubsidiaryFromJSON, SubsidiaryToJSON } from './Subsidiary'

/**
 *
 * @export
 * @interface GetSubsidiaryResponse
 */
export interface GetSubsidiaryResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetSubsidiaryResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetSubsidiaryResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetSubsidiaryResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetSubsidiaryResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof GetSubsidiaryResponse
   */
  operation: string
  /**
   *
   * @type {Subsidiary}
   * @memberof GetSubsidiaryResponse
   */
  data: Subsidiary
}

export function GetSubsidiaryResponseFromJSON(json: any): GetSubsidiaryResponse {
  return GetSubsidiaryResponseFromJSONTyped(json, false)
}

export function GetSubsidiaryResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetSubsidiaryResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: SubsidiaryFromJSON(json['data'])
  }
}

export function GetSubsidiaryResponseToJSON(value?: GetSubsidiaryResponse | null): any {
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
    data: SubsidiaryToJSON(value.data)
  }
}
