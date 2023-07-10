/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 9.7.6
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
 * @interface PassThroughQuery
 */
export interface PassThroughQuery {
  [key: string]: unknown | any
  /**
   * All passthrough query parameters are passed along to the connector as is (?pass_through[search]=leads becomes ?search=leads)
   * @type {string}
   * @memberof PassThroughQuery
   */
  example_downstream_property?: string
}

export function PassThroughQueryFromJSON(json: any): PassThroughQuery {
  return PassThroughQueryFromJSONTyped(json, false)
}

export function PassThroughQueryFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): PassThroughQuery {
  if (json === undefined || json === null) {
    return json
  }
  return {
    ...json,
    example_downstream_property: !exists(json, 'example_downstream_property')
      ? undefined
      : json['example_downstream_property']
  }
}

export function PassThroughQueryToJSON(value?: PassThroughQuery | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    ...value,
    example_downstream_property: value.example_downstream_property
  }
}
