/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.0.0
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
 * @interface FileOwner
 */
export interface FileOwner {
  /**
   * ID of the owner of the file
   * @type {string}
   * @memberof FileOwner
   */
  readonly id?: string
  /**
   * Email of the owner of the file
   * @type {string}
   * @memberof FileOwner
   */
  readonly email?: string
  /**
   * Name of the owner of the file
   * @type {string}
   * @memberof FileOwner
   */
  readonly name?: string
}

export function FileOwnerFromJSON(json: any): FileOwner {
  return FileOwnerFromJSONTyped(json, false)
}

export function FileOwnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): FileOwner {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    email: !exists(json, 'email') ? undefined : json['email'],
    name: !exists(json, 'name') ? undefined : json['name']
  }
}

export function FileOwnerToJSON(value?: FileOwner | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {}
}
