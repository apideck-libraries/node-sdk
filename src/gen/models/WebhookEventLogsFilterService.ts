/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.38.0
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
 * @interface WebhookEventLogsFilterService
 */
export interface WebhookEventLogsFilterService {
  /**
   *
   * @type {string}
   * @memberof WebhookEventLogsFilterService
   */
  id?: string
}

export function WebhookEventLogsFilterServiceFromJSON(json: any): WebhookEventLogsFilterService {
  return WebhookEventLogsFilterServiceFromJSONTyped(json, false)
}

export function WebhookEventLogsFilterServiceFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): WebhookEventLogsFilterService {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id']
  }
}

export function WebhookEventLogsFilterServiceToJSON(
  value?: WebhookEventLogsFilterService | null
): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    id: value.id
  }
}
