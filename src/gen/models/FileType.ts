/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.19.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * The type of resource. Could be file, folder or url
 * @export
 * @enum {string}
 */
export enum FileType {
  file = 'file',
  folder = 'folder',
  url = 'url'
}

export function FileTypeFromJSON(json: any): FileType {
  return FileTypeFromJSONTyped(json, false)
}

export function FileTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): FileType {
  return json as FileType
}

export function FileTypeToJSON(value?: FileType | null): any {
  return value as any
}
