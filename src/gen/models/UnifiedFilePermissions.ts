/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.1.3
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
/**
 * Permissions the current user has on this file.
 * @export
 * @interface UnifiedFilePermissions
 */
export interface UnifiedFilePermissions {
  /**
   * Whether the current user can download this file.
   * @type {boolean}
   * @memberof UnifiedFilePermissions
   */
  download?: boolean
}

export function UnifiedFilePermissionsFromJSON(json: any): UnifiedFilePermissions {
  return UnifiedFilePermissionsFromJSONTyped(json, false)
}

export function UnifiedFilePermissionsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): UnifiedFilePermissions {
  if (json === undefined || json === null) {
    return json
  }
  return {
    download: !exists(json, 'download') ? undefined : json['download']
  }
}

export function UnifiedFilePermissionsToJSON(value?: UnifiedFilePermissions | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    download: value.download
  }
}
