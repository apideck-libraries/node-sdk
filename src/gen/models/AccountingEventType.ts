/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.6.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 *
 * @export
 * @enum {string}
 */
export enum AccountingEventType {
  customer_created = 'accounting.customer.created',
  customer_updated = 'accounting.customer.updated',
  customer_deleted = 'accounting.customer.deleted',
  invoice_created = 'accounting.invoice.created',
  invoice_updated = 'accounting.invoice.updated',
  invoice_deleted = 'accounting.invoice.deleted',
  invoice_item_created = 'accounting.invoice_item.created',
  invoice_item_updated = 'accounting.invoice_item.updated',
  invoice_item_deleted = 'accounting.invoice_item.deleted',
  ledger_account_created = 'accounting.ledger_account.created',
  ledger_account_updated = 'accounting.ledger_account.updated',
  ledger_account_deleted = 'accounting.ledger_account.deleted',
  tax_rate_created = 'accounting.tax_rate.created',
  tax_rate_updated = 'accounting.tax_rate.updated',
  tax_rate_deleted = 'accounting.tax_rate.deleted'
}

export function AccountingEventTypeFromJSON(json: any): AccountingEventType {
  return AccountingEventTypeFromJSONTyped(json, false)
}

export function AccountingEventTypeFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): AccountingEventType {
  return json as AccountingEventType
}

export function AccountingEventTypeToJSON(value?: AccountingEventType | null): any {
  return value as any
}
