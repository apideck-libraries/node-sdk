/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.52.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Applicant, ApplicantFromJSON, ApplicantToJSON } from './Applicant'

/**
 *
 * @export
 * @interface GetApplicantResponse
 */
export interface GetApplicantResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetApplicantResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetApplicantResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetApplicantResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetApplicantResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof GetApplicantResponse
   */
  operation: string
  /**
   *
   * @type {Applicant}
   * @memberof GetApplicantResponse
   */
  data: Applicant
}

export function GetApplicantResponseFromJSON(json: any): GetApplicantResponse {
  return GetApplicantResponseFromJSONTyped(json, false)
}

export function GetApplicantResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetApplicantResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: ApplicantFromJSON(json['data'])
  }
}

export function GetApplicantResponseToJSON(value?: GetApplicantResponse | null): any {
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
    data: ApplicantToJSON(value.data)
  }
}
