/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.3.2
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import {
  ConnectorResourceSupportedFields,
  ConnectorResourceSupportedFieldsFromJSON,
  ConnectorResourceSupportedFieldsToJSON
} from './ConnectorResourceSupportedFields'

/**
 *
 * @export
 * @interface ConnectorResource
 */
export interface ConnectorResource {
  /**
   * ID of the resource, typically a lowercased version of name.
   * @type {string}
   * @memberof ConnectorResource
   */
  id?: string
  /**
   * Name of the resource (plural)
   * @type {string}
   * @memberof ConnectorResource
   */
  name?: string
  /**
   * ID of the resource in the Connector's API (downstream)
   * @type {string}
   * @memberof ConnectorResource
   */
  downstream_id?: string
  /**
   * Name of the resource in the Connector's API (downstream)
   * @type {string}
   * @memberof ConnectorResource
   */
  downstream_name?: string
  /**
   * Status of the resource. Resources with status live or beta are available.
   * @type {string}
   * @memberof ConnectorResource
   */
  status?: ConnectorResourceStatus
  /**
   * Indicates if pagination (cursor and limit parameters) is supported on the list endpoint of the resource.
   * @type {boolean}
   * @memberof ConnectorResource
   */
  pagination_supported?: boolean
  /**
   * List of supported operations on the resource.
   * @type {Array<string>}
   * @memberof ConnectorResource
   */
  supported_operations?: Array<string>
  /**
   * Supported filters on the list endpoint of the resource.
   * @type {Array<string>}
   * @memberof ConnectorResource
   */
  supported_filters?: Array<string>
  /**
   * Supported sorting properties on the list endpoint of the resource.
   * @type {Array<string>}
   * @memberof ConnectorResource
   */
  supported_sort_by?: Array<string>
  /**
   * Supported fields.
   * @type {Array<ConnectorResourceSupportedFields>}
   * @memberof ConnectorResource
   */
  supported_fields?: Array<ConnectorResourceSupportedFields>
}

/**
 * @export
 * @enum {string}
 */
export enum ConnectorResourceStatus {
  live = 'live',
  beta = 'beta',
  development = 'development',
  considering = 'considering'
}

export function ConnectorResourceFromJSON(json: any): ConnectorResource {
  return ConnectorResourceFromJSONTyped(json, false)
}

export function ConnectorResourceFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ConnectorResource {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    name: !exists(json, 'name') ? undefined : json['name'],
    downstream_id: !exists(json, 'downstream_id') ? undefined : json['downstream_id'],
    downstream_name: !exists(json, 'downstream_name') ? undefined : json['downstream_name'],
    status: !exists(json, 'status') ? undefined : json['status'],
    pagination_supported: !exists(json, 'pagination_supported')
      ? undefined
      : json['pagination_supported'],
    supported_operations: !exists(json, 'supported_operations')
      ? undefined
      : json['supported_operations'],
    supported_filters: !exists(json, 'supported_filters') ? undefined : json['supported_filters'],
    supported_sort_by: !exists(json, 'supported_sort_by') ? undefined : json['supported_sort_by'],
    supported_fields: !exists(json, 'supported_fields')
      ? undefined
      : (json['supported_fields'] as Array<any>).map(ConnectorResourceSupportedFieldsFromJSON)
  }
}

export function ConnectorResourceToJSON(value?: ConnectorResource | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    id: value.id,
    name: value.name,
    downstream_id: value.downstream_id,
    downstream_name: value.downstream_name,
    status: value.status,
    pagination_supported: value.pagination_supported,
    supported_operations: value.supported_operations,
    supported_filters: value.supported_filters,
    supported_sort_by: value.supported_sort_by,
    supported_fields:
      value.supported_fields === undefined
        ? undefined
        : (value.supported_fields as Array<any>).map(ConnectorResourceSupportedFieldsToJSON)
  }
}