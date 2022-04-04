/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.18.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { ResourceStatus, ResourceStatusFromJSON, ResourceStatusToJSON } from './ResourceStatus'

/**
 *
 * @export
 * @interface ConnectorSupportedResources
 */
export interface ConnectorSupportedResources {
  /**
   * ID of the resource, typically a lowercased version of name.
   * @type {string}
   * @memberof ConnectorSupportedResources
   */
  id?: string
  /**
   * Name of the resource (plural)
   * @type {string}
   * @memberof ConnectorSupportedResources
   */
  name?: string
  /**
   *
   * @type {ResourceStatus}
   * @memberof ConnectorSupportedResources
   */
  status?: ResourceStatus
  /**
   * ID of the resource in the Connector's API (downstream)
   * @type {string}
   * @memberof ConnectorSupportedResources
   */
  downstream_id?: string
  /**
   * Name of the resource in the Connector's API (downstream)
   * @type {string}
   * @memberof ConnectorSupportedResources
   */
  downstream_name?: string
}

export function ConnectorSupportedResourcesFromJSON(json: any): ConnectorSupportedResources {
  return ConnectorSupportedResourcesFromJSONTyped(json, false)
}

export function ConnectorSupportedResourcesFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ConnectorSupportedResources {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    name: !exists(json, 'name') ? undefined : json['name'],
    status: !exists(json, 'status') ? undefined : ResourceStatusFromJSON(json['status']),
    downstream_id: !exists(json, 'downstream_id') ? undefined : json['downstream_id'],
    downstream_name: !exists(json, 'downstream_name') ? undefined : json['downstream_name']
  }
}

export function ConnectorSupportedResourcesToJSON(value?: ConnectorSupportedResources | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    id: value.id,
    name: value.name,
    status: ResourceStatusToJSON(value.status),
    downstream_id: value.downstream_id,
    downstream_name: value.downstream_name
  }
}
