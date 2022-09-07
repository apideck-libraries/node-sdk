/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.51.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
/**
 *
 * @export
 * @interface ConnectorTlsSupport
 */
export interface ConnectorTlsSupport {
  /**
   *
   * @type {string}
   * @memberof ConnectorTlsSupport
   */
  type?: string
  /**
   * Description of the TLS support
   * @type {string}
   * @memberof ConnectorTlsSupport
   */
  description?: string
}

export function ConnectorTlsSupportFromJSON(json: any): ConnectorTlsSupport {
  return ConnectorTlsSupportFromJSONTyped(json, false)
}

export function ConnectorTlsSupportFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ConnectorTlsSupport {
  if (json === undefined || json === null) {
    return json
  }
  return {
    type: !exists(json, 'type') ? undefined : json['type'],
    description: !exists(json, 'description') ? undefined : json['description']
  }
}

export function ConnectorTlsSupportToJSON(value?: ConnectorTlsSupport | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    type: value.type,
    description: value.description
  }
}
