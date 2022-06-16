/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.32.4
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Message, MessageFromJSON, MessageToJSON } from './Message'

/**
 *
 * @export
 * @interface GetMessageResponse
 */
export interface GetMessageResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetMessageResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetMessageResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetMessageResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetMessageResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof GetMessageResponse
   */
  operation: string
  /**
   *
   * @type {Message}
   * @memberof GetMessageResponse
   */
  data: Message
}

export function GetMessageResponseFromJSON(json: any): GetMessageResponse {
  return GetMessageResponseFromJSONTyped(json, false)
}

export function GetMessageResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetMessageResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: MessageFromJSON(json['data'])
  }
}

export function GetMessageResponseToJSON(value?: GetMessageResponse | null): any {
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
    data: MessageToJSON(value.data)
  }
}
