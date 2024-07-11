/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.6.3
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { RequestRate, RequestRateFromJSON, RequestRateToJSON } from './RequestRate'

/**
 * Virtual webhook config for the connector.
 * @export
 * @interface VirtualWebhooks
 */
export interface VirtualWebhooks {
  /**
   *
   * @type {RequestRate}
   * @memberof VirtualWebhooks
   */
  request_rate: RequestRate
  /**
   * The resources that will be requested from downstream.
   * @type {object}
   * @memberof VirtualWebhooks
   */
  resources?: object
}

export function VirtualWebhooksFromJSON(json: any): VirtualWebhooks {
  return VirtualWebhooksFromJSONTyped(json, false)
}

export function VirtualWebhooksFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): VirtualWebhooks {
  if (json === undefined || json === null) {
    return json
  }
  return {
    request_rate: RequestRateFromJSON(json['request_rate']),
    resources: !exists(json, 'resources') ? undefined : json['resources']
  }
}

export function VirtualWebhooksToJSON(value?: VirtualWebhooks | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    request_rate: RequestRateToJSON(value.request_rate),
    resources: value.resources
  }
}
