/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.12.3
 * Contact: support@apideck.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { EcommerceStore, EcommerceStoreFromJSON, EcommerceStoreToJSON } from './EcommerceStore'
import { Raw, RawFromJSON, RawToJSON } from './Raw'

/**
 *
 * @export
 * @interface GetStoreResponse
 */
export interface GetStoreResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetStoreResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetStoreResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetStoreResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetStoreResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof GetStoreResponse
   */
  operation: string
  /**
   *
   * @type {EcommerceStore}
   * @memberof GetStoreResponse
   */
  data: EcommerceStore
  /**
   *
   * @type {Raw}
   * @memberof GetStoreResponse
   */
  _raw?: Raw | null
}

export function GetStoreResponseFromJSON(json: any): GetStoreResponse {
  return GetStoreResponseFromJSONTyped(json, false)
}

export function GetStoreResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetStoreResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: EcommerceStoreFromJSON(json['data']),
    _raw: !exists(json, '_raw') ? undefined : RawFromJSON(json['_raw'])
  }
}

export function GetStoreResponseToJSON(value?: GetStoreResponse | null): any {
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
    data: EcommerceStoreToJSON(value.data),
    _raw: RawToJSON(value._raw)
  }
}
