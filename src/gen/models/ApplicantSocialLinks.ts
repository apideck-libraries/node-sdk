/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 9.7.0
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
 * @interface ApplicantSocialLinks
 */
export interface ApplicantSocialLinks {
  /**
   *
   * @type {string}
   * @memberof ApplicantSocialLinks
   */
  url: string
  /**
   *
   * @type {string}
   * @memberof ApplicantSocialLinks
   */
  id?: string | null
  /**
   *
   * @type {string}
   * @memberof ApplicantSocialLinks
   */
  type?: string | null
}

export function ApplicantSocialLinksFromJSON(json: any): ApplicantSocialLinks {
  return ApplicantSocialLinksFromJSONTyped(json, false)
}

export function ApplicantSocialLinksFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ApplicantSocialLinks {
  if (json === undefined || json === null) {
    return json
  }
  return {
    url: json['url'],
    id: !exists(json, 'id') ? undefined : json['id'],
    type: !exists(json, 'type') ? undefined : json['type']
  }
}

export function ApplicantSocialLinksToJSON(value?: ApplicantSocialLinks | null): any {
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
