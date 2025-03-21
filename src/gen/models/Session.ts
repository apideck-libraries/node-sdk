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
import {
  ConsumerMetadata,
  ConsumerMetadataFromJSON,
  ConsumerMetadataToJSON
} from './ConsumerMetadata'
import { SessionSettings, SessionSettingsFromJSON, SessionSettingsToJSON } from './SessionSettings'
import { SessionTheme, SessionThemeFromJSON, SessionThemeToJSON } from './SessionTheme'

/**
 *
 * @export
 * @interface Session
 */
export interface Session {
  /**
   *
   * @type {ConsumerMetadata}
   * @memberof Session
   */
  consumer_metadata?: ConsumerMetadata
  /**
   * The URL to redirect the user to after the session has been configured.
   * @type {string}
   * @memberof Session
   */
  redirect_uri?: string
  /**
   *
   * @type {SessionSettings}
   * @memberof Session
   */
  settings?: SessionSettings
  /**
   *
   * @type {SessionTheme}
   * @memberof Session
   */
  theme?: SessionTheme
  /**
   * Custom consumer settings that are passed as part of the session.
   * @type {{ [key: string]: unknown; }}
   * @memberof Session
   */
  custom_consumer_settings?: { [key: string]: unknown }
}

export function SessionFromJSON(json: any): Session {
  return SessionFromJSONTyped(json, false)
}

export function SessionFromJSONTyped(json: any, ignoreDiscriminator: boolean): Session {
  if (json === undefined || json === null) {
    return json
  }
  return {
    consumer_metadata: !exists(json, 'consumer_metadata')
      ? undefined
      : ConsumerMetadataFromJSON(json['consumer_metadata']),
    redirect_uri: !exists(json, 'redirect_uri') ? undefined : json['redirect_uri'],
    settings: !exists(json, 'settings') ? undefined : SessionSettingsFromJSON(json['settings']),
    theme: !exists(json, 'theme') ? undefined : SessionThemeFromJSON(json['theme']),
    custom_consumer_settings: !exists(json, 'custom_consumer_settings')
      ? undefined
      : json['custom_consumer_settings']
  }
}

export function SessionToJSON(value?: Session | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    consumer_metadata: ConsumerMetadataToJSON(value.consumer_metadata),
    redirect_uri: value.redirect_uri,
    settings: SessionSettingsToJSON(value.settings),
    theme: SessionThemeToJSON(value.theme),
    custom_consumer_settings: value.custom_consumer_settings
  }
}
