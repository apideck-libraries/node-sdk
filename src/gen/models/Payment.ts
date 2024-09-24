/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.7.5
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { Allocation, AllocationFromJSON, AllocationToJSON } from './Allocation'
import { Currency, CurrencyFromJSON, CurrencyToJSON } from './Currency'
import { CustomField, CustomFieldFromJSON, CustomFieldToJSON } from './CustomField'
import {
  DeprecatedLinkedSupplier,
  DeprecatedLinkedSupplierFromJSON,
  DeprecatedLinkedSupplierToJSON
} from './DeprecatedLinkedSupplier'
import { LinkedCustomer, LinkedCustomerFromJSON, LinkedCustomerToJSON } from './LinkedCustomer'
import {
  LinkedLedgerAccount,
  LinkedLedgerAccountFromJSON,
  LinkedLedgerAccountToJSON
} from './LinkedLedgerAccount'
import {
  LinkedTrackingCategories,
  LinkedTrackingCategoriesFromJSON,
  LinkedTrackingCategoriesToJSON
} from './LinkedTrackingCategories'
import { PassThroughBody, PassThroughBodyFromJSON, PassThroughBodyToJSON } from './PassThroughBody'
import { PaymentStatus, PaymentStatusFromJSON, PaymentStatusToJSON } from './PaymentStatus'
import { PaymentType, PaymentTypeFromJSON, PaymentTypeToJSON } from './PaymentType'

/**
 *
 * @export
 * @interface Payment
 */
export interface Payment {
  /**
   * A unique identifier for an object.
   * @type {string}
   * @memberof Payment
   */
  readonly id: string
  /**
   * The total amount of the transaction
   * @type {number}
   * @memberof Payment
   */
  total_amount: number | null
  /**
   * The date of the transaction - YYYY:MM::DDThh:mm:ss.sTZD
   * @type {Date}
   * @memberof Payment
   */
  transaction_date: Date | null
  /**
   * The third-party API ID of original entity
   * @type {string}
   * @memberof Payment
   */
  readonly downstream_id?: string | null
  /**
   *
   * @type {Currency}
   * @memberof Payment
   */
  currency?: Currency | null
  /**
   * Currency Exchange Rate at the time entity was recorded/generated.
   * @type {number}
   * @memberof Payment
   */
  currency_rate?: number | null
  /**
   * Optional transaction reference message ie: Debit remittance detail.
   * @type {string}
   * @memberof Payment
   */
  reference?: string | null
  /**
   * Payment method used for the transaction, such as cash, credit card, bank transfer, or check
   * @type {string}
   * @memberof Payment
   */
  payment_method?: string | null
  /**
   * Optional reference message returned by payment method on processing
   * @type {string}
   * @memberof Payment
   */
  payment_method_reference?: string | null
  /**
   * A unique identifier for an object.
   * @type {string}
   * @memberof Payment
   */
  payment_method_id?: string | null
  /**
   * Type of accounts receivable account.
   * @type {string}
   * @memberof Payment
   */
  accounts_receivable_account_type?: string | null
  /**
   * Unique identifier for the account to allocate payment to.
   * @type {string}
   * @memberof Payment
   */
  accounts_receivable_account_id?: string | null
  /**
   *
   * @type {LinkedLedgerAccount}
   * @memberof Payment
   */
  account?: LinkedLedgerAccount | null
  /**
   *
   * @type {LinkedCustomer}
   * @memberof Payment
   */
  customer?: LinkedCustomer | null
  /**
   *
   * @type {DeprecatedLinkedSupplier}
   * @memberof Payment
   */
  supplier?: DeprecatedLinkedSupplier | null
  /**
   * The company or subsidiary id the transaction belongs to
   * @type {string}
   * @memberof Payment
   */
  company_id?: string | null
  /**
   * Indicates if the transaction has been reconciled.
   * @type {boolean}
   * @memberof Payment
   */
  reconciled?: boolean | null
  /**
   *
   * @type {PaymentStatus}
   * @memberof Payment
   */
  status?: PaymentStatus
  /**
   *
   * @type {PaymentType}
   * @memberof Payment
   */
  type?: PaymentType
  /**
   *
   * @type {Array<Allocation>}
   * @memberof Payment
   */
  allocations?: Array<Allocation>
  /**
   * Note associated with the transaction
   * @type {string}
   * @memberof Payment
   */
  note?: string | null
  /**
   * Number associated with the transaction
   * @type {string}
   * @memberof Payment
   */
  number?: string | null
  /**
   *
   * @type {LinkedTrackingCategories}
   * @memberof Payment
   */
  tracking_categories?: LinkedTrackingCategories | null
  /**
   *
   * @type {Array<CustomField>}
   * @memberof Payment
   */
  custom_fields?: Array<CustomField>
  /**
   * A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object.
   * @type {string}
   * @memberof Payment
   */
  row_version?: string | null
  /**
   * Id to be displayed.
   * @type {string}
   * @memberof Payment
   */
  display_id?: string | null
  /**
   * When custom mappings are configured on the resource, the result is included here.
   * @type {object}
   * @memberof Payment
   */
  readonly custom_mappings?: object | null
  /**
   * The user who last updated the object.
   * @type {string}
   * @memberof Payment
   */
  readonly updated_by?: string | null
  /**
   * The user who created the object.
   * @type {string}
   * @memberof Payment
   */
  readonly created_by?: string | null
  /**
   * The date and time when the object was created.
   * @type {Date}
   * @memberof Payment
   */
  readonly created_at?: Date | null
  /**
   * The date and time when the object was last updated.
   * @type {Date}
   * @memberof Payment
   */
  readonly updated_at?: Date | null
  /**
   *
   * @type {PassThroughBody}
   * @memberof Payment
   */
  pass_through?: PassThroughBody
}

export function PaymentFromJSON(json: any): Payment {
  return PaymentFromJSONTyped(json, false)
}

export function PaymentFromJSONTyped(json: any, ignoreDiscriminator: boolean): Payment {
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
    accounts_receivable_account_type: !exists(json, 'accounts_receivable_account_type')
      ? undefined
      : json['accounts_receivable_account_type'],
    accounts_receivable_account_id: !exists(json, 'accounts_receivable_account_id')
      ? undefined
      : json['accounts_receivable_account_id'],
    account: !exists(json, 'account') ? undefined : LinkedLedgerAccountFromJSON(json['account']),
    customer: !exists(json, 'customer') ? undefined : LinkedCustomerFromJSON(json['customer']),
    supplier: !exists(json, 'supplier')
      ? undefined
      : DeprecatedLinkedSupplierFromJSON(json['supplier']),
    company_id: !exists(json, 'company_id') ? undefined : json['company_id'],
    reconciled: !exists(json, 'reconciled') ? undefined : json['reconciled'],
    status: !exists(json, 'status') ? undefined : PaymentStatusFromJSON(json['status']),
    type: !exists(json, 'type') ? undefined : PaymentTypeFromJSON(json['type']),
    allocations: !exists(json, 'allocations')
      ? undefined
      : (json['allocations'] as Array<any>).map(AllocationFromJSON),
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

export function PaymentToJSON(value?: Payment | null): any {
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
    accounts_receivable_account_type: value.accounts_receivable_account_type,
    accounts_receivable_account_id: value.accounts_receivable_account_id,
    account: LinkedLedgerAccountToJSON(value.account),
    customer: LinkedCustomerToJSON(value.customer),
    supplier: DeprecatedLinkedSupplierToJSON(value.supplier),
    company_id: value.company_id,
    reconciled: value.reconciled,
    status: PaymentStatusToJSON(value.status),
    type: PaymentTypeToJSON(value.type),
    allocations:
      value.allocations === undefined
        ? undefined
        : (value.allocations as Array<any>).map(AllocationToJSON),
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
