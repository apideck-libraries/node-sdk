/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.7.6
 * Contact: support@apideck.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Item, ItemFromJSON, ItemToJSON } from './Item'

/**
 *
 * @export
 * @interface GetItemResponse
 */
export interface GetItemResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetItemResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetItemResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetItemResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetItemResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof GetItemResponse
   */
  operation: string
  /**
   *
   * @type {Item}
   * @memberof GetItemResponse
   */
  data: Item
}

export function GetItemResponseFromJSON(json: any): GetItemResponse {
  return GetItemResponseFromJSONTyped(json, false)
}

export function GetItemResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetItemResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: ItemFromJSON(json['data'])
  }
}

export function GetItemResponseToJSON(value?: GetItemResponse | null): any {
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
    data: ItemToJSON(value.data)
  }
}
