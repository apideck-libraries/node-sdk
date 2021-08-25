/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 5.4.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

// Override template imports only to fix circulr dependencies generated by default template
// https://github.com/OpenAPITools/openapi-generator/issues/6140

import { exists } from '../runtime'
import {
  ConnectionMetadata,
  ConnectionMetadataFromJSON,
  ConnectionMetadataToJSON
} from './ConnectionMetadata'

/**
 *
 * @export
 * @interface CreateConnectionRequestBodyMetadata
 */
export interface CreateConnectionRequestBodyMetadata {
  /**
   *
   * @type {ConnectionMetadata}
   * @memberof CreateConnectionRequestBodyMetadata
   */
  ecosystem?: ConnectionMetadata
  /**
   *
   * @type {ConnectionMetadata}
   * @memberof CreateConnectionRequestBodyMetadata
   */
  account?: ConnectionMetadata
}

export function CreateConnectionRequestBodyMetadataFromJSON(
  json: any
): CreateConnectionRequestBodyMetadata {
  return CreateConnectionRequestBodyMetadataFromJSONTyped(json, false)
}

export function CreateConnectionRequestBodyMetadataFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): CreateConnectionRequestBodyMetadata {
  if (json === undefined || json === null) {
    return json
  }
  return {
    ecosystem: !exists(json, 'ecosystem')
      ? undefined
      : ConnectionMetadataFromJSON(json['ecosystem']),
    account: !exists(json, 'account') ? undefined : ConnectionMetadataFromJSON(json['account'])
  }
}

export function CreateConnectionRequestBodyMetadataToJSON(
  value?: CreateConnectionRequestBodyMetadata | null
): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    ecosystem: ConnectionMetadataToJSON(value.ecosystem),
    account: ConnectionMetadataToJSON(value.account)
  }
}
