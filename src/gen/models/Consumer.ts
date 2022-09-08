/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.52.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import {
  ConsumerConnection,
  ConsumerConnectionFromJSON,
  ConsumerConnectionToJSON
} from './ConsumerConnection'
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
 * @interface Consumer
 */
export interface Consumer {
  /**
   *
   * @type {string}
   * @memberof Consumer
   */
  consumer_id?: string
  /**
   *
   * @type {string}
   * @memberof Consumer
   */
  application_id?: string
  /**
   *
   * @type {ConsumerMetadata}
   * @memberof Consumer
   */
  metadata?: ConsumerMetadata
  /**
   *
   * @type {Array<ConsumerConnection>}
   * @memberof Consumer
   */
  connections?: Array<ConsumerConnection>
  /**
   *
   * @type {Array<string>}
   * @memberof Consumer
   */
  services?: Array<string>
  /**
   *
   * @type {number}
   * @memberof Consumer
   */
  aggregated_request_count?: number
  /**
   *
   * @type {RequestCountAllocation}
   * @memberof Consumer
   */
  request_counts?: RequestCountAllocation
  /**
   *
   * @type {string}
   * @memberof Consumer
   */
  created?: string
  /**
   *
   * @type {string}
   * @memberof Consumer
   */
  modified?: string
  /**
   *
   * @type {string}
   * @memberof Consumer
   */
  request_count_updated?: string
}

export function ConsumerFromJSON(json: any): Consumer {
  return ConsumerFromJSONTyped(json, false)
}

export function ConsumerFromJSONTyped(json: any, ignoreDiscriminator: boolean): Consumer {
  if (json === undefined || json === null) {
    return json
  }
  return {
    consumer_id: !exists(json, 'consumer_id') ? undefined : json['consumer_id'],
    application_id: !exists(json, 'application_id') ? undefined : json['application_id'],
    metadata: !exists(json, 'metadata') ? undefined : ConsumerMetadataFromJSON(json['metadata']),
    connections: !exists(json, 'connections')
      ? undefined
      : (json['connections'] as Array<any>).map(ConsumerConnectionFromJSON),
    services: !exists(json, 'services') ? undefined : json['services'],
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
      : json['request_count_updated']
  }
}

export function ConsumerToJSON(value?: Consumer | null): any {
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
    connections:
      value.connections === undefined
        ? undefined
        : (value.connections as Array<any>).map(ConsumerConnectionToJSON),
    services: value.services,
    aggregated_request_count: value.aggregated_request_count,
    request_counts: RequestCountAllocationToJSON(value.request_counts),
    created: value.created,
    modified: value.modified,
    request_count_updated: value.request_count_updated
  }
}
