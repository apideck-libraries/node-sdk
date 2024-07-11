/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.6.3
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
 * @interface PipelineStages
 */
export interface PipelineStages {
  /**
   * The unique identifier of the Pipeline Stage.
   * @type {string}
   * @memberof PipelineStages
   */
  readonly id?: string | null
  /**
   * The name of the Pipeline Stage.
   * @type {string}
   * @memberof PipelineStages
   */
  name?: string | null
  /**
   * The value of the Pipeline Stage.
   * @type {string}
   * @memberof PipelineStages
   */
  value?: string | null
  /**
   * The expected probability of winning an Opportunity in this Pipeline Stage. Valid values are [0-100].
   * @type {number}
   * @memberof PipelineStages
   */
  win_probability?: number | null
  /**
   * The order in which the Pipeline Stage is displayed in the UI.
   * @type {number}
   * @memberof PipelineStages
   */
  display_order?: number | null
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
    win_probability: !exists(json, 'win_probability') ? undefined : json['win_probability'],
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
    win_probability: value.win_probability,
    display_order: value.display_order
  }
}
