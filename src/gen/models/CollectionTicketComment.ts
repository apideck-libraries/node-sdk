/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 9.9.2
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
 * @interface CollectionTicketComment
 */
export interface CollectionTicketComment {
  /**
   * A unique identifier for an object.
   * @type {string}
   * @memberof CollectionTicketComment
   */
  readonly id?: string
  /**
   * Body of the comment
   * @type {string}
   * @memberof CollectionTicketComment
   */
  body?: string | null
  /**
   * The user who created the object.
   * @type {string}
   * @memberof CollectionTicketComment
   */
  readonly created_by?: string | null
  /**
   * The date and time when the object was last updated.
   * @type {Date}
   * @memberof CollectionTicketComment
   */
  readonly updated_at?: Date | null
  /**
   * The date and time when the object was created.
   * @type {Date}
   * @memberof CollectionTicketComment
   */
  readonly created_at?: Date | null
}

export function CollectionTicketCommentFromJSON(json: any): CollectionTicketComment {
  return CollectionTicketCommentFromJSONTyped(json, false)
}

export function CollectionTicketCommentFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): CollectionTicketComment {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    body: !exists(json, 'body') ? undefined : json['body'],
    created_by: !exists(json, 'created_by') ? undefined : json['created_by'],
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

export function CollectionTicketCommentToJSON(value?: CollectionTicketComment | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    body: value.body
  }
}
