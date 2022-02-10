/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.11.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { ConnectorStatus, ConnectorStatusFromJSON, ConnectorStatusToJSON } from './ConnectorStatus'
import { UnifiedApiId, UnifiedApiIdFromJSON, UnifiedApiIdToJSON } from './UnifiedApiId'

/**
 *
 * @export
 * @interface ConnectorsFilter
 */
export interface ConnectorsFilter {
  /**
   *
   * @type {UnifiedApiId}
   * @memberof ConnectorsFilter
   */
  unified_api?: UnifiedApiId
  /**
   *
   * @type {ConnectorStatus}
   * @memberof ConnectorsFilter
   */
  status?: ConnectorStatus
}

export function ConnectorsFilterFromJSON(json: any): ConnectorsFilter {
  return ConnectorsFilterFromJSONTyped(json, false)
}

export function ConnectorsFilterFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ConnectorsFilter {
  if (json === undefined || json === null) {
    return json
  }
  return {
    unified_api: !exists(json, 'unified_api')
      ? undefined
      : UnifiedApiIdFromJSON(json['unified_api']),
    status: !exists(json, 'status') ? undefined : ConnectorStatusFromJSON(json['status'])
  }
}

export function ConnectorsFilterToJSON(value?: ConnectorsFilter | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    unified_api: UnifiedApiIdToJSON(value.unified_api),
    status: ConnectorStatusToJSON(value.status)
  }
}
