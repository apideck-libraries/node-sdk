/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.13.0
 * Contact: support@apideck.com
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
import {
  ProfitAndLossType,
  ProfitAndLossTypeFromJSON,
  ProfitAndLossTypeToJSON
} from './ProfitAndLossType'

/**
 * The cost of goods sold accounts
 * @export
 * @interface CostOfGoodsSold
 */
export interface CostOfGoodsSold {
  /**
   * The aggregated total of all accounts within this category.
   * @type {number}
   * @memberof CostOfGoodsSold
   */
  total: number | null
  /**
   *
   * @type {ProfitAndLossRecords}
   * @memberof CostOfGoodsSold
   */
  records: ProfitAndLossRecords | null
  /**
   * A unique identifier for an object.
   * @type {string}
   * @memberof CostOfGoodsSold
   */
  readonly id?: string
  /**
   * The account code of the account
   * @type {string}
   * @memberof CostOfGoodsSold
   */
  readonly code?: string
  /**
   * The name of the account.
   * @type {string}
   * @memberof CostOfGoodsSold
   */
  readonly title?: string
  /**
   *
   * @type {ProfitAndLossType}
   * @memberof CostOfGoodsSold
   */
  type?: ProfitAndLossType | null
}

export function CostOfGoodsSoldFromJSON(json: any): CostOfGoodsSold {
  return CostOfGoodsSoldFromJSONTyped(json, false)
}

export function CostOfGoodsSoldFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): CostOfGoodsSold {
  if (json === undefined || json === null) {
    return json
  }
  return {
    total: json['total'],
    records: ProfitAndLossRecordsFromJSON(json['records']),
    id: !exists(json, 'id') ? undefined : json['id'],
    code: !exists(json, 'code') ? undefined : json['code'],
    title: !exists(json, 'title') ? undefined : json['title'],
    type: !exists(json, 'type') ? undefined : ProfitAndLossTypeFromJSON(json['type'])
  }
}

export function CostOfGoodsSoldToJSON(value?: CostOfGoodsSold | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    total: value.total,
    records: ProfitAndLossRecordsToJSON(value.records),
    type: ProfitAndLossTypeToJSON(value.type)
  }
}
