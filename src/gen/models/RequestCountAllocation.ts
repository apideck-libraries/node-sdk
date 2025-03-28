/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.13.0
 * Contact: support@apideck.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
/**
 *
 * @export
 * @interface RequestCountAllocation
 */
export interface RequestCountAllocation {
  /**
   *
   * @type {number}
   * @memberof RequestCountAllocation
   */
  unify?: number
  /**
   *
   * @type {number}
   * @memberof RequestCountAllocation
   */
  proxy?: number
  /**
   *
   * @type {number}
   * @memberof RequestCountAllocation
   */
  vault?: number
}

export function RequestCountAllocationFromJSON(json: any): RequestCountAllocation {
  return RequestCountAllocationFromJSONTyped(json, false)
}

export function RequestCountAllocationFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): RequestCountAllocation {
  if (json === undefined || json === null) {
    return json
  }
  return {
    unify: !exists(json, 'unify') ? undefined : json['unify'],
    proxy: !exists(json, 'proxy') ? undefined : json['proxy'],
    vault: !exists(json, 'vault') ? undefined : json['vault']
  }
}

export function RequestCountAllocationToJSON(value?: RequestCountAllocation | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    unify: value.unify,
    proxy: value.proxy,
    vault: value.vault
  }
}
