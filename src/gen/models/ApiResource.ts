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
import {
  ApiResourceLinkedResources,
  ApiResourceLinkedResourcesFromJSON,
  ApiResourceLinkedResourcesToJSON
} from './ApiResourceLinkedResources'
import { ResourceStatus, ResourceStatusFromJSON, ResourceStatusToJSON } from './ResourceStatus'

/**
 *
 * @export
 * @interface ApiResource
 */
export interface ApiResource {
  /**
   * ID of the resource, typically a lowercased version of name.
   * @type {string}
   * @memberof ApiResource
   */
  id?: string
  /**
   * Name of the resource (plural)
   * @type {string}
   * @memberof ApiResource
   */
  name?: string
  /**
   *
   * @type {ResourceStatus}
   * @memberof ApiResource
   */
  status?: ResourceStatus
  /**
   * List of linked resources.
   * @type {Array<ApiResourceLinkedResources>}
   * @memberof ApiResource
   */
  linked_resources?: Array<ApiResourceLinkedResources>
  /**
   * JSON Schema of the resource in our Unified API
   * @type {object}
   * @memberof ApiResource
   */
  schema?: object
}

export function ApiResourceFromJSON(json: any): ApiResource {
  return ApiResourceFromJSONTyped(json, false)
}

export function ApiResourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiResource {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    name: !exists(json, 'name') ? undefined : json['name'],
    status: !exists(json, 'status') ? undefined : ResourceStatusFromJSON(json['status']),
    linked_resources: !exists(json, 'linked_resources')
      ? undefined
      : (json['linked_resources'] as Array<any>).map(ApiResourceLinkedResourcesFromJSON),
    schema: !exists(json, 'schema') ? undefined : json['schema']
  }
}

export function ApiResourceToJSON(value?: ApiResource | null): any {
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
    linked_resources:
      value.linked_resources === undefined
        ? undefined
        : (value.linked_resources as Array<any>).map(ApiResourceLinkedResourcesToJSON),
    schema: value.schema
  }
}
