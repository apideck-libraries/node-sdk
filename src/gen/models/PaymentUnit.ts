/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 9.1.5
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * Unit of measurement for employee compensation.
 * @export
 * @enum {string}
 */
export enum PaymentUnit {
  hour = 'hour',
  week = 'week',
  month = 'month',
  year = 'year',
  paycheck = 'paycheck'
}

export function PaymentUnitFromJSON(json: any): PaymentUnit {
  return PaymentUnitFromJSONTyped(json, false)
}

export function PaymentUnitFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentUnit {
  return json as PaymentUnit
}

export function PaymentUnitToJSON(value?: PaymentUnit | null): any {
  return value as any
}
