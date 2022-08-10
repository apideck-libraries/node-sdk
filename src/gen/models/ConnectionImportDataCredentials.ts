/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.39.0
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
 * @interface ConnectionImportDataCredentials
 */
export interface ConnectionImportDataCredentials {
  /**
   * The refresh token can be used to obtain a new access token.
   * @type {string}
   * @memberof ConnectionImportDataCredentials
   */
  refresh_token: string
  /**
   * Access token
   * @type {string}
   * @memberof ConnectionImportDataCredentials
   */
  access_token?: string
  /**
   * The datetime at which the token was issued. If omitted the token will be queued for refresh.
   * @type {Date}
   * @memberof ConnectionImportDataCredentials
   */
  issued_at?: Date | null
  /**
   * The number of seconds until the token expires. If omitted the token will be queued for refresh.
   * @type {number}
   * @memberof ConnectionImportDataCredentials
   */
  expires_in?: number | null
}

export function ConnectionImportDataCredentialsFromJSON(
  json: any
): ConnectionImportDataCredentials {
  return ConnectionImportDataCredentialsFromJSONTyped(json, false)
}

export function ConnectionImportDataCredentialsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ConnectionImportDataCredentials {
  if (json === undefined || json === null) {
    return json
  }
  return {
    refresh_token: json['refresh_token'],
    access_token: !exists(json, 'access_token') ? undefined : json['access_token'],
    issued_at: !exists(json, 'issued_at')
      ? undefined
      : json['issued_at'] === null
      ? null
      : new Date(json['issued_at']),
    expires_in: !exists(json, 'expires_in') ? undefined : json['expires_in']
  }
}

export function ConnectionImportDataCredentialsToJSON(
  value?: ConnectionImportDataCredentials | null
): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    refresh_token: value.refresh_token,
    access_token: value.access_token,
    issued_at:
      value.issued_at === undefined
        ? undefined
        : value.issued_at === null
        ? null
        : new Date(value.issued_at).toISOString(),
    expires_in: value.expires_in
  }
}
