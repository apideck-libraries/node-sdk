/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.71.0
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
 * @interface ContactsSort
 */
export interface ContactsSort {
  /**
   * The field on which to sort the Contacts
   * @type {string}
   * @memberof ContactsSort
   */
  by?: ContactsSortBy
  /**
   *
   * @type {SortDirection}
   * @memberof ContactsSort
   */
  direction?: SortDirection
}

/**
 * @export
 * @enum {string}
 */
export enum ContactsSortBy {
  created_at = 'created_at',
  updated_at = 'updated_at',
  name = 'name',
  first_name = 'first_name',
  last_name = 'last_name',
  email = 'email'
}

export function ContactsSortFromJSON(json: any): ContactsSort {
  return ContactsSortFromJSONTyped(json, false)
}

export function ContactsSortFromJSONTyped(json: any, ignoreDiscriminator: boolean): ContactsSort {
  if (json === undefined || json === null) {
    return json
  }
  return {
    by: !exists(json, 'by') ? undefined : json['by'],
    direction: !exists(json, 'direction') ? undefined : SortDirectionFromJSON(json['direction'])
  }
}

export function ContactsSortToJSON(value?: ContactsSort | null): any {
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
