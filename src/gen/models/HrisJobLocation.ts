/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.3.0
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
 * @interface HrisJobLocation
 */
export interface HrisJobLocation {
  /**
   *
   * @type {string}
   * @memberof HrisJobLocation
   */
  name?: string | null
}

export function HrisJobLocationFromJSON(json: any): HrisJobLocation {
  return HrisJobLocationFromJSONTyped(json, false)
}

export function HrisJobLocationFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): HrisJobLocation {
  if (json === undefined || json === null) {
    return json
  }
  return {
    name: !exists(json, 'name') ? undefined : json['name']
  }
}

export function HrisJobLocationToJSON(value?: HrisJobLocation | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    name: value.name
  }
}
