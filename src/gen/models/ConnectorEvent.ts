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
/**
 * Unify event that is supported on the connector. Events are delivered via Webhooks.
 * @export
 * @interface ConnectorEvent
 */
export interface ConnectorEvent {
  /**
   * Unify event type
   * @type {string}
   * @memberof ConnectorEvent
   */
  event_type?: string
  /**
   * Unify event source
   * @type {string}
   * @memberof ConnectorEvent
   */
  event_source?: ConnectorEventEventSource
  /**
   * Downstream event type
   * @type {string}
   * @memberof ConnectorEvent
   */
  downstream_event_type?: string
  /**
   *
   * @type {Array<string>}
   * @memberof ConnectorEvent
   */
  resources?: Array<string>
  /**
   * Unify entity type
   * @type {string}
   * @memberof ConnectorEvent
   */
  entity_type?: string
}

/**
 * @export
 * @enum {string}
 */
export enum ConnectorEventEventSource {
  native = 'native',
  virtual = 'virtual'
}

export function ConnectorEventFromJSON(json: any): ConnectorEvent {
  return ConnectorEventFromJSONTyped(json, false)
}

export function ConnectorEventFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ConnectorEvent {
  if (json === undefined || json === null) {
    return json
  }
  return {
    event_type: !exists(json, 'event_type') ? undefined : json['event_type'],
    event_source: !exists(json, 'event_source') ? undefined : json['event_source'],
    downstream_event_type: !exists(json, 'downstream_event_type')
      ? undefined
      : json['downstream_event_type'],
    resources: !exists(json, 'resources') ? undefined : json['resources'],
    entity_type: !exists(json, 'entity_type') ? undefined : json['entity_type']
  }
}

export function ConnectorEventToJSON(value?: ConnectorEvent | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    event_type: value.event_type,
    event_source: value.event_source,
    downstream_event_type: value.downstream_event_type,
    resources: value.resources,
    entity_type: value.entity_type
  }
}
