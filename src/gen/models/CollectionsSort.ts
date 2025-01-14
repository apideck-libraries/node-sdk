/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.9.1
 * Contact: support@apideck.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { SortDirection, SortDirectionFromJSON, SortDirectionToJSON } from './SortDirection'

/**
 *
 * @export
 * @interface CollectionsSort
 */
export interface CollectionsSort {
  /**
   * The field on which to sort the Collections
   * @type {string}
   * @memberof CollectionsSort
   */
  by?: CollectionsSortBy
  /**
   *
   * @type {SortDirection}
   * @memberof CollectionsSort
   */
  direction?: SortDirection
}

/**
 * @export
 * @enum {string}
 */
export enum CollectionsSortBy {
  name = 'name',
  created_at = 'created_at',
  updated_at = 'updated_at'
}

export function CollectionsSortFromJSON(json: any): CollectionsSort {
  return CollectionsSortFromJSONTyped(json, false)
}

export function CollectionsSortFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): CollectionsSort {
  if (json === undefined || json === null) {
    return json
  }
  return {
    by: !exists(json, 'by') ? undefined : json['by'],
    direction: !exists(json, 'direction') ? undefined : SortDirectionFromJSON(json['direction'])
  }
}

export function CollectionsSortToJSON(value?: CollectionsSort | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    by: value.by,
    direction: SortDirectionToJSON(value.direction)
  }
}
