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
import { SortDirection, SortDirectionFromJSON, SortDirectionToJSON } from './SortDirection'

/**
 *
 * @export
 * @interface PaymentsSort
 */
export interface PaymentsSort {
  /**
   * The field on which to sort the Payments
   * @type {string}
   * @memberof PaymentsSort
   */
  by?: PaymentsSortBy
  /**
   *
   * @type {SortDirection}
   * @memberof PaymentsSort
   */
  direction?: SortDirection
}

/**
 * @export
 * @enum {string}
 */
export enum PaymentsSortBy {
  updated_at = 'updated_at',
  created_at = 'created_at'
}

export function PaymentsSortFromJSON(json: any): PaymentsSort {
  return PaymentsSortFromJSONTyped(json, false)
}

export function PaymentsSortFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentsSort {
  if (json === undefined || json === null) {
    return json
  }
  return {
    by: !exists(json, 'by') ? undefined : json['by'],
    direction: !exists(json, 'direction') ? undefined : SortDirectionFromJSON(json['direction'])
  }
}

export function PaymentsSortToJSON(value?: PaymentsSort | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    by: value.by,
    direction: SortDirectionToJSON(value.direction)
  }
}
