/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 7.1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import {
  ConnectionEvent1Entity,
  ConnectionEvent1EntityFromJSON,
  ConnectionEvent1EntityToJSON
} from './ConnectionEvent1Entity'
import { EventType4, EventType4FromJSON, EventType4ToJSON } from './EventType4'

/**
 *
 * @export
 * @interface ConnectionEvent1
 */
export interface ConnectionEvent1 {
  /**
   * Unique reference to this request event
   * @type {string}
   * @memberof ConnectionEvent1
   */
  event_id?: string
  /**
   * Service provider identifier
   * @type {string}
   * @memberof ConnectionEvent1
   */
  service_id?: string
  /**
   * The service provider's ID of the entity that triggered this event
   * @type {string}
   * @memberof ConnectionEvent1
   */
  entity_id?: string
  /**
   * The type entity that triggered this event
   * @type {string}
   * @memberof ConnectionEvent1
   */
  entity_type?: string
  /**
   *
   * @type {ConnectionEvent1Entity}
   * @memberof ConnectionEvent1
   */
  entity?: ConnectionEvent1Entity
  /**
   *
   * @type {EventType4}
   * @memberof ConnectionEvent1
   */
  event_type?: EventType4
  /**
   * The current count this request event has been attempted
   * @type {number}
   * @memberof ConnectionEvent1
   */
  execution_attempt?: number
  /**
   * ISO Datetime for when the original event occurred
   * @type {string}
   * @memberof ConnectionEvent1
   */
  occured_at?: string
}

export function ConnectionEvent1FromJSON(json: any): ConnectionEvent1 {
  return ConnectionEvent1FromJSONTyped(json, false)
}

export function ConnectionEvent1FromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ConnectionEvent1 {
  if (json === undefined || json === null) {
    return json
  }
  return {
    event_id: !exists(json, 'event_id') ? undefined : json['event_id'],
    service_id: !exists(json, 'service_id') ? undefined : json['service_id'],
    entity_id: !exists(json, 'entity_id') ? undefined : json['entity_id'],
    entity_type: !exists(json, 'entity_type') ? undefined : json['entity_type'],
    entity: !exists(json, 'entity') ? undefined : ConnectionEvent1EntityFromJSON(json['entity']),
    event_type: !exists(json, 'event_type') ? undefined : EventType4FromJSON(json['event_type']),
    execution_attempt: !exists(json, 'execution_attempt') ? undefined : json['execution_attempt'],
    occured_at: !exists(json, 'occured_at') ? undefined : json['occured_at']
  }
}

export function ConnectionEvent1ToJSON(value?: ConnectionEvent1 | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    event_id: value.event_id,
    service_id: value.service_id,
    entity_id: value.entity_id,
    entity_type: value.entity_type,
    entity: ConnectionEvent1EntityToJSON(value.entity),
    event_type: EventType4ToJSON(value.event_type),
    execution_attempt: value.execution_attempt,
    occured_at: value.occured_at
  }
}
