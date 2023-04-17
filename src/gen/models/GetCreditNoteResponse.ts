/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 9.2.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { CreditNote, CreditNoteFromJSON, CreditNoteToJSON } from './CreditNote'

/**
 *
 * @export
 * @interface GetCreditNoteResponse
 */
export interface GetCreditNoteResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetCreditNoteResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetCreditNoteResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetCreditNoteResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetCreditNoteResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof GetCreditNoteResponse
   */
  operation: string
  /**
   *
   * @type {CreditNote}
   * @memberof GetCreditNoteResponse
   */
  data: CreditNote
}

export function GetCreditNoteResponseFromJSON(json: any): GetCreditNoteResponse {
  return GetCreditNoteResponseFromJSONTyped(json, false)
}

export function GetCreditNoteResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetCreditNoteResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: CreditNoteFromJSON(json['data'])
  }
}

export function GetCreditNoteResponseToJSON(value?: GetCreditNoteResponse | null): any {
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
    data: CreditNoteToJSON(value.data)
  }
}
