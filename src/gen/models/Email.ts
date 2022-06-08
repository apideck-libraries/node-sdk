/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.32.1
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
 * @interface Email
 */
export interface Email {
  /**
   *
   * @type {string}
   * @memberof Email
   */
  email: string
  /**
   *
   * @type {string}
   * @memberof Email
   */
  id?: string
  /**
   *
   * @type {string}
   * @memberof Email
   */
  type?: EmailType
}

/**
 * @export
 * @enum {string}
 */
export enum EmailType {
  primary = 'primary',
  secondary = 'secondary',
  work = 'work',
  personal = 'personal',
  billing = 'billing',
  other = 'other'
}

export function EmailFromJSON(json: any): Email {
  return EmailFromJSONTyped(json, false)
}

export function EmailFromJSONTyped(json: any, ignoreDiscriminator: boolean): Email {
  if (json === undefined || json === null) {
    return json
  }
  return {
    email: json['email'],
    id: !exists(json, 'id') ? undefined : json['id'],
    type: !exists(json, 'type') ? undefined : json['type']
  }
}

export function EmailToJSON(value?: Email | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    email: value.email,
    id: value.id,
    type: value.type
  }
}
