/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 9.9.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
/**
 * Theming options to change the look and feel of Vault.
 * @export
 * @interface SessionTheme
 */
export interface SessionTheme {
  /**
   * The URL to the favicon to use for Vault.
   * @type {string}
   * @memberof SessionTheme
   */
  favicon?: string
  /**
   * The URL to the logo to use for Vault.
   * @type {string}
   * @memberof SessionTheme
   */
  logo?: string
  /**
   * The primary color to use for Vault.
   * @type {string}
   * @memberof SessionTheme
   */
  primary_color?: string
  /**
   * The background color to use for the sidebar.
   * @type {string}
   * @memberof SessionTheme
   */
  sidepanel_background_color?: string
  /**
   * The text color to use for the sidebar.
   * @type {string}
   * @memberof SessionTheme
   */
  sidepanel_text_color?: string
  /**
   * The name that will be shown in the sidebar.
   * @type {string}
   * @memberof SessionTheme
   */
  vault_name?: string
  /**
   * The URL to the privacy policy that will be shown in the sidebar.
   * @type {string}
   * @memberof SessionTheme
   */
  privacy_url?: string
  /**
   * The URL to the terms and conditions that will be shown in the sidebar.
   * @type {string}
   * @memberof SessionTheme
   */
  terms_url?: string
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
    logo: !exists(json, 'logo') ? undefined : json['logo'],
    primary_color: !exists(json, 'primary_color') ? undefined : json['primary_color'],
    sidepanel_background_color: !exists(json, 'sidepanel_background_color')
      ? undefined
      : json['sidepanel_background_color'],
    sidepanel_text_color: !exists(json, 'sidepanel_text_color')
      ? undefined
      : json['sidepanel_text_color'],
    vault_name: !exists(json, 'vault_name') ? undefined : json['vault_name'],
    privacy_url: !exists(json, 'privacy_url') ? undefined : json['privacy_url'],
    terms_url: !exists(json, 'terms_url') ? undefined : json['terms_url']
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
    logo: value.logo,
    primary_color: value.primary_color,
    sidepanel_background_color: value.sidepanel_background_color,
    sidepanel_text_color: value.sidepanel_text_color,
    vault_name: value.vault_name,
    privacy_url: value.privacy_url,
    terms_url: value.terms_url
  }
}
