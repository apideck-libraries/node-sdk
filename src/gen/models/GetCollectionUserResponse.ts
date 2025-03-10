/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.12.1
 * Contact: support@apideck.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { CollectionUser, CollectionUserFromJSON, CollectionUserToJSON } from './CollectionUser'
import { Raw, RawFromJSON, RawToJSON } from './Raw'

/**
 *
 * @export
 * @interface GetCollectionUserResponse
 */
export interface GetCollectionUserResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetCollectionUserResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetCollectionUserResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetCollectionUserResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetCollectionUserResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof GetCollectionUserResponse
   */
  operation: string
  /**
   *
   * @type {CollectionUser}
   * @memberof GetCollectionUserResponse
   */
  data: CollectionUser
  /**
   *
   * @type {Raw}
   * @memberof GetCollectionUserResponse
   */
  _raw?: Raw | null
}

export function GetCollectionUserResponseFromJSON(json: any): GetCollectionUserResponse {
  return GetCollectionUserResponseFromJSONTyped(json, false)
}

export function GetCollectionUserResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetCollectionUserResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: CollectionUserFromJSON(json['data']),
    _raw: !exists(json, '_raw') ? undefined : RawFromJSON(json['_raw'])
  }
}

export function GetCollectionUserResponseToJSON(value?: GetCollectionUserResponse | null): any {
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
    data: CollectionUserToJSON(value.data),
    _raw: RawToJSON(value._raw)
  }
}
