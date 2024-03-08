/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.3.6
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import {
  ConnectionImportDataCredentials,
  ConnectionImportDataCredentialsFromJSON,
  ConnectionImportDataCredentialsToJSON
} from './ConnectionImportDataCredentials'

/**
 *
 * @export
 * @interface ConnectionImportData
 */
export interface ConnectionImportData {
  /**
   *
   * @type {ConnectionImportDataCredentials}
   * @memberof ConnectionImportData
   */
  credentials?: ConnectionImportDataCredentials
  /**
   * Connection settings. Values will persist to `form_fields` with corresponding id
   * @type {object}
   * @memberof ConnectionImportData
   */
  settings?: object | null
  /**
   * Attach your own consumer specific metadata
   * @type {{ [key: string]: unknown; }}
   * @memberof ConnectionImportData
   */
  metadata?: { [key: string]: unknown } | null
}

export function ConnectionImportDataFromJSON(json: any): ConnectionImportData {
  return ConnectionImportDataFromJSONTyped(json, false)
}

export function ConnectionImportDataFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ConnectionImportData {
  if (json === undefined || json === null) {
    return json
  }
  return {
    credentials: !exists(json, 'credentials')
      ? undefined
      : ConnectionImportDataCredentialsFromJSON(json['credentials']),
    settings: !exists(json, 'settings') ? undefined : json['settings'],
    metadata: !exists(json, 'metadata') ? undefined : json['metadata']
  }
}

export function ConnectionImportDataToJSON(value?: ConnectionImportData | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    credentials: ConnectionImportDataCredentialsToJSON(value.credentials),
    settings: value.settings,
    metadata: value.metadata
  }
}
