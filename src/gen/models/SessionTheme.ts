/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.32.0
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
 * @interface SessionTheme
 */
export interface SessionTheme {
  /**
   *
   * @type {string}
   * @memberof SessionTheme
   */
  favicon?: string
  /**
   *
   * @type {string}
   * @memberof SessionTheme
   */
  primary_color?: string
  /**
   *
   * @type {string}
   * @memberof SessionTheme
   */
  privacy_url?: string
  /**
   *
   * @type {string}
   * @memberof SessionTheme
   */
  sidepanel_background_color?: string
  /**
   *
   * @type {string}
   * @memberof SessionTheme
   */
  sidepanel_text_color?: string
  /**
   *
   * @type {string}
   * @memberof SessionTheme
   */
  terms_url?: string
  /**
   *
   * @type {string}
   * @memberof SessionTheme
   */
  vault_name?: string
}

export function SessionThemeFromJSON(json: any): SessionTheme {
  return SessionThemeFromJSONTyped(json, false)
}

export function SessionThemeFromJSONTyped(json: any, ignoreDiscriminator: boolean): SessionTheme {
  if (json === undefined || json === null) {
    return json
  }
  return {
    favicon: !exists(json, 'favicon') ? undefined : json['favicon'],
    primary_color: !exists(json, 'primary_color') ? undefined : json['primary_color'],
    privacy_url: !exists(json, 'privacy_url') ? undefined : json['privacy_url'],
    sidepanel_background_color: !exists(json, 'sidepanel_background_color')
      ? undefined
      : json['sidepanel_background_color'],
    sidepanel_text_color: !exists(json, 'sidepanel_text_color')
      ? undefined
      : json['sidepanel_text_color'],
    terms_url: !exists(json, 'terms_url') ? undefined : json['terms_url'],
    vault_name: !exists(json, 'vault_name') ? undefined : json['vault_name']
  }
}

export function SessionThemeToJSON(value?: SessionTheme | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    favicon: value.favicon,
    primary_color: value.primary_color,
    privacy_url: value.privacy_url,
    sidepanel_background_color: value.sidepanel_background_color,
    sidepanel_text_color: value.sidepanel_text_color,
    terms_url: value.terms_url,
    vault_name: value.vault_name
  }
}
