/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.7.4
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
 * @interface ConnectionMetadata
 */
export interface ConnectionMetadata {
  /**
   *
   * @type {string}
   * @memberof ConnectionMetadata
   */
  id?: string
  /**
   *
   * @type {string}
   * @memberof ConnectionMetadata
   */
  name?: string
}

export function ConnectionMetadataFromJSON(json: any): ConnectionMetadata {
  return ConnectionMetadataFromJSONTyped(json, false)
}

export function ConnectionMetadataFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ConnectionMetadata {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    name: !exists(json, 'name') ? undefined : json['name']
  }
}

export function ConnectionMetadataToJSON(value?: ConnectionMetadata | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    id: value.id,
    name: value.name
  }
}
