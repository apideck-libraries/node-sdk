/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.5.0
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
 * @interface ApiResourceCoverage
 */
export interface ApiResourceCoverage {
  /**
   * ID of the resource, typically a lowercased version of name.
   * @type {string}
   * @memberof ApiResourceCoverage
   */
  id?: string
  /**
   * Name of the resource (plural)
   * @type {string}
   * @memberof ApiResourceCoverage
   */
  name?: string
  /**
   *
   * @type {ResourceStatus}
   * @memberof ApiResourceCoverage
   */
  status?: ResourceStatus
  /**
   *
   * @type {Array<any>}
   * @memberof ApiResourceCoverage
   */
  coverage?: Array<any>
}

export function ApiResourceCoverageFromJSON(json: any): ApiResourceCoverage {
  return ApiResourceCoverageFromJSONTyped(json, false)
}

export function ApiResourceCoverageFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ApiResourceCoverage {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    name: !exists(json, 'name') ? undefined : json['name'],
    status: !exists(json, 'status') ? undefined : ResourceStatusFromJSON(json['status']),
    coverage: !exists(json, 'coverage') ? undefined : json['coverage']
  }
}

export function ApiResourceCoverageToJSON(value?: ApiResourceCoverage | null): any {
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
    coverage: value.coverage
  }
}
