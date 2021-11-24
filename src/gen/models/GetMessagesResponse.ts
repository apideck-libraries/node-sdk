/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.8.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { Links, LinksFromJSON, LinksToJSON } from './Links'
import { Message, MessageFromJSON, MessageToJSON } from './Message'
import { Meta, MetaFromJSON, MetaToJSON } from './Meta'

/**
 *
 * @export
 * @interface GetMessagesResponse
 */
export interface GetMessagesResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetMessagesResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetMessagesResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetMessagesResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetMessagesResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof GetMessagesResponse
   */
  operation: string
  /**
   *
   * @type {Array<Message>}
   * @memberof GetMessagesResponse
   */
  data: Array<Message>
  /**
   *
   * @type {Meta}
   * @memberof GetMessagesResponse
   */
  meta?: Meta
  /**
   *
   * @type {Links}
   * @memberof GetMessagesResponse
   */
  links?: Links
}

export function GetMessagesResponseFromJSON(json: any): GetMessagesResponse {
  return GetMessagesResponseFromJSONTyped(json, false)
}

export function GetMessagesResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetMessagesResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: (json['data'] as Array<any>).map(MessageFromJSON),
    meta: !exists(json, 'meta') ? undefined : MetaFromJSON(json['meta']),
    links: !exists(json, 'links') ? undefined : LinksFromJSON(json['links'])
  }
}

export function GetMessagesResponseToJSON(value?: GetMessagesResponse | null): any {
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
    data: (value.data as Array<any>).map(MessageToJSON),
    meta: MetaToJSON(value.meta),
    links: LinksToJSON(value.links)
  }
}
