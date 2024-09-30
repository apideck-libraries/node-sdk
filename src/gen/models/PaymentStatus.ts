/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.7.6
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * Status of payment
 * @export
 * @enum {string}
 */
export enum PaymentStatus {
  authorised = 'authorised',
  paid = 'paid',
  voided = 'voided',
  deleted = 'deleted'
}

export function PaymentStatusFromJSON(json: any): PaymentStatus {
  return PaymentStatusFromJSONTyped(json, false)
}

export function PaymentStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentStatus {
  return json as PaymentStatus
}

export function PaymentStatusToJSON(value?: PaymentStatus | null): any {
  return value as any
}
