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
 * @interface CollectionUser
 */
export interface CollectionUser {
  /**
   * A unique identifier for an object.
   * @type {string}
   * @memberof CollectionUser
   */
  readonly id?: string | null
  /**
   * Full name of the user
   * @type {string}
   * @memberof CollectionUser
   */
  name?: string | null
  /**
   * First name of the user
   * @type {string}
   * @memberof CollectionUser
   */
  first_name?: string | null
  /**
   * Last name of the user
   * @type {string}
   * @memberof CollectionUser
   */
  last_name?: string | null
  /**
   * Email address of the user
   * @type {string}
   * @memberof CollectionUser
   */
  email?: string | null
  /**
   * The URL of the photo of a person.
   * @type {string}
   * @memberof CollectionUser
   */
  photo_url?: string | null
  /**
   * When custom mappings are configured on the resource, the result is included here.
   * @type {object}
   * @memberof CollectionUser
   */
  readonly custom_mappings?: object | null
  /**
   * The date and time when the object was last updated.
   * @type {Date}
   * @memberof CollectionUser
   */
  readonly updated_at?: Date | null
  /**
   * The date and time when the object was created.
   * @type {Date}
   * @memberof CollectionUser
   */
  readonly created_at?: Date | null
}

export function CollectionUserFromJSON(json: any): CollectionUser {
  return CollectionUserFromJSONTyped(json, false)
}

export function CollectionUserFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): CollectionUser {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    name: !exists(json, 'name') ? undefined : json['name'],
    first_name: !exists(json, 'first_name') ? undefined : json['first_name'],
    last_name: !exists(json, 'last_name') ? undefined : json['last_name'],
    email: !exists(json, 'email') ? undefined : json['email'],
    photo_url: !exists(json, 'photo_url') ? undefined : json['photo_url'],
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

export function CollectionUserToJSON(value?: CollectionUser | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    name: value.name,
    first_name: value.first_name,
    last_name: value.last_name,
    email: value.email,
    photo_url: value.photo_url
  }
}
