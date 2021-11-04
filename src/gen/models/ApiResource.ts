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
   * Status of the resource. Resources with status live or beta are available.
   * @type {string}
   * @memberof ApiResource
   */
  status?: ApiResourceStatus
  /**
   * JSON Schema of the resource in our Unified API
   * @type {object}
   * @memberof ApiResource
   */
  schema?: object
}

/**
 * @export
 * @enum {string}
 */
export enum ApiResourceStatus {
  live = 'live',
  beta = 'beta',
  development = 'development',
  considering = 'considering'
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
    status: !exists(json, 'status') ? undefined : json['status'],
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
    status: value.status,
    schema: value.schema
  }
}