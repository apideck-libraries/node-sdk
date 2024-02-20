/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.3.1
 *
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
 * @interface TicketsSort
 */
export interface TicketsSort {
  /**
   * The field on which to sort the Tickets
   * @type {string}
   * @memberof TicketsSort
   */
  by?: TicketsSortBy
  /**
   *
   * @type {SortDirection}
   * @memberof TicketsSort
   */
  direction?: SortDirection
}

/**
 * @export
 * @enum {string}
 */
export enum TicketsSortBy {
  created_at = 'created_at',
  updated_at = 'updated_at'
}

export function TicketsSortFromJSON(json: any): TicketsSort {
  return TicketsSortFromJSONTyped(json, false)
}

export function TicketsSortFromJSONTyped(json: any, ignoreDiscriminator: boolean): TicketsSort {
  if (json === undefined || json === null) {
    return json
  }
  return {
    by: !exists(json, 'by') ? undefined : json['by'],
    direction: !exists(json, 'direction') ? undefined : SortDirectionFromJSON(json['direction'])
  }
}

export function TicketsSortToJSON(value?: TicketsSort | null): any {
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
