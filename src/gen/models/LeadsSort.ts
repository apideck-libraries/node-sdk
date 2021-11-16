/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.7.1
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
 * @interface LeadsSort
 */
export interface LeadsSort {
  /**
   * The field on which to sort the Leads
   * @type {string}
   * @memberof LeadsSort
   */
  by: LeadsSortBy
  /**
   *
   * @type {SortDirection}
   * @memberof LeadsSort
   */
  direction?: SortDirection
}

/**
 * @export
 * @enum {string}
 */
export enum LeadsSortBy {
  created_at = 'created_at',
  updated_at = 'updated_at',
  name = 'name',
  first_name = 'first_name',
  last_name = 'last_name',
  email = 'email'
}

export function LeadsSortFromJSON(json: any): LeadsSort {
  return LeadsSortFromJSONTyped(json, false)
}

export function LeadsSortFromJSONTyped(json: any, ignoreDiscriminator: boolean): LeadsSort {
  if (json === undefined || json === null) {
    return json
  }
  return {
    by: json['by'],
    direction: !exists(json, 'direction') ? undefined : SortDirectionFromJSON(json['direction'])
  }
}

export function LeadsSortToJSON(value?: LeadsSort | null): any {
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
