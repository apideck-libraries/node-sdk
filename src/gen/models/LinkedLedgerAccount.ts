/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.13.0
 * Contact: support@apideck.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
/**
 *
 * @export
 * @interface LinkedLedgerAccount
 */
export interface LinkedLedgerAccount {
  /**
   * The unique identifier for the account.
   * @type {string}
   * @memberof LinkedLedgerAccount
   */
  id?: string
  /**
   * The name of the account.
   * @type {string}
   * @memberof LinkedLedgerAccount
   */
  readonly name?: string | null
  /**
   * The nominal code of the account.
   * @type {string}
   * @memberof LinkedLedgerAccount
   */
  nominal_code?: string | null
  /**
   * The code assigned to the account.
   * @type {string}
   * @memberof LinkedLedgerAccount
   */
  code?: string | null
}

export function LinkedLedgerAccountFromJSON(json: any): LinkedLedgerAccount {
  return LinkedLedgerAccountFromJSONTyped(json, false)
}

export function LinkedLedgerAccountFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): LinkedLedgerAccount {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    name: !exists(json, 'name') ? undefined : json['name'],
    nominal_code: !exists(json, 'nominal_code') ? undefined : json['nominal_code'],
    code: !exists(json, 'code') ? undefined : json['code']
  }
}

export function LinkedLedgerAccountToJSON(value?: LinkedLedgerAccount | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    id: value.id,
    nominal_code: value.nominal_code,
    code: value.code
  }
}
