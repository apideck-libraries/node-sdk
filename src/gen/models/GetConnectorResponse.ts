/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 9.2.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { Connector, ConnectorFromJSON, ConnectorToJSON } from './Connector'
import { Links, LinksFromJSON, LinksToJSON } from './Links'
import { Meta, MetaFromJSON, MetaToJSON } from './Meta'

/**
 *
 * @export
 * @interface GetConnectorResponse
 */
export interface GetConnectorResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetConnectorResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetConnectorResponse
   */
  status: string
  /**
   *
   * @type {Connector}
   * @memberof GetConnectorResponse
   */
  data: Connector
  /**
   *
   * @type {Meta}
   * @memberof GetConnectorResponse
   */
  meta?: Meta
  /**
   *
   * @type {Links}
   * @memberof GetConnectorResponse
   */
  links?: Links
}

export function GetConnectorResponseFromJSON(json: any): GetConnectorResponse {
  return GetConnectorResponseFromJSONTyped(json, false)
}

export function GetConnectorResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetConnectorResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    data: ConnectorFromJSON(json['data']),
    meta: !exists(json, 'meta') ? undefined : MetaFromJSON(json['meta']),
    links: !exists(json, 'links') ? undefined : LinksFromJSON(json['links'])
  }
}

export function GetConnectorResponseToJSON(value?: GetConnectorResponse | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    status_code: value.status_code,
    status: value.status,
    data: ConnectorToJSON(value.data),
    meta: MetaToJSON(value.meta),
    links: LinksToJSON(value.links)
  }
}
