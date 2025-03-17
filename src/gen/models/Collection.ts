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
 * @interface Collection
 */
export interface Collection {
  /**
   * A unique identifier for an object.
   * @type {string}
   * @memberof Collection
   */
  readonly id: string
  /**
   * The collections's parent ID
   * @type {string}
   * @memberof Collection
   */
  parent_id?: string | null
  /**
   * The collections's type
   * @type {string}
   * @memberof Collection
   */
  type?: string | null
  /**
   * Name of the collection
   * @type {string}
   * @memberof Collection
   */
  name?: string | null
  /**
   * Description of the collection
   * @type {string}
   * @memberof Collection
   */
  description?: string | null
  /**
   * When custom mappings are configured on the resource, the result is included here.
   * @type {object}
   * @memberof Collection
   */
  readonly custom_mappings?: object | null
  /**
   * The date and time when the object was last updated.
   * @type {Date}
   * @memberof Collection
   */
  readonly updated_at?: Date | null
  /**
   * The date and time when the object was created.
   * @type {Date}
   * @memberof Collection
   */
  readonly created_at?: Date | null
}

export function CollectionFromJSON(json: any): Collection {
  return CollectionFromJSONTyped(json, false)
}

export function CollectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): Collection {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: json['id'],
    parent_id: !exists(json, 'parent_id') ? undefined : json['parent_id'],
    type: !exists(json, 'type') ? undefined : json['type'],
    name: !exists(json, 'name') ? undefined : json['name'],
    description: !exists(json, 'description') ? undefined : json['description'],
    custom_mappings: !exists(json, 'custom_mappings') ? undefined : json['custom_mappings'],
    updated_at: !exists(json, 'updated_at')
      ? undefined
      : json['updated_at'] === null
      ? null
      : new Date(json['updated_at']),
    created_at: !exists(json, 'created_at')
      ? undefined
      : json['created_at'] === null
      ? null
      : new Date(json['created_at'])
  }
}

export function CollectionToJSON(value?: Collection | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    parent_id: value.parent_id,
    type: value.type,
    name: value.name,
    description: value.description
  }
}
