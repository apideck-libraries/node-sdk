/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 9.1.5
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
 * @interface CollectionTag
 */
export interface CollectionTag {
  /**
   * A unique identifier for an object.
   * @type {string}
   * @memberof CollectionTag
   */
  id: string
  /**
   *
   * @type {string}
   * @memberof CollectionTag
   */
  readonly name?: string
}

export function CollectionTagFromJSON(json: any): CollectionTag {
  return CollectionTagFromJSONTyped(json, false)
}

export function CollectionTagFromJSONTyped(json: any, ignoreDiscriminator: boolean): CollectionTag {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: json['id'],
    name: !exists(json, 'name') ? undefined : json['name']
  }
}

export function CollectionTagToJSON(value?: CollectionTag | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    id: value.id
  }
}