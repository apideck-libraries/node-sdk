/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.3.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
/**
 * When a connector has schema_support, a call can be made to retrieve a json schema that describes a downstream resource.
 * @export
 * @interface SchemaSupport
 */
export interface SchemaSupport {
  /**
   * Can a resource schema be retrieved for this connector?
   * @type {boolean}
   * @memberof SchemaSupport
   */
  supported?: boolean
}

export function SchemaSupportFromJSON(json: any): SchemaSupport {
  return SchemaSupportFromJSONTyped(json, false)
}

export function SchemaSupportFromJSONTyped(json: any, ignoreDiscriminator: boolean): SchemaSupport {
  if (json === undefined || json === null) {
    return json
  }
  return {
    supported: !exists(json, 'supported') ? undefined : json['supported']
  }
}

export function SchemaSupportToJSON(value?: SchemaSupport | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    supported: value.supported
  }
}
