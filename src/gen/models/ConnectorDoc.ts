/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.80.0
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
 * @interface ConnectorDoc
 */
export interface ConnectorDoc {
  /**
   *
   * @type {string}
   * @memberof ConnectorDoc
   */
  readonly id?: string
  /**
   * Name of the doc.
   * @type {string}
   * @memberof ConnectorDoc
   */
  name?: string
  /**
   * Audience for the doc.
   * @type {string}
   * @memberof ConnectorDoc
   */
  audience?: ConnectorDocAudience
  /**
   * Format of the doc.
   * @type {string}
   * @memberof ConnectorDoc
   */
  format?: ConnectorDocFormat
  /**
   * Link to fetch the content of the doc.
   * @type {string}
   * @memberof ConnectorDoc
   */
  url?: string
}

/**
 * @export
 * @enum {string}
 */
export enum ConnectorDocAudience {
  application_owner = 'application_owner',
  consumer = 'consumer'
}
/**
 * @export
 * @enum {string}
 */
export enum ConnectorDocFormat {
  markdown = 'markdown'
}

export function ConnectorDocFromJSON(json: any): ConnectorDoc {
  return ConnectorDocFromJSONTyped(json, false)
}

export function ConnectorDocFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConnectorDoc {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    name: !exists(json, 'name') ? undefined : json['name'],
    audience: !exists(json, 'audience') ? undefined : json['audience'],
    format: !exists(json, 'format') ? undefined : json['format'],
    url: !exists(json, 'url') ? undefined : json['url']
  }
}

export function ConnectorDocToJSON(value?: ConnectorDoc | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    name: value.name,
    audience: value.audience,
    format: value.format,
    url: value.url
  }
}
