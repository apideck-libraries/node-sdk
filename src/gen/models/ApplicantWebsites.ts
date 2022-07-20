/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.37.0
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
 * @interface ApplicantWebsites
 */
export interface ApplicantWebsites {
  /**
   *
   * @type {string}
   * @memberof ApplicantWebsites
   */
  url: string
  /**
   *
   * @type {string}
   * @memberof ApplicantWebsites
   */
  id?: string | null
  /**
   *
   * @type {string}
   * @memberof ApplicantWebsites
   */
  type?: ApplicantWebsitesType
}

/**
 * @export
 * @enum {string}
 */
export enum ApplicantWebsitesType {
  primary = 'primary',
  secondary = 'secondary',
  work = 'work',
  personal = 'personal',
  other = 'other'
}

export function ApplicantWebsitesFromJSON(json: any): ApplicantWebsites {
  return ApplicantWebsitesFromJSONTyped(json, false)
}

export function ApplicantWebsitesFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ApplicantWebsites {
  if (json === undefined || json === null) {
    return json
  }
  return {
    url: json['url'],
    id: !exists(json, 'id') ? undefined : json['id'],
    type: !exists(json, 'type') ? undefined : json['type']
  }
}

export function ApplicantWebsitesToJSON(value?: ApplicantWebsites | null): any {
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
