/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 9.5.0
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
 * @interface UploadSession
 */
export interface UploadSession {
  /**
   * A unique identifier for an object.
   * @type {string}
   * @memberof UploadSession
   */
  readonly id?: string
  /**
   * Indicates if the upload session was completed successfully.
   * @type {boolean}
   * @memberof UploadSession
   */
  readonly success?: boolean
  /**
   * Size in bytes of each part of the file that you will upload. Uploaded parts need to be this size for the upload to be successful.
   * @type {number}
   * @memberof UploadSession
   */
  readonly part_size?: number
  /**
   * Indicates if parts of the file can uploaded in parallel.
   * @type {boolean}
   * @memberof UploadSession
   */
  readonly parallel_upload_supported?: boolean
  /**
   * The range of bytes that was successfully uploaded.
   * @type {string}
   * @memberof UploadSession
   */
  readonly uploaded_byte_range?: string
  /**
   *
   * @type {Date}
   * @memberof UploadSession
   */
  readonly expires_at?: Date
}

export function UploadSessionFromJSON(json: any): UploadSession {
  return UploadSessionFromJSONTyped(json, false)
}

export function UploadSessionFromJSONTyped(json: any, ignoreDiscriminator: boolean): UploadSession {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    success: !exists(json, 'success') ? undefined : json['success'],
    part_size: !exists(json, 'part_size') ? undefined : json['part_size'],
    parallel_upload_supported: !exists(json, 'parallel_upload_supported')
      ? undefined
      : json['parallel_upload_supported'],
    uploaded_byte_range: !exists(json, 'uploaded_byte_range')
      ? undefined
      : json['uploaded_byte_range'],
    expires_at: !exists(json, 'expires_at') ? undefined : new Date(json['expires_at'])
  }
}

export function UploadSessionToJSON(value?: UploadSession | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {}
}
