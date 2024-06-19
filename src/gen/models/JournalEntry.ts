/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.5.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { Currency, CurrencyFromJSON, CurrencyToJSON } from './Currency'
import {
  JournalEntryLineItem,
  JournalEntryLineItemFromJSON,
  JournalEntryLineItemToJSON
} from './JournalEntryLineItem'
import { PassThroughBody, PassThroughBodyFromJSON, PassThroughBodyToJSON } from './PassThroughBody'

/**
 *
 * @export
 * @interface JournalEntry
 */
export interface JournalEntry {
  /**
   * A unique identifier for an object.
   * @type {string}
   * @memberof JournalEntry
   */
  readonly id?: string
  /**
   * Journal entry title
   * @type {string}
   * @memberof JournalEntry
   */
  title?: string | null
  /**
   * Currency Exchange Rate at the time entity was recorded/generated.
   * @type {number}
   * @memberof JournalEntry
   */
  currency_rate?: number | null
  /**
   *
   * @type {Currency}
   * @memberof JournalEntry
   */
  currency?: Currency | null
  /**
   * The company or subsidiary id the transaction belongs to
   * @type {string}
   * @memberof JournalEntry
   */
  company_id?: string | null
  /**
   * Requires a minimum of 2 line items that sum to 0
   * @type {Array<JournalEntryLineItem>}
   * @memberof JournalEntry
   */
  line_items?: Array<JournalEntryLineItem>
  /**
   * Reference for the journal entry.
   * @type {string}
   * @memberof JournalEntry
   */
  memo?: string | null
  /**
   * This is the date on which the journal entry was added. This can be different from the creation date and can also be backdated.
   * @type {Date}
   * @memberof JournalEntry
   */
  posted_at?: Date
  /**
   * Journal symbol of the entry. For example IND for indirect costs
   * @type {string}
   * @memberof JournalEntry
   */
  journal_symbol?: string | null
  /**
   * The specific category of tax associated with a transaction like sales or purchase
   * @type {string}
   * @memberof JournalEntry
   */
  tax_type?: string | null
  /**
   * Applicable tax id/code override if tax is not supplied on a line item basis.
   * @type {string}
   * @memberof JournalEntry
   */
  tax_code?: string | null
  /**
   * Journal entry number.
   * @type {string}
   * @memberof JournalEntry
   */
  number?: string | null
  /**
   * When custom mappings are configured on the resource, the result is included here.
   * @type {object}
   * @memberof JournalEntry
   */
  readonly custom_mappings?: object | null
  /**
   * The user who last updated the object.
   * @type {string}
   * @memberof JournalEntry
   */
  readonly updated_by?: string | null
  /**
   * The user who created the object.
   * @type {string}
   * @memberof JournalEntry
   */
  readonly created_by?: string | null
  /**
   * The date and time when the object was last updated.
   * @type {Date}
   * @memberof JournalEntry
   */
  readonly updated_at?: Date | null
  /**
   * The date and time when the object was created.
   * @type {Date}
   * @memberof JournalEntry
   */
  readonly created_at?: Date | null
  /**
   * A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object.
   * @type {string}
   * @memberof JournalEntry
   */
  row_version?: string | null
  /**
   *
   * @type {PassThroughBody}
   * @memberof JournalEntry
   */
  pass_through?: PassThroughBody
}

export function JournalEntryFromJSON(json: any): JournalEntry {
  return JournalEntryFromJSONTyped(json, false)
}

export function JournalEntryFromJSONTyped(json: any, ignoreDiscriminator: boolean): JournalEntry {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    title: !exists(json, 'title') ? undefined : json['title'],
    currency_rate: !exists(json, 'currency_rate') ? undefined : json['currency_rate'],
    currency: !exists(json, 'currency') ? undefined : CurrencyFromJSON(json['currency']),
    company_id: !exists(json, 'company_id') ? undefined : json['company_id'],
    line_items: !exists(json, 'line_items')
      ? undefined
      : (json['line_items'] as Array<any>).map(JournalEntryLineItemFromJSON),
    memo: !exists(json, 'memo') ? undefined : json['memo'],
    posted_at: !exists(json, 'posted_at') ? undefined : new Date(json['posted_at']),
    journal_symbol: !exists(json, 'journal_symbol') ? undefined : json['journal_symbol'],
    tax_type: !exists(json, 'tax_type') ? undefined : json['tax_type'],
    tax_code: !exists(json, 'tax_code') ? undefined : json['tax_code'],
    number: !exists(json, 'number') ? undefined : json['number'],
    custom_mappings: !exists(json, 'custom_mappings') ? undefined : json['custom_mappings'],
    updated_by: !exists(json, 'updated_by') ? undefined : json['updated_by'],
    created_by: !exists(json, 'created_by') ? undefined : json['created_by'],
    updated_at: !exists(json, 'updated_at')
      ? undefined
      : json['updated_at'] === null
      ? null
      : new Date(json['updated_at']),
    created_at: !exists(json, 'created_at')
      ? undefined
      : json['created_at'] === null
      ? null
      : new Date(json['created_at']),
    row_version: !exists(json, 'row_version') ? undefined : json['row_version'],
    pass_through: !exists(json, 'pass_through')
      ? undefined
      : PassThroughBodyFromJSON(json['pass_through'])
  }
}

export function JournalEntryToJSON(value?: JournalEntry | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    title: value.title,
    currency_rate: value.currency_rate,
    currency: CurrencyToJSON(value.currency),
    company_id: value.company_id,
    line_items:
      value.line_items === undefined
        ? undefined
        : (value.line_items as Array<any>).map(JournalEntryLineItemToJSON),
    memo: value.memo,
    posted_at: value.posted_at === undefined ? undefined : new Date(value.posted_at).toISOString(),
    journal_symbol: value.journal_symbol,
    tax_type: value.tax_type,
    tax_code: value.tax_code,
    number: value.number,
    row_version: value.row_version,
    pass_through: PassThroughBodyToJSON(value.pass_through)
  }
}
