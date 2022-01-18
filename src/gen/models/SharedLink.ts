/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.11.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import {
  SharedLinkTarget,
  SharedLinkTargetFromJSON,
  SharedLinkTargetToJSON
} from './SharedLinkTarget'

/**
 *
 * @export
 * @interface SharedLink
 */
export interface SharedLink {
  /**
   * The ID of the file or folder to link.
   * @type {string}
   * @memberof SharedLink
   */
  target_id: string
  /**
   * The URL that can be used to view the file.
   * @type {string}
   * @memberof SharedLink
   */
  readonly url?: string
  /**
   * The URL that can be used to download the file.
   * @type {string}
   * @memberof SharedLink
   */
  download_url?: string
  /**
   *
   * @type {SharedLinkTarget}
   * @memberof SharedLink
   */
  target?: SharedLinkTarget
  /**
   * The scope of the shared link.
   * @type {string}
   * @memberof SharedLink
   */
  scope?: SharedLinkScope
  /**
   * Indicated if the shared link is password protected.
   * @type {boolean}
   * @memberof SharedLink
   */
  readonly password_protected?: boolean
  /**
   * Optional password for the shared link.
   * @type {string}
   * @memberof SharedLink
   */
  password?: string | null
  /**
   *
   * @type {Date}
   * @memberof SharedLink
   */
  readonly expires_at?: Date
  /**
   *
   * @type {Date}
   * @memberof SharedLink
   */
  readonly updated_at?: Date
  /**
   *
   * @type {Date}
   * @memberof SharedLink
   */
  readonly created_at?: Date
}

/**
 * @export
 * @enum {string}
 */
export enum SharedLinkScope {
  public = 'public',
  company = 'company'
}

export function SharedLinkFromJSON(json: any): SharedLink {
  return SharedLinkFromJSONTyped(json, false)
}

export function SharedLinkFromJSONTyped(json: any, ignoreDiscriminator: boolean): SharedLink {
  if (json === undefined || json === null) {
    return json
  }
  return {
    target_id: json['target_id'],
    url: !exists(json, 'url') ? undefined : json['url'],
    download_url: !exists(json, 'download_url') ? undefined : json['download_url'],
    target: !exists(json, 'target') ? undefined : SharedLinkTargetFromJSON(json['target']),
    scope: !exists(json, 'scope') ? undefined : json['scope'],
    password_protected: !exists(json, 'password_protected')
      ? undefined
      : json['password_protected'],
    password: !exists(json, 'password') ? undefined : json['password'],
    expires_at: !exists(json, 'expires_at') ? undefined : new Date(json['expires_at']),
    updated_at: !exists(json, 'updated_at') ? undefined : new Date(json['updated_at']),
    created_at: !exists(json, 'created_at') ? undefined : new Date(json['created_at'])
  }
}

export function SharedLinkToJSON(value?: SharedLink | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    target_id: value.target_id,
    download_url: value.download_url,
    target: SharedLinkTargetToJSON(value.target),
    scope: value.scope,
    password: value.password
  }
}
