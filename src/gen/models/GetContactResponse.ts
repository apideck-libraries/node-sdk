/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.7.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Contact, ContactFromJSON, ContactToJSON } from './Contact'

/**
 *
 * @export
 * @interface GetContactResponse
 */
export interface GetContactResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetContactResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetContactResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetContactResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetContactResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof GetContactResponse
   */
  operation: string
  /**
   *
   * @type {Contact}
   * @memberof GetContactResponse
   */
  data: Contact
}

export function GetContactResponseFromJSON(json: any): GetContactResponse {
  return GetContactResponseFromJSONTyped(json, false)
}

export function GetContactResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetContactResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: ContactFromJSON(json['data'])
  }
}

export function GetContactResponseToJSON(value?: GetContactResponse | null): any {
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
    data: ContactToJSON(value.data)
  }
}
