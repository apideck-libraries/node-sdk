/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 9.2.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { Currency, CurrencyFromJSON, CurrencyToJSON } from './Currency'
import { PipelineStages, PipelineStagesFromJSON, PipelineStagesToJSON } from './PipelineStages'

/**
 *
 * @export
 * @interface Pipeline
 */
export interface Pipeline {
  /**
   *
   * @type {string}
   * @memberof Pipeline
   */
  name: string
  /**
   *
   * @type {string}
   * @memberof Pipeline
   */
  id?: string
  /**
   *
   * @type {Currency}
   * @memberof Pipeline
   */
  currency?: Currency | null
  /**
   *
   * @type {boolean}
   * @memberof Pipeline
   */
  archived?: boolean
  /**
   *
   * @type {boolean}
   * @memberof Pipeline
   */
  active?: boolean
  /**
   *
   * @type {number}
   * @memberof Pipeline
   */
  display_order?: number
  /**
   *
   * @type {boolean}
   * @memberof Pipeline
   */
  win_probability_enabled?: boolean
  /**
   *
   * @type {Array<PipelineStages>}
   * @memberof Pipeline
   */
  stages?: Array<PipelineStages>
  /**
   * The date and time when the object was last updated.
   * @type {Date}
   * @memberof Pipeline
   */
  readonly updated_at?: Date | null
  /**
   * The date and time when the object was created.
   * @type {Date}
   * @memberof Pipeline
   */
  readonly created_at?: Date
}

export function PipelineFromJSON(json: any): Pipeline {
  return PipelineFromJSONTyped(json, false)
}

export function PipelineFromJSONTyped(json: any, ignoreDiscriminator: boolean): Pipeline {
  if (json === undefined || json === null) {
    return json
  }
  return {
    name: json['name'],
    id: !exists(json, 'id') ? undefined : json['id'],
    currency: !exists(json, 'currency') ? undefined : CurrencyFromJSON(json['currency']),
    archived: !exists(json, 'archived') ? undefined : json['archived'],
    active: !exists(json, 'active') ? undefined : json['active'],
    display_order: !exists(json, 'display_order') ? undefined : json['display_order'],
    win_probability_enabled: !exists(json, 'win_probability_enabled')
      ? undefined
      : json['win_probability_enabled'],
    stages: !exists(json, 'stages')
      ? undefined
      : (json['stages'] as Array<any>).map(PipelineStagesFromJSON),
    updated_at: !exists(json, 'updated_at')
      ? undefined
      : json['updated_at'] === null
      ? null
      : new Date(json['updated_at']),
    created_at: !exists(json, 'created_at') ? undefined : new Date(json['created_at'])
  }
}

export function PipelineToJSON(value?: Pipeline | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    name: value.name,
    id: value.id,
    currency: CurrencyToJSON(value.currency),
    archived: value.archived,
    active: value.active,
    display_order: value.display_order,
    win_probability_enabled: value.win_probability_enabled,
    stages:
      value.stages === undefined
        ? undefined
        : (value.stages as Array<any>).map(PipelineStagesToJSON)
  }
}
