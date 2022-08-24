/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.42.0
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
 * @interface LinkedFolder
 */
export interface LinkedFolder {
  /**
   *
   * @type {string}
   * @memberof LinkedFolder
   */
  readonly id: string
  /**
   * The name of the folder
   * @type {string}
   * @memberof LinkedFolder
   */
  name?: string
}

export function LinkedFolderFromJSON(json: any): LinkedFolder {
  return LinkedFolderFromJSONTyped(json, false)
}

export function LinkedFolderFromJSONTyped(json: any, ignoreDiscriminator: boolean): LinkedFolder {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: json['id'],
    name: !exists(json, 'name') ? undefined : json['name']
  }
}

export function LinkedFolderToJSON(value?: LinkedFolder | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    name: value.name
  }
}
