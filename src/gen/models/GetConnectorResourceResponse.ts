/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.12.2
 * Contact: support@apideck.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import {
  ConnectorResource,
  ConnectorResourceFromJSON,
  ConnectorResourceToJSON
} from './ConnectorResource'
import { Links, LinksFromJSON, LinksToJSON } from './Links'
import { Meta, MetaFromJSON, MetaToJSON } from './Meta'
import { Raw, RawFromJSON, RawToJSON } from './Raw'

/**
 *
 * @export
 * @interface GetConnectorResourceResponse
 */
export interface GetConnectorResourceResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetConnectorResourceResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetConnectorResourceResponse
   */
  status: string
  /**
   *
   * @type {ConnectorResource}
   * @memberof GetConnectorResourceResponse
   */
  data: ConnectorResource
  /**
   *
   * @type {Raw}
   * @memberof GetConnectorResourceResponse
   */
  _raw?: Raw | null
  /**
   *
   * @type {Meta}
   * @memberof GetConnectorResourceResponse
   */
  meta?: Meta
  /**
   *
   * @type {Links}
   * @memberof GetConnectorResourceResponse
   */
  links?: Links
}

export function GetConnectorResourceResponseFromJSON(json: any): GetConnectorResourceResponse {
  return GetConnectorResourceResponseFromJSONTyped(json, false)
}

export function GetConnectorResourceResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetConnectorResourceResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    data: ConnectorResourceFromJSON(json['data']),
    _raw: !exists(json, '_raw') ? undefined : RawFromJSON(json['_raw']),
    meta: !exists(json, 'meta') ? undefined : MetaFromJSON(json['meta']),
    links: !exists(json, 'links') ? undefined : LinksFromJSON(json['links'])
  }
}

export function GetConnectorResourceResponseToJSON(
  value?: GetConnectorResourceResponse | null
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
    data: ConnectorResourceToJSON(value.data),
    _raw: RawToJSON(value._raw),
    meta: MetaToJSON(value.meta),
    links: LinksToJSON(value.links)
  }
}
