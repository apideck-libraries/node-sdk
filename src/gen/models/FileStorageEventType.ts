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

/**
 *
 * @export
 * @enum {string}
 */
export enum FileStorageEventType {
  Star = '*',
  file_storage_file_created = 'file-storage.file.created',
  file_storage_file_updated = 'file-storage.file.updated',
  file_storage_file_deleted = 'file-storage.file.deleted'
}

export function FileStorageEventTypeFromJSON(json: any): FileStorageEventType {
  return FileStorageEventTypeFromJSONTyped(json, false)
}

export function FileStorageEventTypeFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): FileStorageEventType {
  return json as FileStorageEventType
}

export function FileStorageEventTypeToJSON(value?: FileStorageEventType | null): any {
  return value as any
}
