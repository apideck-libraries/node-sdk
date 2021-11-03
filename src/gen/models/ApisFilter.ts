/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.3.2
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
 * @interface ApisFilter
 */
export interface ApisFilter {
  /**
   * Status to filter on
   * @type {string}
   * @memberof ApisFilter
   */
  status?: ApisFilterStatus
}

/**
 * @export
 * @enum {string}
 */
export enum ApisFilterStatus {
  live = 'live',
  beta = 'beta',
  development = 'development',
  considering = 'considering'
}

export function ApisFilterFromJSON(json: any): ApisFilter {
  return ApisFilterFromJSONTyped(json, false)
}

export function ApisFilterFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApisFilter {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status: !exists(json, 'status') ? undefined : json['status']
  }
}

export function ApisFilterToJSON(value?: ApisFilter | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    status: value.status
  }
}
