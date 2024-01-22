/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.2.2
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
 * @interface Owner
 */
export interface Owner {
  /**
   * ID of the owner
   * @type {string}
   * @memberof Owner
   */
  readonly id?: string
  /**
   * Email of the owner
   * @type {string}
   * @memberof Owner
   */
  readonly email?: string | null
  /**
   * Name of the owner
   * @type {string}
   * @memberof Owner
   */
  readonly name?: string | null
}

export function OwnerFromJSON(json: any): Owner {
  return OwnerFromJSONTyped(json, false)
}

export function OwnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): Owner {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    email: !exists(json, 'email') ? undefined : json['email'],
    name: !exists(json, 'name') ? undefined : json['name']
  }
}

export function OwnerToJSON(value?: Owner | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {}
}
