/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.54.0
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
   * @type {number}
   * @memberof Pipeline
   */
  display_order?: number
  /**
   *
   * @type {Array<PipelineStages>}
   * @memberof Pipeline
   */
  stages?: Array<PipelineStages>
  /**
   *
   * @type {Date}
   * @memberof Pipeline
   */
  readonly updated_at?: Date
  /**
   *
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
    display_order: !exists(json, 'display_order') ? undefined : json['display_order'],
    stages: !exists(json, 'stages')
      ? undefined
      : (json['stages'] as Array<any>).map(PipelineStagesFromJSON),
    updated_at: !exists(json, 'updated_at') ? undefined : new Date(json['updated_at']),
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
    display_order: value.display_order,
    stages:
      value.stages === undefined
        ? undefined
        : (value.stages as Array<any>).map(PipelineStagesToJSON)
  }
}
