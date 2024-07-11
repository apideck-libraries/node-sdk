/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.6.3
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { PassThroughBody, PassThroughBodyFromJSON, PassThroughBodyToJSON } from './PassThroughBody'

/**
 *
 * @export
 * @interface CreateAttachmentRequest
 */
export interface CreateAttachmentRequest {
  /**
   * The name of the file
   * @type {string}
   * @memberof CreateAttachmentRequest
   */
  name: string
  /**
   * Optional description of the file.
   * @type {string}
   * @memberof CreateAttachmentRequest
   */
  description?: string
  /**
   *
   * @type {PassThroughBody}
   * @memberof CreateAttachmentRequest
   */
  pass_through?: PassThroughBody
}

export function CreateAttachmentRequestFromJSON(json: any): CreateAttachmentRequest {
  return CreateAttachmentRequestFromJSONTyped(json, false)
}

export function CreateAttachmentRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): CreateAttachmentRequest {
  if (json === undefined || json === null) {
    return json
  }
  return {
    name: json['name'],
    description: !exists(json, 'description') ? undefined : json['description'],
    pass_through: !exists(json, 'pass_through')
      ? undefined
      : PassThroughBodyFromJSON(json['pass_through'])
  }
}

export function CreateAttachmentRequestToJSON(value?: CreateAttachmentRequest | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    name: value.name,
    description: value.description,
    pass_through: PassThroughBodyToJSON(value.pass_through)
  }
}
