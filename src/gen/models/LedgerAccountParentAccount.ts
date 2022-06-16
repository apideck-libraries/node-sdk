/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.32.4
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
/**
 *
 * @export
 * @interface LedgerAccountParentAccount
 */
export interface LedgerAccountParentAccount {
  /**
   * The ID of the parent account.
   * @type {string}
   * @memberof LedgerAccountParentAccount
   */
  id?: string
  /**
   * The name of the parent account.
   * @type {string}
   * @memberof LedgerAccountParentAccount
   */
  name?: string
  /**
   * The human readable display ID used when displaying the parent account
   * @type {string}
   * @memberof LedgerAccountParentAccount
   */
  display_id?: string
}

export function LedgerAccountParentAccountFromJSON(json: any): LedgerAccountParentAccount {
  return LedgerAccountParentAccountFromJSONTyped(json, false)
}

export function LedgerAccountParentAccountFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): LedgerAccountParentAccount {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    name: !exists(json, 'name') ? undefined : json['name'],
    display_id: !exists(json, 'display_id') ? undefined : json['display_id']
  }
}

export function LedgerAccountParentAccountToJSON(value?: LedgerAccountParentAccount | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    id: value.id,
    name: value.name,
    display_id: value.display_id
  }
}
