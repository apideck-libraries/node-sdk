/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.41.1
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
 * @interface SocialLink
 */
export interface SocialLink {
  /**
   *
   * @type {string}
   * @memberof SocialLink
   */
  url: string
  /**
   *
   * @type {string}
   * @memberof SocialLink
   */
  id?: string | null
  /**
   *
   * @type {string}
   * @memberof SocialLink
   */
  type?: string | null
}

export function SocialLinkFromJSON(json: any): SocialLink {
  return SocialLinkFromJSONTyped(json, false)
}

export function SocialLinkFromJSONTyped(json: any, ignoreDiscriminator: boolean): SocialLink {
  if (json === undefined || json === null) {
    return json
  }
  return {
    url: json['url'],
    id: !exists(json, 'id') ? undefined : json['id'],
    type: !exists(json, 'type') ? undefined : json['type']
  }
}

export function SocialLinkToJSON(value?: SocialLink | null): any {
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
