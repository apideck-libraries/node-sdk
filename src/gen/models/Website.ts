/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 5.2.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

// Override template imports only to fix circulr dependencies generated by default template
// https://github.com/OpenAPITools/openapi-generator/issues/6140

import { exists } from '../runtime'
/**
 *
 * @export
 * @interface Website
 */
export interface Website {
  /**
   *
   * @type {string}
   * @memberof Website
   */
  url: string
  /**
   *
   * @type {string}
   * @memberof Website
   */
  id?: string | null
  /**
   *
   * @type {string}
   * @memberof Website
   */
  type?: WebsiteType
}

/**
 * @export
 * @enum {string}
 */
export enum WebsiteType {
  primary = 'primary',
  secondary = 'secondary',
  work = 'work',
  personal = 'personal',
  other = 'other'
}

export function WebsiteFromJSON(json: any): Website {
  return WebsiteFromJSONTyped(json, false)
}

export function WebsiteFromJSONTyped(json: any, ignoreDiscriminator: boolean): Website {
  if (json === undefined || json === null) {
    return json
  }
  return {
    url: json['url'],
    id: !exists(json, 'id') ? undefined : json['id'],
    type: !exists(json, 'type') ? undefined : json['type']
  }
}

export function WebsiteToJSON(value?: Website | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    url: value.url,
    id: value.id,
    type: value.type
  }
}
