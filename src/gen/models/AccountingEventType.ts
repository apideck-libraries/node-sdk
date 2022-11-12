/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.84.0
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
  Star = '*',
  accounting_customer_created = 'accounting.customer.created',
  accounting_customer_updated = 'accounting.customer.updated',
  accounting_customer_deleted = 'accounting.customer.deleted',
  accounting_invoice_created = 'accounting.invoice.created',
  accounting_invoice_updated = 'accounting.invoice.updated',
  accounting_invoice_deleted = 'accounting.invoice.deleted',
  accounting_invoice_item_created = 'accounting.invoice_item.created',
  accounting_invoice_item_updated = 'accounting.invoice_item.updated',
  accounting_invoice_item_deleted = 'accounting.invoice_item.deleted',
  accounting_ledger_account_created = 'accounting.ledger_account.created',
  accounting_ledger_account_updated = 'accounting.ledger_account.updated',
  accounting_ledger_account_deleted = 'accounting.ledger_account.deleted',
  accounting_tax_rate_created = 'accounting.tax_rate.created',
  accounting_tax_rate_updated = 'accounting.tax_rate.updated',
  accounting_tax_rate_deleted = 'accounting.tax_rate.deleted',
  accounting_bill_created = 'accounting.bill.created',
  accounting_bill_updated = 'accounting.bill.updated',
  accounting_bill_deleted = 'accounting.bill.deleted',
  accounting_payment_created = 'accounting.payment.created',
  accounting_payment_updated = 'accounting.payment.updated',
  accounting_payment_deleted = 'accounting.payment.deleted',
  accounting_supplier_created = 'accounting.supplier.created',
  accounting_supplier_updated = 'accounting.supplier.updated',
  accounting_supplier_deleted = 'accounting.supplier.deleted'
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
