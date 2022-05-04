/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.28.1
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
 * @interface LinkedLedgerAccount
 */
export interface LinkedLedgerAccount {
  /**
   *
   * @type {string}
   * @memberof LinkedLedgerAccount
   */
  id: string
  /**
   *
   * @type {string}
   * @memberof LinkedLedgerAccount
   */
  readonly name?: string | null
  /**
   *
   * @type {string}
   * @memberof LinkedLedgerAccount
   */
  nominal_code?: string | null
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
    id: json['id'],
    name: !exists(json, 'name') ? undefined : json['name'],
    nominal_code: !exists(json, 'nominal_code') ? undefined : json['nominal_code']
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
    nominal_code: value.nominal_code
  }
}
