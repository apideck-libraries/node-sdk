/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.36.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Tender, TenderFromJSON, TenderToJSON } from './Tender'

/**
 *
 * @export
 * @interface GetTenderResponse
 */
export interface GetTenderResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetTenderResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetTenderResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetTenderResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetTenderResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof GetTenderResponse
   */
  operation: string
  /**
   *
   * @type {Tender}
   * @memberof GetTenderResponse
   */
  data: Tender
}

export function GetTenderResponseFromJSON(json: any): GetTenderResponse {
  return GetTenderResponseFromJSONTyped(json, false)
}

export function GetTenderResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetTenderResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: TenderFromJSON(json['data'])
  }
}

export function GetTenderResponseToJSON(value?: GetTenderResponse | null): any {
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
    data: TenderToJSON(value.data)
  }
}
