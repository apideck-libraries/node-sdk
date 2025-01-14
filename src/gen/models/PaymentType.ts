/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.9.1
 * Contact: support@apideck.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * Type of payment
 * @export
 * @enum {string}
 */
export enum PaymentType {
  receivable = 'accounts_receivable',
  payable = 'accounts_payable',
  receivable_credit = 'accounts_receivable_credit',
  payable_credit = 'accounts_payable_credit',
  receivable_overpayment = 'accounts_receivable_overpayment',
  payable_overpayment = 'accounts_payable_overpayment',
  receivable_prepayment = 'accounts_receivable_prepayment',
  payable_prepayment = 'accounts_payable_prepayment'
}

export function PaymentTypeFromJSON(json: any): PaymentType {
  return PaymentTypeFromJSONTyped(json, false)
}

export function PaymentTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentType {
  return json as PaymentType
}

export function PaymentTypeToJSON(value?: PaymentType | null): any {
  return value as any
}
