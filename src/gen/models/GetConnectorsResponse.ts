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
import { Connector, ConnectorFromJSON, ConnectorToJSON } from './Connector'
import { Links, LinksFromJSON, LinksToJSON } from './Links'
import { Meta, MetaFromJSON, MetaToJSON } from './Meta'
import { Raw, RawFromJSON, RawToJSON } from './Raw'

/**
 *
 * @export
 * @interface GetConnectorsResponse
 */
export interface GetConnectorsResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetConnectorsResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetConnectorsResponse
   */
  status: string
  /**
   *
   * @type {Array<Connector>}
   * @memberof GetConnectorsResponse
   */
  data: Array<Connector>
  /**
   *
   * @type {Raw}
   * @memberof GetConnectorsResponse
   */
  _raw?: Raw | null
  /**
   *
   * @type {Meta}
   * @memberof GetConnectorsResponse
   */
  meta?: Meta
  /**
   *
   * @type {Links}
   * @memberof GetConnectorsResponse
   */
  links?: Links
}

export function GetConnectorsResponseFromJSON(json: any): GetConnectorsResponse {
  return GetConnectorsResponseFromJSONTyped(json, false)
}

export function GetConnectorsResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetConnectorsResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    data: (json['data'] as Array<any>).map(ConnectorFromJSON),
    _raw: !exists(json, '_raw') ? undefined : RawFromJSON(json['_raw']),
    meta: !exists(json, 'meta') ? undefined : MetaFromJSON(json['meta']),
    links: !exists(json, 'links') ? undefined : LinksFromJSON(json['links'])
  }
}

export function GetConnectorsResponseToJSON(value?: GetConnectorsResponse | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    status_code: value.status_code,
    status: value.status,
    data: (value.data as Array<any>).map(ConnectorToJSON),
    _raw: RawToJSON(value._raw),
    meta: MetaToJSON(value.meta),
    links: LinksToJSON(value.links)
  }
}
