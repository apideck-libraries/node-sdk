/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.49.0
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
import {
  RequestCountAllocation,
  RequestCountAllocationFromJSON,
  RequestCountAllocationToJSON
} from './RequestCountAllocation'

/**
 *
 * @export
 * @interface GetConsumersResponseData
 */
export interface GetConsumersResponseData {
  /**
   *
   * @type {string}
   * @memberof GetConsumersResponseData
   */
  consumer_id?: string
  /**
   *
   * @type {string}
   * @memberof GetConsumersResponseData
   */
  application_id?: string
  /**
   *
   * @type {ConsumerMetadata}
   * @memberof GetConsumersResponseData
   */
  metadata?: ConsumerMetadata
  /**
   *
   * @type {number}
   * @memberof GetConsumersResponseData
   */
  aggregated_request_count?: number
  /**
   *
   * @type {RequestCountAllocation}
   * @memberof GetConsumersResponseData
   */
  request_counts?: RequestCountAllocation
  /**
   *
   * @type {string}
   * @memberof GetConsumersResponseData
   */
  created?: string
  /**
   *
   * @type {string}
   * @memberof GetConsumersResponseData
   */
  modified?: string
  /**
   *
   * @type {string}
   * @memberof GetConsumersResponseData
   */
  request_count_updated?: string
  /**
   *
   * @type {Array<string>}
   * @memberof GetConsumersResponseData
   */
  services?: Array<string>
}

export function GetConsumersResponseDataFromJSON(json: any): GetConsumersResponseData {
  return GetConsumersResponseDataFromJSONTyped(json, false)
}

export function GetConsumersResponseDataFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetConsumersResponseData {
  if (json === undefined || json === null) {
    return json
  }
  return {
    consumer_id: !exists(json, 'consumer_id') ? undefined : json['consumer_id'],
    application_id: !exists(json, 'application_id') ? undefined : json['application_id'],
    metadata: !exists(json, 'metadata') ? undefined : ConsumerMetadataFromJSON(json['metadata']),
    aggregated_request_count: !exists(json, 'aggregated_request_count')
      ? undefined
      : json['aggregated_request_count'],
    request_counts: !exists(json, 'request_counts')
      ? undefined
      : RequestCountAllocationFromJSON(json['request_counts']),
    created: !exists(json, 'created') ? undefined : json['created'],
    modified: !exists(json, 'modified') ? undefined : json['modified'],
    request_count_updated: !exists(json, 'request_count_updated')
      ? undefined
      : json['request_count_updated'],
    services: !exists(json, 'services') ? undefined : json['services']
  }
}

export function GetConsumersResponseDataToJSON(value?: GetConsumersResponseData | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    consumer_id: value.consumer_id,
    application_id: value.application_id,
    metadata: ConsumerMetadataToJSON(value.metadata),
    aggregated_request_count: value.aggregated_request_count,
    request_counts: RequestCountAllocationToJSON(value.request_counts),
    created: value.created,
    modified: value.modified,
    request_count_updated: value.request_count_updated,
    services: value.services
  }
}
