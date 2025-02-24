/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.11.5
 * Contact: support@apideck.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { Raw, RawFromJSON, RawToJSON } from './Raw'
import { UnifiedId, UnifiedIdFromJSON, UnifiedIdToJSON } from './UnifiedId'

/**
 *
 * @export
 * @interface DeleteEcommerceCustomerResponse
 */
export interface DeleteEcommerceCustomerResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof DeleteEcommerceCustomerResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof DeleteEcommerceCustomerResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof DeleteEcommerceCustomerResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof DeleteEcommerceCustomerResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof DeleteEcommerceCustomerResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof DeleteEcommerceCustomerResponse
   */
  data: UnifiedId
  /**
   *
   * @type {Raw}
   * @memberof DeleteEcommerceCustomerResponse
   */
  _raw?: Raw | null
}

export function DeleteEcommerceCustomerResponseFromJSON(
  json: any
): DeleteEcommerceCustomerResponse {
  return DeleteEcommerceCustomerResponseFromJSONTyped(json, false)
}

export function DeleteEcommerceCustomerResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): DeleteEcommerceCustomerResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: UnifiedIdFromJSON(json['data']),
    _raw: !exists(json, '_raw') ? undefined : RawFromJSON(json['_raw'])
  }
}

export function DeleteEcommerceCustomerResponseToJSON(
  value?: DeleteEcommerceCustomerResponse | null
): any {
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
    data: UnifiedIdToJSON(value.data),
    _raw: RawToJSON(value._raw)
  }
}
