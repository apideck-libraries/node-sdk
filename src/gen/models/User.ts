/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 5.1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

// Override template imports only to fix circulr dependencies generated by default template
// https://github.com/OpenAPITools/openapi-generator/issues/6140

import { exists } from '../runtime'
/**
 *
 * @export
 * @interface User
 */
export interface User {
  /**
   *
   * @type {string}
   * @memberof User
   */
  email: string
  /**
   *
   * @type {string}
   * @memberof User
   */
  readonly id?: string
  /**
   *
   * @type {string}
   * @memberof User
   */
  parent_id?: string | null
  /**
   *
   * @type {string}
   * @memberof User
   */
  username?: string | null
  /**
   *
   * @type {string}
   * @memberof User
   */
  first_name?: string | null
  /**
   *
   * @type {string}
   * @memberof User
   */
  last_name?: string | null
  /**
   *
   * @type {string}
   * @memberof User
   */
  image?: string | null
  /**
   *
   * @type {string}
   * @memberof User
   */
  language?: string | null
  /**
   *
   * @type {string}
   * @memberof User
   */
  status?: string | null
  /**
   *
   * @type {string}
   * @memberof User
   */
  password?: string
  /**
   *
   * @type {string}
   * @memberof User
   */
  readonly updated_at?: string
  /**
   *
   * @type {string}
   * @memberof User
   */
  readonly created_at?: string
}

export function UserFromJSON(json: any): User {
  return UserFromJSONTyped(json, false)
}

export function UserFromJSONTyped(json: any, ignoreDiscriminator: boolean): User {
  if (json === undefined || json === null) {
    return json
  }
  return {
    email: json['email'],
    id: !exists(json, 'id') ? undefined : json['id'],
    parent_id: !exists(json, 'parent_id') ? undefined : json['parent_id'],
    username: !exists(json, 'username') ? undefined : json['username'],
    first_name: !exists(json, 'first_name') ? undefined : json['first_name'],
    last_name: !exists(json, 'last_name') ? undefined : json['last_name'],
    image: !exists(json, 'image') ? undefined : json['image'],
    language: !exists(json, 'language') ? undefined : json['language'],
    status: !exists(json, 'status') ? undefined : json['status'],
    password: !exists(json, 'password') ? undefined : json['password'],
    updated_at: !exists(json, 'updated_at') ? undefined : json['updated_at'],
    created_at: !exists(json, 'created_at') ? undefined : json['created_at']
  }
}

export function UserToJSON(value?: User | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    email: value.email,
    parent_id: value.parent_id,
    username: value.username,
    first_name: value.first_name,
    last_name: value.last_name,
    image: value.image,
    language: value.language,
    status: value.status,
    password: value.password
  }
}
