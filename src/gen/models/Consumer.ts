/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.9.1
 * Contact: support@apideck.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { ConsumerConnection, ConsumerConnectionFromJSON } from './ConsumerConnection'
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
   * Unique consumer identifier. You can freely choose a consumer ID yourself. Most of the time, this is an ID of your internal data model that represents a user or account in your system (for example account:12345). If the consumer doesn't exist yet, Vault will upsert a consumer based on your ID.
   * @type {string}
   * @memberof Consumer
   */
  consumer_id: string
  /**
   * ID of your Apideck Application
   * @type {string}
   * @memberof Consumer
   */
  readonly application_id?: string
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
  readonly connections?: Array<ConsumerConnection>
  /**
   *
   * @type {Array<string>}
   * @memberof Consumer
   */
  readonly services?: Array<string>
  /**
   *
   * @type {number}
   * @memberof Consumer
   */
  readonly aggregated_request_count?: number
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
  readonly created?: string
  /**
   *
   * @type {string}
   * @memberof Consumer
   */
  readonly modified?: string
  /**
   *
   * @type {string}
   * @memberof Consumer
   */
  readonly request_count_updated?: string
}

export function ConsumerFromJSON(json: any): Consumer {
  return ConsumerFromJSONTyped(json, false)
}

export function ConsumerFromJSONTyped(json: any, ignoreDiscriminator: boolean): Consumer {
  if (json === undefined || json === null) {
    return json
  }
  return {
    consumer_id: json['consumer_id'],
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
    metadata: ConsumerMetadataToJSON(value.metadata),
    request_counts: RequestCountAllocationToJSON(value.request_counts)
  }
}
