/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.8.0
 * Contact: support@apideck.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
/**
 *
 * @export
 * @interface VirtualWebhooksResources
 */
export interface VirtualWebhooksResources {
  /**
   *
   * @type {Array<string>}
   * @memberof VirtualWebhooksResources
   */
  events?: Array<string>
}

export function VirtualWebhooksResourcesFromJSON(json: any): VirtualWebhooksResources {
  return VirtualWebhooksResourcesFromJSONTyped(json, false)
}

export function VirtualWebhooksResourcesFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): VirtualWebhooksResources {
  if (json === undefined || json === null) {
    return json
  }
  return {
    events: !exists(json, 'events') ? undefined : json['events']
  }
}

export function VirtualWebhooksResourcesToJSON(value?: VirtualWebhooksResources | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    events: value.events
  }
}
