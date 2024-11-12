/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.8.1
 * Contact: support@apideck.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { ApiResources, ApiResourcesFromJSON, ApiResourcesToJSON } from './ApiResources'
import { ApiStatus, ApiStatusFromJSON, ApiStatusToJSON } from './ApiStatus'

/**
 *
 * @export
 * @interface Api
 */
export interface Api {
  /**
   * ID of the API.
   * @type {string}
   * @memberof Api
   */
  readonly id?: string
  /**
   * Indicates whether the API is a Unified API. If unified_api is false, the API is a Platform API.
   * @type {string}
   * @memberof Api
   */
  type?: ApiType
  /**
   * Name of the API.
   * @type {string}
   * @memberof Api
   */
  name?: string
  /**
   * Description of the API.
   * @type {string}
   * @memberof Api
   */
  description?: string | null
  /**
   *
   * @type {ApiStatus}
   * @memberof Api
   */
  status?: ApiStatus
  /**
   * Link to the latest OpenAPI specification of the API.
   * @type {string}
   * @memberof Api
   */
  spec_url?: string
  /**
   * Link to the API reference of the API.
   * @type {string}
   * @memberof Api
   */
  api_reference_url?: string
  /**
   * ID of the Postman collection of the API.
   * @type {string}
   * @memberof Api
   */
  postman_collection_id?: string | null
  /**
   * List of categories the API belongs to.
   * @type {Array<string>}
   * @memberof Api
   */
  categories?: Array<string>
  /**
   * List of resources supported in this API.
   * @type {Array<ApiResources>}
   * @memberof Api
   */
  resources?: Array<ApiResources>
  /**
   * List of event types this API supports.
   * @type {Array<string>}
   * @memberof Api
   */
  events?: Array<string>
}

/**
 * @export
 * @enum {string}
 */
export enum ApiType {
  platform = 'platform',
  unified = 'unified'
}

export function ApiFromJSON(json: any): Api {
  return ApiFromJSONTyped(json, false)
}

export function ApiFromJSONTyped(json: any, ignoreDiscriminator: boolean): Api {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    type: !exists(json, 'type') ? undefined : json['type'],
    name: !exists(json, 'name') ? undefined : json['name'],
    description: !exists(json, 'description') ? undefined : json['description'],
    status: !exists(json, 'status') ? undefined : ApiStatusFromJSON(json['status']),
    spec_url: !exists(json, 'spec_url') ? undefined : json['spec_url'],
    api_reference_url: !exists(json, 'api_reference_url') ? undefined : json['api_reference_url'],
    postman_collection_id: !exists(json, 'postman_collection_id')
      ? undefined
      : json['postman_collection_id'],
    categories: !exists(json, 'categories') ? undefined : json['categories'],
    resources: !exists(json, 'resources')
      ? undefined
      : (json['resources'] as Array<any>).map(ApiResourcesFromJSON),
    events: !exists(json, 'events') ? undefined : json['events']
  }
}

export function ApiToJSON(value?: Api | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    type: value.type,
    name: value.name,
    description: value.description,
    status: ApiStatusToJSON(value.status),
    spec_url: value.spec_url,
    api_reference_url: value.api_reference_url,
    postman_collection_id: value.postman_collection_id,
    categories: value.categories,
    resources:
      value.resources === undefined
        ? undefined
        : (value.resources as Array<any>).map(ApiResourcesToJSON),
    events: value.events
  }
}
