/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.10.0
 * Contact: support@apideck.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * Frequency of employee compensation.
 * @export
 * @enum {string}
 */
export enum PaymentFrequency {
  weekly = 'weekly',
  biweekly = 'biweekly',
  monthly = 'monthly',
  pro_rata = 'pro-rata',
  other = 'other'
}

export function PaymentFrequencyFromJSON(json: any): PaymentFrequency {
  return PaymentFrequencyFromJSONTyped(json, false)
}

export function PaymentFrequencyFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): PaymentFrequency {
  return json as PaymentFrequency
}

export function PaymentFrequencyToJSON(value?: PaymentFrequency | null): any {
  return value as any
}
