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

/**
 * The type of profit and loss
 * @export
 * @enum {string}
 */
export enum ProfitAndLossType {
  Section = 'Section',
  Record = 'Record'
}

export function ProfitAndLossTypeFromJSON(json: any): ProfitAndLossType {
  return ProfitAndLossTypeFromJSONTyped(json, false)
}

export function ProfitAndLossTypeFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ProfitAndLossType {
  return json as ProfitAndLossType
}

export function ProfitAndLossTypeToJSON(value?: ProfitAndLossType | null): any {
  return value as any
}
