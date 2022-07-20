/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.35.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
/**
 *
 * @export
 * @interface ConnectorSupportedEvents
 */
export interface ConnectorSupportedEvents {
  /**
   *
   * @type {string}
   * @memberof ConnectorSupportedEvents
   */
  event_type?: string
  /**
   *
   * @type {string}
   * @memberof ConnectorSupportedEvents
   */
  downstream_event_type?: string
  /**
   * ID of the resource, typically a lowercased version of name.
   * @type {string}
   * @memberof ConnectorSupportedEvents
   */
  resource_id?: string
}

export function ConnectorSupportedEventsFromJSON(json: any): ConnectorSupportedEvents {
  return ConnectorSupportedEventsFromJSONTyped(json, false)
}

export function ConnectorSupportedEventsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ConnectorSupportedEvents {
  if (json === undefined || json === null) {
    return json
  }
  return {
    event_type: !exists(json, 'event_type') ? undefined : json['event_type'],
    downstream_event_type: !exists(json, 'downstream_event_type')
      ? undefined
      : json['downstream_event_type'],
    resource_id: !exists(json, 'resource_id') ? undefined : json['resource_id']
  }
}

export function ConnectorSupportedEventsToJSON(value?: ConnectorSupportedEvents | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    event_type: value.event_type,
    downstream_event_type: value.downstream_event_type,
    resource_id: value.resource_id
  }
}
