/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.11.4
 * Contact: support@apideck.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ProfitAndLossRecord } from './ProfitAndLossRecord'
import { ProfitAndLossSection } from './ProfitAndLossSection'

/**
 *
 * @export
 * @interface ProfitAndLossRecords
 */
export interface ProfitAndLossRecords extends Array<ProfitAndLossSection | ProfitAndLossRecord> {}

export function ProfitAndLossRecordsFromJSON(json: any): ProfitAndLossRecords {
  return ProfitAndLossRecordsFromJSONTyped(json, false)
}

export function ProfitAndLossRecordsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ProfitAndLossRecords {
  return json
}

export function ProfitAndLossRecordsToJSON(value?: ProfitAndLossRecords | null): any {
  return value
}
