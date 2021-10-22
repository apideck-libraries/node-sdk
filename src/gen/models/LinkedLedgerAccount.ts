/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 7.1.0
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
  readonly id?: string
  /**
   *
   * @type {string}
   * @memberof LinkedLedgerAccount
   */
  name?: string | null
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
    name: !exists(json, 'name') ? undefined : json['name']
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
    name: value.name
  }
}
