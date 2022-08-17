/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.41.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { FileType, FileTypeFromJSON, FileTypeToJSON } from './FileType'

/**
 *
 * @export
 * @interface SharedLinkTarget
 */
export interface SharedLinkTarget {
  /**
   *
   * @type {string}
   * @memberof SharedLinkTarget
   */
  readonly id: string
  /**
   * The name of the file
   * @type {string}
   * @memberof SharedLinkTarget
   */
  name?: string
  /**
   *
   * @type {FileType}
   * @memberof SharedLinkTarget
   */
  type?: FileType
}

export function SharedLinkTargetFromJSON(json: any): SharedLinkTarget {
  return SharedLinkTargetFromJSONTyped(json, false)
}

export function SharedLinkTargetFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): SharedLinkTarget {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: json['id'],
    name: !exists(json, 'name') ? undefined : json['name'],
    type: !exists(json, 'type') ? undefined : FileTypeFromJSON(json['type'])
  }
}

export function SharedLinkTargetToJSON(value?: SharedLinkTarget | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    name: value.name,
    type: FileTypeToJSON(value.type)
  }
}
