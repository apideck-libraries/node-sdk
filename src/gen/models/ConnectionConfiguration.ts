/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.28.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import {
  ConnectionDefaults,
  ConnectionDefaultsFromJSON,
  ConnectionDefaultsToJSON
} from './ConnectionDefaults'

/**
 *
 * @export
 * @interface ConnectionConfiguration
 */
export interface ConnectionConfiguration {
  /**
   *
   * @type {string}
   * @memberof ConnectionConfiguration
   */
  resource?: string
  /**
   *
   * @type {Array<ConnectionDefaults>}
   * @memberof ConnectionConfiguration
   */
  defaults?: Array<ConnectionDefaults>
}

export function ConnectionConfigurationFromJSON(json: any): ConnectionConfiguration {
  return ConnectionConfigurationFromJSONTyped(json, false)
}

export function ConnectionConfigurationFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ConnectionConfiguration {
  if (json === undefined || json === null) {
    return json
  }
  return {
    resource: !exists(json, 'resource') ? undefined : json['resource'],
    defaults: !exists(json, 'defaults')
      ? undefined
      : (json['defaults'] as Array<any>).map(ConnectionDefaultsFromJSON)
  }
}

export function ConnectionConfigurationToJSON(value?: ConnectionConfiguration | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    resource: value.resource,
    defaults:
      value.defaults === undefined
        ? undefined
        : (value.defaults as Array<any>).map(ConnectionDefaultsToJSON)
  }
}
