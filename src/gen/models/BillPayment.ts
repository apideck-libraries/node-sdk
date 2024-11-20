/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.8.1
 * Contact: support@apideck.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import {
  BillPaymentAllocations,
  BillPaymentAllocationsFromJSON,
  BillPaymentAllocationsToJSON
} from './BillPaymentAllocations'
import { Currency, CurrencyFromJSON, CurrencyToJSON } from './Currency'
import { CustomField, CustomFieldFromJSON, CustomFieldToJSON } from './CustomField'
import {
  LinkedLedgerAccount,
  LinkedLedgerAccountFromJSON,
  LinkedLedgerAccountToJSON
} from './LinkedLedgerAccount'
import { LinkedSupplier, LinkedSupplierFromJSON, LinkedSupplierToJSON } from './LinkedSupplier'
import {
  LinkedTrackingCategories,
  LinkedTrackingCategoriesFromJSON,
  LinkedTrackingCategoriesToJSON
} from './LinkedTrackingCategories'
import { PassThroughBody, PassThroughBodyFromJSON, PassThroughBodyToJSON } from './PassThroughBody'
import { PaymentStatus, PaymentStatusFromJSON, PaymentStatusToJSON } from './PaymentStatus'

/**
 *
 * @export
 * @interface BillPayment
 */
export interface BillPayment {
  /**
   * A unique identifier for an object.
   * @type {string}
   * @memberof BillPayment
   */
  readonly id: string
  /**
   * The total amount of the transaction
   * @type {number}
   * @memberof BillPayment
   */
  total_amount: number | null
  /**
   * The date of the transaction - YYYY:MM::DDThh:mm:ss.sTZD
   * @type {Date}
   * @memberof BillPayment
   */
  transaction_date: Date | null
  /**
   * The third-party API ID of original entity
   * @type {string}
   * @memberof BillPayment
   */
  readonly downstream_id?: string | null
  /**
   *
   * @type {Currency}
   * @memberof BillPayment
   */
  currency?: Currency | null
  /**
   * Currency Exchange Rate at the time entity was recorded/generated.
   * @type {number}
   * @memberof BillPayment
   */
  currency_rate?: number | null
  /**
   * Optional transaction reference message ie: Debit remittance detail.
   * @type {string}
   * @memberof BillPayment
   */
  reference?: string | null
  /**
   * Payment method used for the transaction, such as cash, credit card, bank transfer, or check
   * @type {string}
   * @memberof BillPayment
   */
  payment_method?: string | null
  /**
   * Optional reference message returned by payment method on processing
   * @type {string}
   * @memberof BillPayment
   */
  payment_method_reference?: string | null
  /**
   * A unique identifier for an object.
   * @type {string}
   * @memberof BillPayment
   */
  payment_method_id?: string | null
  /**
   *
   * @type {LinkedLedgerAccount}
   * @memberof BillPayment
   */
  account?: LinkedLedgerAccount | null
  /**
   *
   * @type {LinkedSupplier}
   * @memberof BillPayment
   */
  supplier?: LinkedSupplier | null
  /**
   * The company or subsidiary id the transaction belongs to
   * @type {string}
   * @memberof BillPayment
   */
  company_id?: string | null
  /**
   * Indicates if the transaction has been reconciled.
   * @type {boolean}
   * @memberof BillPayment
   */
  reconciled?: boolean | null
  /**
   *
   * @type {PaymentStatus}
   * @memberof BillPayment
   */
  status?: PaymentStatus
  /**
   * Type of payment
   * @type {string}
   * @memberof BillPayment
   */
  type?: BillPaymentType
  /**
   *
   * @type {Array<BillPaymentAllocations>}
   * @memberof BillPayment
   */
  allocations?: Array<BillPaymentAllocations>
  /**
   * Note associated with the transaction
   * @type {string}
   * @memberof BillPayment
   */
  note?: string | null
  /**
   * Number associated with the transaction
   * @type {string}
   * @memberof BillPayment
   */
  number?: string | null
  /**
   *
   * @type {LinkedTrackingCategories}
   * @memberof BillPayment
   */
  tracking_categories?: LinkedTrackingCategories | null
  /**
   *
   * @type {Array<CustomField>}
   * @memberof BillPayment
   */
  custom_fields?: Array<CustomField>
  /**
   * A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object.
   * @type {string}
   * @memberof BillPayment
   */
  row_version?: string | null
  /**
   * Id to be displayed.
   * @type {string}
   * @memberof BillPayment
   */
  display_id?: string | null
  /**
   * When custom mappings are configured on the resource, the result is included here.
   * @type {object}
   * @memberof BillPayment
   */
  readonly custom_mappings?: object | null
  /**
   * The user who last updated the object.
   * @type {string}
   * @memberof BillPayment
   */
  readonly updated_by?: string | null
  /**
   * The user who created the object.
   * @type {string}
   * @memberof BillPayment
   */
  readonly created_by?: string | null
  /**
   * The date and time when the object was created.
   * @type {Date}
   * @memberof BillPayment
   */
  readonly created_at?: Date | null
  /**
   * The date and time when the object was last updated.
   * @type {Date}
   * @memberof BillPayment
   */
  readonly updated_at?: Date | null
  /**
   *
   * @type {PassThroughBody}
   * @memberof BillPayment
   */
  pass_through?: PassThroughBody
}

/**
 * @export
 * @enum {string}
 */
export enum BillPaymentType {
  payable_credit = 'accounts_payable_credit',
  payable_overpayment = 'accounts_payable_overpayment',
  payable_prepayment = 'accounts_payable_prepayment',
  payable = 'accounts_payable'
}

export function BillPaymentFromJSON(json: any): BillPayment {
  return BillPaymentFromJSONTyped(json, false)
}

export function BillPaymentFromJSONTyped(json: any, ignoreDiscriminator: boolean): BillPayment {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: json['id'],
    total_amount: json['total_amount'],
    transaction_date: json['transaction_date'] === null ? null : new Date(json['transaction_date']),
    downstream_id: !exists(json, 'downstream_id') ? undefined : json['downstream_id'],
    currency: !exists(json, 'currency') ? undefined : CurrencyFromJSON(json['currency']),
    currency_rate: !exists(json, 'currency_rate') ? undefined : json['currency_rate'],
    reference: !exists(json, 'reference') ? undefined : json['reference'],
    payment_method: !exists(json, 'payment_method') ? undefined : json['payment_method'],
    payment_method_reference: !exists(json, 'payment_method_reference')
      ? undefined
      : json['payment_method_reference'],
    payment_method_id: !exists(json, 'payment_method_id') ? undefined : json['payment_method_id'],
    account: !exists(json, 'account') ? undefined : LinkedLedgerAccountFromJSON(json['account']),
    supplier: !exists(json, 'supplier') ? undefined : LinkedSupplierFromJSON(json['supplier']),
    company_id: !exists(json, 'company_id') ? undefined : json['company_id'],
    reconciled: !exists(json, 'reconciled') ? undefined : json['reconciled'],
    status: !exists(json, 'status') ? undefined : PaymentStatusFromJSON(json['status']),
    type: !exists(json, 'type') ? undefined : json['type'],
    allocations: !exists(json, 'allocations')
      ? undefined
      : (json['allocations'] as Array<any>).map(BillPaymentAllocationsFromJSON),
    note: !exists(json, 'note') ? undefined : json['note'],
    number: !exists(json, 'number') ? undefined : json['number'],
    tracking_categories: !exists(json, 'tracking_categories')
      ? undefined
      : LinkedTrackingCategoriesFromJSON(json['tracking_categories']),
    custom_fields: !exists(json, 'custom_fields')
      ? undefined
      : (json['custom_fields'] as Array<any>).map(CustomFieldFromJSON),
    row_version: !exists(json, 'row_version') ? undefined : json['row_version'],
    display_id: !exists(json, 'display_id') ? undefined : json['display_id'],
    custom_mappings: !exists(json, 'custom_mappings') ? undefined : json['custom_mappings'],
    updated_by: !exists(json, 'updated_by') ? undefined : json['updated_by'],
    created_by: !exists(json, 'created_by') ? undefined : json['created_by'],
    created_at: !exists(json, 'created_at')
      ? undefined
      : json['created_at'] === null
      ? null
      : new Date(json['created_at']),
    updated_at: !exists(json, 'updated_at')
      ? undefined
      : json['updated_at'] === null
      ? null
      : new Date(json['updated_at']),
    pass_through: !exists(json, 'pass_through')
      ? undefined
      : PassThroughBodyFromJSON(json['pass_through'])
  }
}

export function BillPaymentToJSON(value?: BillPayment | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    total_amount: value.total_amount,
    transaction_date:
      value.transaction_date === null ? null : new Date(value.transaction_date).toISOString(),
    currency: CurrencyToJSON(value.currency),
    currency_rate: value.currency_rate,
    reference: value.reference,
    payment_method: value.payment_method,
    payment_method_reference: value.payment_method_reference,
    payment_method_id: value.payment_method_id,
    account: LinkedLedgerAccountToJSON(value.account),
    supplier: LinkedSupplierToJSON(value.supplier),
    company_id: value.company_id,
    reconciled: value.reconciled,
    status: PaymentStatusToJSON(value.status),
    type: value.type,
    allocations:
      value.allocations === undefined
        ? undefined
        : (value.allocations as Array<any>).map(BillPaymentAllocationsToJSON),
    note: value.note,
    number: value.number,
    tracking_categories: LinkedTrackingCategoriesToJSON(value.tracking_categories),
    custom_fields:
      value.custom_fields === undefined
        ? undefined
        : (value.custom_fields as Array<any>).map(CustomFieldToJSON),
    row_version: value.row_version,
    display_id: value.display_id,
    pass_through: PassThroughBodyToJSON(value.pass_through)
  }
}
