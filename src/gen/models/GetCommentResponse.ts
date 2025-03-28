/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.12.4
 * Contact: support@apideck.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import {
  CollectionTicketComment,
  CollectionTicketCommentFromJSON,
  CollectionTicketCommentToJSON
} from './CollectionTicketComment'
import { Raw, RawFromJSON, RawToJSON } from './Raw'

/**
 *
 * @export
 * @interface GetCommentResponse
 */
export interface GetCommentResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetCommentResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetCommentResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetCommentResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetCommentResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof GetCommentResponse
   */
  operation: string
  /**
   *
   * @type {CollectionTicketComment}
   * @memberof GetCommentResponse
   */
  data: CollectionTicketComment
  /**
   *
   * @type {Raw}
   * @memberof GetCommentResponse
   */
  _raw?: Raw | null
}

export function GetCommentResponseFromJSON(json: any): GetCommentResponse {
  return GetCommentResponseFromJSONTyped(json, false)
}

export function GetCommentResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetCommentResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: CollectionTicketCommentFromJSON(json['data']),
    _raw: !exists(json, '_raw') ? undefined : RawFromJSON(json['_raw'])
  }
}

export function GetCommentResponseToJSON(value?: GetCommentResponse | null): any {
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
    data: CollectionTicketCommentToJSON(value.data),
    _raw: RawToJSON(value._raw)
  }
}
