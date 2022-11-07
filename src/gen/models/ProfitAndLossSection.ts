/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.78.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import {
  ProfitAndLossRecords,
  ProfitAndLossRecordsFromJSON,
  ProfitAndLossRecordsToJSON
} from './ProfitAndLossRecords'

/**
 *
 * @export
 * @interface ProfitAndLossSection
 */
export interface ProfitAndLossSection {
  /**
   *
   * @type {string}
   * @memberof ProfitAndLossSection
   */
  type: string
  /**
   *
   * @type {string}
   * @memberof ProfitAndLossSection
   */
  id?: string | null
  /**
   *
   * @type {string}
   * @memberof ProfitAndLossSection
   */
  title?: string | null
  /**
   *
   * @type {number}
   * @memberof ProfitAndLossSection
   */
  total?: number | null
  /**
   *
   * @type {ProfitAndLossRecords}
   * @memberof ProfitAndLossSection
   */
  records?: ProfitAndLossRecords | null
}

export function ProfitAndLossSectionFromJSON(json: any): ProfitAndLossSection {
  return ProfitAndLossSectionFromJSONTyped(json, false)
}

export function ProfitAndLossSectionFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ProfitAndLossSection {
  if (json === undefined || json === null) {
    return json
  }
  return {
    type: json['type'],
    id: !exists(json, 'id') ? undefined : json['id'],
    title: !exists(json, 'title') ? undefined : json['title'],
    total: !exists(json, 'total') ? undefined : json['total'],
    records: !exists(json, 'records') ? undefined : ProfitAndLossRecordsFromJSON(json['records'])
  }
}

export function ProfitAndLossSectionToJSON(value?: ProfitAndLossSection | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    type: value.type,
    id: value.id,
    title: value.title,
    total: value.total,
    records: ProfitAndLossRecordsToJSON(value.records)
  }
}
