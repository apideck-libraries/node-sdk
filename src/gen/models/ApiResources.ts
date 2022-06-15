/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.32.3
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
 * @interface ApiResources
 */
export interface ApiResources {
  /**
   * ID of the resource, typically a lowercased version of its name.
   * @type {string}
   * @memberof ApiResources
   */
  id?: string
  /**
   * Name of the resource (plural)
   * @type {string}
   * @memberof ApiResources
   */
  name?: string
  /**
   *
   * @type {ResourceStatus}
   * @memberof ApiResources
   */
  status?: ResourceStatus
  /**
   * Exclude from mapping coverage
   * @type {boolean}
   * @memberof ApiResources
   */
  excluded_from_coverage?: boolean
}

export function ApiResourcesFromJSON(json: any): ApiResources {
  return ApiResourcesFromJSONTyped(json, false)
}

export function ApiResourcesFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiResources {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    name: !exists(json, 'name') ? undefined : json['name'],
    status: !exists(json, 'status') ? undefined : ResourceStatusFromJSON(json['status']),
    excluded_from_coverage: !exists(json, 'excluded_from_coverage')
      ? undefined
      : json['excluded_from_coverage']
  }
}

export function ApiResourcesToJSON(value?: ApiResources | null): any {
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
    excluded_from_coverage: value.excluded_from_coverage
  }
}
