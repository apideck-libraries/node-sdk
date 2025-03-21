/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.13.0
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
 * @interface LogsFilter
 */
export interface LogsFilter {
  /**
   *
   * @type {string}
   * @memberof LogsFilter
   */
  connector_id?: string | null
  /**
   *
   * @type {number}
   * @memberof LogsFilter
   */
  status_code?: number | null
  /**
   *
   * @type {string}
   * @memberof LogsFilter
   */
  exclude_unified_apis?: string | null
}

export function LogsFilterFromJSON(json: any): LogsFilter {
  return LogsFilterFromJSONTyped(json, false)
}

export function LogsFilterFromJSONTyped(json: any, ignoreDiscriminator: boolean): LogsFilter {
  if (json === undefined || json === null) {
    return json
  }
  return {
    connector_id: !exists(json, 'connector_id') ? undefined : json['connector_id'],
    status_code: !exists(json, 'status_code') ? undefined : json['status_code'],
    exclude_unified_apis: !exists(json, 'exclude_unified_apis')
      ? undefined
      : json['exclude_unified_apis']
  }
}

export function LogsFilterToJSON(value?: LogsFilter | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    connector_id: value.connector_id,
    status_code: value.status_code,
    exclude_unified_apis: value.exclude_unified_apis
  }
}
