/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.85.0
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
 * @interface Passthrough
 */
export interface Passthrough {
  [key: string]: unknown | any
  /**
   * All passthrough query parameters are passed along to the connector as is (?pass_through[search]=leads becomes ?search=leads)
   * @type {string}
   * @memberof Passthrough
   */
  example_downstream_property?: string
}

export function PassthroughFromJSON(json: any): Passthrough {
  return PassthroughFromJSONTyped(json, false)
}

export function PassthroughFromJSONTyped(json: any, ignoreDiscriminator: boolean): Passthrough {
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

export function PassthroughToJSON(value?: Passthrough | null): any {
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
