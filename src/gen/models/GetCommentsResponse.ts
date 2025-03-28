/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.13.0
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
import { Links, LinksFromJSON, LinksToJSON } from './Links'
import { Meta, MetaFromJSON, MetaToJSON } from './Meta'
import { Raw, RawFromJSON, RawToJSON } from './Raw'

/**
 *
 * @export
 * @interface GetCommentsResponse
 */
export interface GetCommentsResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetCommentsResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetCommentsResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetCommentsResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetCommentsResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof GetCommentsResponse
   */
  operation: string
  /**
   *
   * @type {Array<CollectionTicketComment>}
   * @memberof GetCommentsResponse
   */
  data: Array<CollectionTicketComment>
  /**
   *
   * @type {Meta}
   * @memberof GetCommentsResponse
   */
  meta?: Meta
  /**
   *
   * @type {Links}
   * @memberof GetCommentsResponse
   */
  links?: Links
  /**
   *
   * @type {Raw}
   * @memberof GetCommentsResponse
   */
  _raw?: Raw | null
}

export function GetCommentsResponseFromJSON(json: any): GetCommentsResponse {
  return GetCommentsResponseFromJSONTyped(json, false)
}

export function GetCommentsResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetCommentsResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: (json['data'] as Array<any>).map(CollectionTicketCommentFromJSON),
    meta: !exists(json, 'meta') ? undefined : MetaFromJSON(json['meta']),
    links: !exists(json, 'links') ? undefined : LinksFromJSON(json['links']),
    _raw: !exists(json, '_raw') ? undefined : RawFromJSON(json['_raw'])
  }
}

export function GetCommentsResponseToJSON(value?: GetCommentsResponse | null): any {
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
    data: (value.data as Array<any>).map(CollectionTicketCommentToJSON),
    meta: MetaToJSON(value.meta),
    links: LinksToJSON(value.links),
    _raw: RawToJSON(value._raw)
  }
}
