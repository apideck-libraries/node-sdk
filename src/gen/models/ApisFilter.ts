/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.11.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { ApiStatus, ApiStatusFromJSON, ApiStatusToJSON } from './ApiStatus'

/**
 *
 * @export
 * @interface ApisFilter
 */
export interface ApisFilter {
  /**
   *
   * @type {ApiStatus}
   * @memberof ApisFilter
   */
  status?: ApiStatus
}

export function ApisFilterFromJSON(json: any): ApisFilter {
  return ApisFilterFromJSONTyped(json, false)
}

export function ApisFilterFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApisFilter {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status: !exists(json, 'status') ? undefined : ApiStatusFromJSON(json['status'])
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
    status: ApiStatusToJSON(value.status)
  }
}
