/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 5.4.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

// Override template imports only to fix circulr dependencies generated by default template
// https://github.com/OpenAPITools/openapi-generator/issues/6140

import { exists } from '../runtime'
/**
 *
 * @export
 * @interface PipelineStages
 */
export interface PipelineStages {
  /**
   *
   * @type {string}
   * @memberof PipelineStages
   */
  readonly id?: string
  /**
   *
   * @type {string}
   * @memberof PipelineStages
   */
  name?: string
  /**
   *
   * @type {string}
   * @memberof PipelineStages
   */
  value?: string
  /**
   *
   * @type {number}
   * @memberof PipelineStages
   */
  display_order?: number
}

export function PipelineStagesFromJSON(json: any): PipelineStages {
  return PipelineStagesFromJSONTyped(json, false)
}

export function PipelineStagesFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): PipelineStages {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    name: !exists(json, 'name') ? undefined : json['name'],
    value: !exists(json, 'value') ? undefined : json['value'],
    display_order: !exists(json, 'display_order') ? undefined : json['display_order']
  }
}

export function PipelineStagesToJSON(value?: PipelineStages | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    name: value.name,
    value: value.value,
    display_order: value.display_order
  }
}
