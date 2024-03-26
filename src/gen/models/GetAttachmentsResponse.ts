/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.3.6
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { Attachment, AttachmentFromJSON, AttachmentToJSON } from './Attachment'
import { Links, LinksFromJSON, LinksToJSON } from './Links'
import { Meta, MetaFromJSON, MetaToJSON } from './Meta'

/**
 *
 * @export
 * @interface GetAttachmentsResponse
 */
export interface GetAttachmentsResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetAttachmentsResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetAttachmentsResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetAttachmentsResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetAttachmentsResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof GetAttachmentsResponse
   */
  operation: string
  /**
   *
   * @type {Array<Attachment>}
   * @memberof GetAttachmentsResponse
   */
  data: Array<Attachment>
  /**
   *
   * @type {Meta}
   * @memberof GetAttachmentsResponse
   */
  meta?: Meta
  /**
   *
   * @type {Links}
   * @memberof GetAttachmentsResponse
   */
  links?: Links
}

export function GetAttachmentsResponseFromJSON(json: any): GetAttachmentsResponse {
  return GetAttachmentsResponseFromJSONTyped(json, false)
}

export function GetAttachmentsResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetAttachmentsResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: (json['data'] as Array<any>).map(AttachmentFromJSON),
    meta: !exists(json, 'meta') ? undefined : MetaFromJSON(json['meta']),
    links: !exists(json, 'links') ? undefined : LinksFromJSON(json['links'])
  }
}

export function GetAttachmentsResponseToJSON(value?: GetAttachmentsResponse | null): any {
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
    data: (value.data as Array<any>).map(AttachmentToJSON),
    meta: MetaToJSON(value.meta),
    links: LinksToJSON(value.links)
  }
}
