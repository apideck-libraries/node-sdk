/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 9.7.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import {
  PaginationCoverage,
  PaginationCoverageFromJSON,
  PaginationCoverageToJSON
} from './PaginationCoverage'
import { ResourceStatus, ResourceStatusFromJSON, ResourceStatusToJSON } from './ResourceStatus'
import {
  SupportedProperty,
  SupportedPropertyFromJSON,
  SupportedPropertyToJSON
} from './SupportedProperty'

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
   *
   * @type {ResourceStatus}
   * @memberof ConnectorResource
   */
  status?: ResourceStatus
  /**
   * Indicates if pagination (cursor and limit parameters) is supported on the list endpoint of the resource.
   * @type {boolean}
   * @memberof ConnectorResource
   */
  pagination_supported?: boolean
  /**
   *
   * @type {PaginationCoverage}
   * @memberof ConnectorResource
   */
  pagination?: PaginationCoverage
  /**
   * Indicates if custom fields are supported on this resource.
   * @type {boolean}
   * @memberof ConnectorResource
   */
  custom_fields_supported?: boolean
  /**
   * List of supported operations on the resource.
   * @type {Array<string>}
   * @memberof ConnectorResource
   */
  supported_operations?: Array<string>
  /**
   * List of operations that are not supported on the downstream.
   * @type {Array<string>}
   * @memberof ConnectorResource
   */
  downstream_unsupported_operations?: Array<string>
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
   * Supported fields on the detail endpoint.
   * @type {Array<SupportedProperty>}
   * @memberof ConnectorResource
   */
  supported_fields?: Array<SupportedProperty>
  /**
   * Supported fields on the list endpoint.
   * @type {Array<SupportedProperty>}
   * @memberof ConnectorResource
   */
  supported_list_fields?: Array<SupportedProperty>
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
    status: !exists(json, 'status') ? undefined : ResourceStatusFromJSON(json['status']),
    pagination_supported: !exists(json, 'pagination_supported')
      ? undefined
      : json['pagination_supported'],
    pagination: !exists(json, 'pagination')
      ? undefined
      : PaginationCoverageFromJSON(json['pagination']),
    custom_fields_supported: !exists(json, 'custom_fields_supported')
      ? undefined
      : json['custom_fields_supported'],
    supported_operations: !exists(json, 'supported_operations')
      ? undefined
      : json['supported_operations'],
    downstream_unsupported_operations: !exists(json, 'downstream_unsupported_operations')
      ? undefined
      : json['downstream_unsupported_operations'],
    supported_filters: !exists(json, 'supported_filters') ? undefined : json['supported_filters'],
    supported_sort_by: !exists(json, 'supported_sort_by') ? undefined : json['supported_sort_by'],
    supported_fields: !exists(json, 'supported_fields')
      ? undefined
      : (json['supported_fields'] as Array<any>).map(SupportedPropertyFromJSON),
    supported_list_fields: !exists(json, 'supported_list_fields')
      ? undefined
      : (json['supported_list_fields'] as Array<any>).map(SupportedPropertyFromJSON)
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
    status: ResourceStatusToJSON(value.status),
    pagination_supported: value.pagination_supported,
    pagination: PaginationCoverageToJSON(value.pagination),
    custom_fields_supported: value.custom_fields_supported,
    supported_operations: value.supported_operations,
    downstream_unsupported_operations: value.downstream_unsupported_operations,
    supported_filters: value.supported_filters,
    supported_sort_by: value.supported_sort_by,
    supported_fields:
      value.supported_fields === undefined
        ? undefined
        : (value.supported_fields as Array<any>).map(SupportedPropertyToJSON),
    supported_list_fields:
      value.supported_list_fields === undefined
        ? undefined
        : (value.supported_list_fields as Array<any>).map(SupportedPropertyToJSON)
  }
}
