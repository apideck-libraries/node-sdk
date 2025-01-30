/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.11.1
 * Contact: support@apideck.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { UnifiedApiId, UnifiedApiIdFromJSON, UnifiedApiIdToJSON } from './UnifiedApiId'

/**
 * Settings to change the way the Vault is displayed.
 * @export
 * @interface SessionSettings
 */
export interface SessionSettings {
  /**
   * Provide the IDs of the Unified APIs you want to be visible. Leaving it empty or omitting this field will show all Unified APIs.
   * @type {Array<UnifiedApiId>}
   * @memberof SessionSettings
   */
  unified_apis?: Array<UnifiedApiId>
  /**
   * A boolean that controls the display of the configurable resources for an integration. When set to true, the resource configuration options will be hidden and not shown to the user. When set to false, the resource configuration options will be displayed to the user.
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
   * Configure [Vault](/apis/vault/reference#section/Get-Started) to show the suggestions page. Defaults to `false`.
   * @type {boolean}
   * @memberof SessionSettings
   */
  show_suggestions?: boolean
  /**
   * Configure [Vault](/apis/vault/reference#section/Get-Started) to show the sidebar. Defaults to `true`.
   * @type {boolean}
   * @memberof SessionSettings
   */
  show_sidebar?: boolean
  /**
   * Automatically redirect to redirect uri after the connection has been configured as callable. Defaults to `false`.
   * @type {boolean}
   * @memberof SessionSettings
   */
  auto_redirect?: boolean
  /**
   * Hide Apideck connection guides in [Vault](/apis/vault/reference#section/Get-Started). Defaults to `false`.
   * @type {boolean}
   * @memberof SessionSettings
   */
  hide_guides?: boolean
  /**
   * Hide actions from your users in [Vault](/apis/vault/reference#section/Get-Started). Actions in `allow_actions` will be shown on a connection in Vault.
   * Available actions are: `delete`, `disconnect`, `reauthorize` and `disable`.
   * Empty array will hide all actions. By default all actions are visible.
   * @type {Array<string>}
   * @memberof SessionSettings
   */
  allow_actions?: Array<SessionSettingsAllowActions>
}

/**
 * @export
 * @enum {string}
 */
export enum SessionSettingsAllowActions {
  delete = 'delete',
  disconnect = 'disconnect',
  reauthorize = 'reauthorize',
  disable = 'disable'
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
    unified_apis: !exists(json, 'unified_apis')
      ? undefined
      : (json['unified_apis'] as Array<any>).map(UnifiedApiIdFromJSON),
    hide_resource_settings: !exists(json, 'hide_resource_settings')
      ? undefined
      : json['hide_resource_settings'],
    sandbox_mode: !exists(json, 'sandbox_mode') ? undefined : json['sandbox_mode'],
    isolation_mode: !exists(json, 'isolation_mode') ? undefined : json['isolation_mode'],
    session_length: !exists(json, 'session_length') ? undefined : json['session_length'],
    show_logs: !exists(json, 'show_logs') ? undefined : json['show_logs'],
    show_suggestions: !exists(json, 'show_suggestions') ? undefined : json['show_suggestions'],
    show_sidebar: !exists(json, 'show_sidebar') ? undefined : json['show_sidebar'],
    auto_redirect: !exists(json, 'auto_redirect') ? undefined : json['auto_redirect'],
    hide_guides: !exists(json, 'hide_guides') ? undefined : json['hide_guides'],
    allow_actions: !exists(json, 'allow_actions') ? undefined : json['allow_actions']
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
    unified_apis:
      value.unified_apis === undefined
        ? undefined
        : (value.unified_apis as Array<any>).map(UnifiedApiIdToJSON),
    hide_resource_settings: value.hide_resource_settings,
    sandbox_mode: value.sandbox_mode,
    isolation_mode: value.isolation_mode,
    session_length: value.session_length,
    show_logs: value.show_logs,
    show_suggestions: value.show_suggestions,
    show_sidebar: value.show_sidebar,
    auto_redirect: value.auto_redirect,
    hide_guides: value.hide_guides,
    allow_actions: value.allow_actions
  }
}
