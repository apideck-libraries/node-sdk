/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.9.0
 * Contact: support@apideck.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
/**
 *
 * @export
 * @interface ProfitAndLossRecord
 */
export interface ProfitAndLossRecord {
  /**
   *
   * @type {string}
   * @memberof ProfitAndLossRecord
   */
  type: string
  /**
   *
   * @type {string}
   * @memberof ProfitAndLossRecord
   */
  id?: string | null
  /**
   *
   * @type {string}
   * @memberof ProfitAndLossRecord
   */
  title?: string | null
  /**
   *
   * @type {number}
   * @memberof ProfitAndLossRecord
   */
  value?: number | null
}

export function ProfitAndLossRecordFromJSON(json: any): ProfitAndLossRecord {
  return ProfitAndLossRecordFromJSONTyped(json, false)
}

export function ProfitAndLossRecordFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ProfitAndLossRecord {
  if (json === undefined || json === null) {
    return json
  }
  return {
    type: json['type'],
    id: !exists(json, 'id') ? undefined : json['id'],
    title: !exists(json, 'title') ? undefined : json['title'],
    value: !exists(json, 'value') ? undefined : json['value']
  }
}

export function ProfitAndLossRecordToJSON(value?: ProfitAndLossRecord | null): any {
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
    value: value.value
  }
}
