/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.84.0
 *
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
   * Downstream event type
   * @type {string}
   * @memberof ConnectorEvent
   */
  downstream_event_type?: string
  /**
   * ID of the resource, typically a lowercased version of name.
   * @type {string}
   * @memberof ConnectorEvent
   */
  resource?: string
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
    downstream_event_type: !exists(json, 'downstream_event_type')
      ? undefined
      : json['downstream_event_type'],
    resource: !exists(json, 'resource') ? undefined : json['resource']
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
    downstream_event_type: value.downstream_event_type,
    resource: value.resource
  }
}
