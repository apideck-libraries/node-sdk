/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 9.9.1
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
 * @interface ContactsFilter
 */
export interface ContactsFilter {
  /**
   * Name of the contact to filter on
   * @type {string}
   * @memberof ContactsFilter
   */
  name?: string
  /**
   * First name of the contact to filter on
   * @type {string}
   * @memberof ContactsFilter
   */
  first_name?: string
  /**
   * Last name of the contact to filter on
   * @type {string}
   * @memberof ContactsFilter
   */
  last_name?: string
  /**
   * Email of the contact to filter on
   * @type {string}
   * @memberof ContactsFilter
   */
  email?: string
  /**
   * Unique identifier for the associated company of the contact to filter on
   * @type {string}
   * @memberof ContactsFilter
   */
  company_id?: string
}

export function ContactsFilterFromJSON(json: any): ContactsFilter {
  return ContactsFilterFromJSONTyped(json, false)
}

export function ContactsFilterFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ContactsFilter {
  if (json === undefined || json === null) {
    return json
  }
  return {
    name: !exists(json, 'name') ? undefined : json['name'],
    first_name: !exists(json, 'first_name') ? undefined : json['first_name'],
    last_name: !exists(json, 'last_name') ? undefined : json['last_name'],
    email: !exists(json, 'email') ? undefined : json['email'],
    company_id: !exists(json, 'company_id') ? undefined : json['company_id']
  }
}

export function ContactsFilterToJSON(value?: ContactsFilter | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    name: value.name,
    first_name: value.first_name,
    last_name: value.last_name,
    email: value.email,
    company_id: value.company_id
  }
}
