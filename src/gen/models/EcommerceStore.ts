/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.0.0
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
 * @interface EcommerceStore
 */
export interface EcommerceStore {
  /**
   * A unique identifier for an object.
   * @type {string}
   * @memberof EcommerceStore
   */
  readonly id: string
  /**
   * The store's name
   * @type {string}
   * @memberof EcommerceStore
   */
  name?: string | null
  /**
   * The store's website URL
   * @type {string}
   * @memberof EcommerceStore
   */
  store_url?: string | null
  /**
   * The store's admin login URL
   * @type {string}
   * @memberof EcommerceStore
   */
  admin_url?: string | null
  /**
   * When custom mappings are configured on the resource, the result is included here.
   * @type {object}
   * @memberof EcommerceStore
   */
  custom_mappings?: object | null
  /**
   * The date and time when the object was created.
   * @type {Date}
   * @memberof EcommerceStore
   */
  readonly created_at?: Date | null
  /**
   * The date and time when the object was last updated.
   * @type {Date}
   * @memberof EcommerceStore
   */
  readonly updated_at?: Date | null
}

export function EcommerceStoreFromJSON(json: any): EcommerceStore {
  return EcommerceStoreFromJSONTyped(json, false)
}

export function EcommerceStoreFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): EcommerceStore {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: json['id'],
    name: !exists(json, 'name') ? undefined : json['name'],
    store_url: !exists(json, 'store_url') ? undefined : json['store_url'],
    admin_url: !exists(json, 'admin_url') ? undefined : json['admin_url'],
    custom_mappings: !exists(json, 'custom_mappings') ? undefined : json['custom_mappings'],
    created_at: !exists(json, 'created_at')
      ? undefined
      : json['created_at'] === null
      ? null
      : new Date(json['created_at']),
    updated_at: !exists(json, 'updated_at')
      ? undefined
      : json['updated_at'] === null
      ? null
      : new Date(json['updated_at'])
  }
}

export function EcommerceStoreToJSON(value?: EcommerceStore | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    name: value.name,
    store_url: value.store_url,
    admin_url: value.admin_url,
    custom_mappings: value.custom_mappings
  }
}
