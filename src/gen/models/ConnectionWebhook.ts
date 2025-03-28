/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.12.4
 * Contact: support@apideck.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { UnifiedApiId, UnifiedApiIdFromJSON, UnifiedApiIdToJSON } from './UnifiedApiId'

/**
 *
 * @export
 * @interface ConnectionWebhook
 */
export interface ConnectionWebhook {
  /**
   *
   * @type {UnifiedApiId}
   * @memberof ConnectionWebhook
   */
  unified_api: UnifiedApiId
  /**
   * The status of the webhook.
   * @type {string}
   * @memberof ConnectionWebhook
   */
  status: ConnectionWebhookStatus
  /**
   * The delivery url of the webhook endpoint.
   * @type {string}
   * @memberof ConnectionWebhook
   */
  delivery_url: string
  /**
   * The Unify Base URL events from connectors will be sent to after service id is appended.
   * @type {string}
   * @memberof ConnectionWebhook
   */
  readonly execute_base_url: string
  /**
   * The list of subscribed events for this webhook. [`*`] indicates that all events are enabled.
   * @type {Array<string>}
   * @memberof ConnectionWebhook
   */
  events: Array<ConnectionWebhookEvents>
  /**
   *
   * @type {string}
   * @memberof ConnectionWebhook
   */
  readonly id?: string
  /**
   * A description of the object.
   * @type {string}
   * @memberof ConnectionWebhook
   */
  description?: string | null
  /**
   * Indicates if the webhook has has been disabled as it reached its retry limit or if account is over the usage allocated by it's plan.
   * @type {string}
   * @memberof ConnectionWebhook
   */
  disabled_reason?: ConnectionWebhookDisabledReason
  /**
   * The date and time when the object was last updated.
   * @type {Date}
   * @memberof ConnectionWebhook
   */
  readonly updated_at?: Date | null
  /**
   * The date and time when the object was created.
   * @type {Date}
   * @memberof ConnectionWebhook
   */
  readonly created_at?: Date | null
}

/**
 * @export
 * @enum {string}
 */
export enum ConnectionWebhookStatus {
  enabled = 'enabled',
  disabled = 'disabled'
}
/**
 * @export
 * @enum {string}
 */
export enum ConnectionWebhookEvents {
  Star = '*',
  crm_activity_created = 'crm.activity.created',
  crm_activity_updated = 'crm.activity.updated',
  crm_activity_deleted = 'crm.activity.deleted',
  crm_company_created = 'crm.company.created',
  crm_company_updated = 'crm.company.updated',
  crm_company_deleted = 'crm.company.deleted',
  crm_contact_created = 'crm.contact.created',
  crm_contact_updated = 'crm.contact.updated',
  crm_contact_deleted = 'crm.contact.deleted',
  crm_lead_created = 'crm.lead.created',
  crm_lead_updated = 'crm.lead.updated',
  crm_lead_deleted = 'crm.lead.deleted',
  crm_note_created = 'crm.note.created',
  crm_notes_updated = 'crm.notes.updated',
  crm_notes_deleted = 'crm.notes.deleted',
  crm_opportunity_created = 'crm.opportunity.created',
  crm_opportunity_updated = 'crm.opportunity.updated',
  crm_opportunity_deleted = 'crm.opportunity.deleted',
  lead_lead_created = 'lead.lead.created',
  lead_lead_updated = 'lead.lead.updated',
  lead_lead_deleted = 'lead.lead.deleted',
  vault_connection_created = 'vault.connection.created',
  vault_connection_updated = 'vault.connection.updated',
  vault_connection_disabled = 'vault.connection.disabled',
  vault_connection_deleted = 'vault.connection.deleted',
  vault_connection_callable = 'vault.connection.callable',
  vault_connection_revoked = 'vault.connection.revoked',
  vault_connection_token_refresh_failed = 'vault.connection.token_refresh.failed',
  ats_job_created = 'ats.job.created',
  ats_job_updated = 'ats.job.updated',
  ats_job_deleted = 'ats.job.deleted',
  ats_applicant_created = 'ats.applicant.created',
  ats_applicant_updated = 'ats.applicant.updated',
  ats_applicant_deleted = 'ats.applicant.deleted',
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
  accounting_supplier_deleted = 'accounting.supplier.deleted',
  accounting_purchase_order_created = 'accounting.purchase_order.created',
  accounting_purchase_order_updated = 'accounting.purchase_order.updated',
  accounting_purchase_order_deleted = 'accounting.purchase_order.deleted',
  accounting_credit_note_created = 'accounting.credit_note.created',
  accounting_credit_note_updated = 'accounting.credit_note.updated',
  accounting_credit_note_deleted = 'accounting.credit_note.deleted',
  pos_order_created = 'pos.order.created',
  pos_order_updated = 'pos.order.updated',
  pos_order_deleted = 'pos.order.deleted',
  pos_product_created = 'pos.product.created',
  pos_product_updated = 'pos.product.updated',
  pos_product_deleted = 'pos.product.deleted',
  pos_payment_created = 'pos.payment.created',
  pos_payment_updated = 'pos.payment.updated',
  pos_payment_deleted = 'pos.payment.deleted',
  pos_merchant_created = 'pos.merchant.created',
  pos_merchant_updated = 'pos.merchant.updated',
  pos_merchant_deleted = 'pos.merchant.deleted',
  pos_location_created = 'pos.location.created',
  pos_location_updated = 'pos.location.updated',
  pos_location_deleted = 'pos.location.deleted',
  pos_item_created = 'pos.item.created',
  pos_item_updated = 'pos.item.updated',
  pos_item_deleted = 'pos.item.deleted',
  pos_modifier_created = 'pos.modifier.created',
  pos_modifier_updated = 'pos.modifier.updated',
  pos_modifier_deleted = 'pos.modifier.deleted',
  pos_modifier_group_created = 'pos.modifier-group.created',
  pos_modifier_group_updated = 'pos.modifier-group.updated',
  pos_modifier_group_deleted = 'pos.modifier-group.deleted',
  hris_employee_created = 'hris.employee.created',
  hris_employee_updated = 'hris.employee.updated',
  hris_employee_deleted = 'hris.employee.deleted',
  hris_employee_terminated = 'hris.employee.terminated',
  hris_company_created = 'hris.company.created',
  hris_company_updated = 'hris.company.updated',
  hris_company_deleted = 'hris.company.deleted',
  file_storage_file_created = 'file-storage.file.created',
  file_storage_file_updated = 'file-storage.file.updated',
  file_storage_file_deleted = 'file-storage.file.deleted',
  issue_tracking_ticket_created = 'issue-tracking.ticket.created',
  issue_tracking_ticket_updated = 'issue-tracking.ticket.updated',
  issue_tracking_ticket_deleted = 'issue-tracking.ticket.deleted',
  ats_application_created = 'ats.application.created',
  ats_application_updated = 'ats.application.updated',
  ats_application_deleted = 'ats.application.deleted',
  accounting_expense_created = 'accounting.expense.created',
  accounting_expense_updated = 'accounting.expense.updated',
  accounting_expense_deleted = 'accounting.expense.deleted',
  ecommerce_order_created = 'ecommerce.order.created',
  ecommerce_order_updated = 'ecommerce.order.updated',
  ecommerce_order_deleted = 'ecommerce.order.deleted',
  ecommerce_product_created = 'ecommerce.product.created',
  ecommerce_product_updated = 'ecommerce.product.updated',
  ecommerce_product_deleted = 'ecommerce.product.deleted',
  ecommerce_customer_created = 'ecommerce.customer.created',
  ecommerce_customer_updated = 'ecommerce.customer.updated',
  ecommerce_customer_deleted = 'ecommerce.customer.deleted'
}
/**
 * @export
 * @enum {string}
 */
export enum ConnectionWebhookDisabledReason {
  none = 'none',
  retry_limit = 'retry_limit',
  usage_limit = 'usage_limit'
}

export function ConnectionWebhookFromJSON(json: any): ConnectionWebhook {
  return ConnectionWebhookFromJSONTyped(json, false)
}

export function ConnectionWebhookFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ConnectionWebhook {
  if (json === undefined || json === null) {
    return json
  }
  return {
    unified_api: UnifiedApiIdFromJSON(json['unified_api']),
    status: json['status'],
    delivery_url: json['delivery_url'],
    execute_base_url: json['execute_base_url'],
    events: json['events'],
    id: !exists(json, 'id') ? undefined : json['id'],
    description: !exists(json, 'description') ? undefined : json['description'],
    disabled_reason: !exists(json, 'disabled_reason') ? undefined : json['disabled_reason'],
    updated_at: !exists(json, 'updated_at')
      ? undefined
      : json['updated_at'] === null
      ? null
      : new Date(json['updated_at']),
    created_at: !exists(json, 'created_at')
      ? undefined
      : json['created_at'] === null
      ? null
      : new Date(json['created_at'])
  }
}

export function ConnectionWebhookToJSON(value?: ConnectionWebhook | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    unified_api: UnifiedApiIdToJSON(value.unified_api),
    status: value.status,
    delivery_url: value.delivery_url,
    events: value.events,
    description: value.description,
    disabled_reason: value.disabled_reason
  }
}
