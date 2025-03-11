/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.12.2
 * Contact: support@apideck.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import {
  AttachmentReferenceType,
  AttachmentReferenceTypeFromJSON,
  AttachmentReferenceTypeToJSON
} from './AttachmentReferenceType'

/**
 *
 * @export
 * @interface AttachmentReference
 */
export interface AttachmentReference {
  /**
   *
   * @type {AttachmentReferenceType}
   * @memberof AttachmentReference
   */
  type?: AttachmentReferenceType
  /**
   * A unique identifier for an object.
   * @type {string}
   * @memberof AttachmentReference
   */
  readonly id?: string
}

export function AttachmentReferenceFromJSON(json: any): AttachmentReference {
  return AttachmentReferenceFromJSONTyped(json, false)
}

export function AttachmentReferenceFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): AttachmentReference {
  if (json === undefined || json === null) {
    return json
  }
  return {
    type: !exists(json, 'type') ? undefined : AttachmentReferenceTypeFromJSON(json['type']),
    id: !exists(json, 'id') ? undefined : json['id']
  }
}

export function AttachmentReferenceToJSON(value?: AttachmentReference | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    type: AttachmentReferenceTypeToJSON(value.type)
  }
}
