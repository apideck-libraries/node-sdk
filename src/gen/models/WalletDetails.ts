/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.61.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
/**
 * Wallet details for this payment. This field is currently not available. Reach out to our team for more info.
 * @export
 * @interface WalletDetails
 */
export interface WalletDetails {
  /**
   * The status of the wallet payment. The status can be AUTHORIZED, CAPTURED, VOIDED, or FAILED.
   * @type {string}
   * @memberof WalletDetails
   */
  status?: WalletDetailsStatus
}

/**
 * @export
 * @enum {string}
 */
export enum WalletDetailsStatus {
  authorized = 'authorized',
  captured = 'captured',
  voided = 'voided',
  failed = 'failed',
  other = 'other'
}

export function WalletDetailsFromJSON(json: any): WalletDetails {
  return WalletDetailsFromJSONTyped(json, false)
}

export function WalletDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): WalletDetails {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status: !exists(json, 'status') ? undefined : json['status']
  }
}

export function WalletDetailsToJSON(value?: WalletDetails | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    status: value.status
  }
}
