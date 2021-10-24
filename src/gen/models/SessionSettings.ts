/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 7.2.0
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
 * @interface SessionSettings
 */
export interface SessionSettings {
  /**
   *
   * @type {boolean}
   * @memberof SessionSettings
   */
  hide_resource_settings?: boolean
  /**
   * Configure [Vault](/apis/vault/reference#section/Get-Started) to show a banner informing the logged in user is in a test environment.
   * @type {boolean}
   * @memberof SessionSettings
   */
  sandbox_mode?: boolean
  /**
   * Configure [Vault](/apis/vault/reference#section/Get-Started) to run in isolation mode, meaning it only shows the connection settings and hides the navigation items.
   * @type {boolean}
   * @memberof SessionSettings
   */
  isolation_mode?: boolean
  /**
   * The duration of time the session is valid for (maximum 1 week).
   * @type {string}
   * @memberof SessionSettings
   */
  session_length?: string
  /**
   * Configure [Vault](/apis/vault/reference#section/Get-Started) to show the logs page. Defaults to `true`.
   * @type {boolean}
   * @memberof SessionSettings
   */
  show_logs?: boolean
  /**
   * Configure [Vault](/apis/vault/reference#section/Get-Started) to show the suggestions page. Defaults to `true`.
   * @type {boolean}
   * @memberof SessionSettings
   */
  show_suggestions?: boolean
}

export function SessionSettingsFromJSON(json: any): SessionSettings {
  return SessionSettingsFromJSONTyped(json, false)
}

export function SessionSettingsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): SessionSettings {
  if (json === undefined || json === null) {
    return json
  }
  return {
    hide_resource_settings: !exists(json, 'hide_resource_settings')
      ? undefined
      : json['hide_resource_settings'],
    sandbox_mode: !exists(json, 'sandbox_mode') ? undefined : json['sandbox_mode'],
    isolation_mode: !exists(json, 'isolation_mode') ? undefined : json['isolation_mode'],
    session_length: !exists(json, 'session_length') ? undefined : json['session_length'],
    show_logs: !exists(json, 'show_logs') ? undefined : json['show_logs'],
    show_suggestions: !exists(json, 'show_suggestions') ? undefined : json['show_suggestions']
  }
}

export function SessionSettingsToJSON(value?: SessionSettings | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    hide_resource_settings: value.hide_resource_settings,
    sandbox_mode: value.sandbox_mode,
    isolation_mode: value.isolation_mode,
    session_length: value.session_length,
    show_logs: value.show_logs,
    show_suggestions: value.show_suggestions
  }
}
