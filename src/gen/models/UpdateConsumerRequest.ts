/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.3.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import {
  ConsumerMetadata,
  ConsumerMetadataFromJSON,
  ConsumerMetadataToJSON
} from './ConsumerMetadata'

/**
 *
 * @export
 * @interface UpdateConsumerRequest
 */
export interface UpdateConsumerRequest {
  /**
   *
   * @type {ConsumerMetadata}
   * @memberof UpdateConsumerRequest
   */
  metadata?: ConsumerMetadata
}

export function UpdateConsumerRequestFromJSON(json: any): UpdateConsumerRequest {
  return UpdateConsumerRequestFromJSONTyped(json, false)
}

export function UpdateConsumerRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): UpdateConsumerRequest {
  if (json === undefined || json === null) {
    return json
  }
  return {
    metadata: !exists(json, 'metadata') ? undefined : ConsumerMetadataFromJSON(json['metadata'])
  }
}

export function UpdateConsumerRequestToJSON(value?: UpdateConsumerRequest | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    metadata: ConsumerMetadataToJSON(value.metadata)
  }
}
