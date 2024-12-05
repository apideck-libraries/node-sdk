/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.8.2
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
 * @interface CommentsSort
 */
export interface CommentsSort {
  /**
   * The field on which to sort the Comments
   * @type {string}
   * @memberof CommentsSort
   */
  by?: CommentsSortBy
  /**
   *
   * @type {SortDirection}
   * @memberof CommentsSort
   */
  direction?: SortDirection
}

/**
 * @export
 * @enum {string}
 */
export enum CommentsSortBy {
  created_at = 'created_at',
  updated_at = 'updated_at'
}

export function CommentsSortFromJSON(json: any): CommentsSort {
  return CommentsSortFromJSONTyped(json, false)
}

export function CommentsSortFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommentsSort {
  if (json === undefined || json === null) {
    return json
  }
  return {
    by: !exists(json, 'by') ? undefined : json['by'],
    direction: !exists(json, 'direction') ? undefined : SortDirectionFromJSON(json['direction'])
  }
}

export function CommentsSortToJSON(value?: CommentsSort | null): any {
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
