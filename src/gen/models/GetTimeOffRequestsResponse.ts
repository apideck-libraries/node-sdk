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
import { Links, LinksFromJSON, LinksToJSON } from './Links'
import { Meta, MetaFromJSON, MetaToJSON } from './Meta'
import { Raw, RawFromJSON, RawToJSON } from './Raw'
import { TimeOffRequest, TimeOffRequestFromJSON, TimeOffRequestToJSON } from './TimeOffRequest'

/**
 *
 * @export
 * @interface GetTimeOffRequestsResponse
 */
export interface GetTimeOffRequestsResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetTimeOffRequestsResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetTimeOffRequestsResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetTimeOffRequestsResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetTimeOffRequestsResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof GetTimeOffRequestsResponse
   */
  operation: string
  /**
   *
   * @type {Array<TimeOffRequest>}
   * @memberof GetTimeOffRequestsResponse
   */
  data: Array<TimeOffRequest>
  /**
   *
   * @type {Raw}
   * @memberof GetTimeOffRequestsResponse
   */
  _raw?: Raw | null
  /**
   *
   * @type {Meta}
   * @memberof GetTimeOffRequestsResponse
   */
  meta?: Meta
  /**
   *
   * @type {Links}
   * @memberof GetTimeOffRequestsResponse
   */
  links?: Links
}

export function GetTimeOffRequestsResponseFromJSON(json: any): GetTimeOffRequestsResponse {
  return GetTimeOffRequestsResponseFromJSONTyped(json, false)
}

export function GetTimeOffRequestsResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetTimeOffRequestsResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: (json['data'] as Array<any>).map(TimeOffRequestFromJSON),
    _raw: !exists(json, '_raw') ? undefined : RawFromJSON(json['_raw']),
    meta: !exists(json, 'meta') ? undefined : MetaFromJSON(json['meta']),
    links: !exists(json, 'links') ? undefined : LinksFromJSON(json['links'])
  }
}

export function GetTimeOffRequestsResponseToJSON(value?: GetTimeOffRequestsResponse | null): any {
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
    data: (value.data as Array<any>).map(TimeOffRequestToJSON),
    _raw: RawToJSON(value._raw),
    meta: MetaToJSON(value.meta),
    links: LinksToJSON(value.links)
  }
}
