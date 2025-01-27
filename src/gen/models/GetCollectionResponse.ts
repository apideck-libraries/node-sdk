/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.11.0
 * Contact: support@apideck.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Collection, CollectionFromJSON, CollectionToJSON } from './Collection'

/**
 *
 * @export
 * @interface GetCollectionResponse
 */
export interface GetCollectionResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetCollectionResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetCollectionResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetCollectionResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetCollectionResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof GetCollectionResponse
   */
  operation: string
  /**
   *
   * @type {Collection}
   * @memberof GetCollectionResponse
   */
  data: Collection
}

export function GetCollectionResponseFromJSON(json: any): GetCollectionResponse {
  return GetCollectionResponseFromJSONTyped(json, false)
}

export function GetCollectionResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetCollectionResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: CollectionFromJSON(json['data'])
  }
}

export function GetCollectionResponseToJSON(value?: GetCollectionResponse | null): any {
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
    data: CollectionToJSON(value.data)
  }
}
