/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.1.3
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
 * @interface ActivitiesFilter
 */
export interface ActivitiesFilter {
  /**
   * Company ID to filter on
   * @type {string}
   * @memberof ActivitiesFilter
   */
  company_id?: string
  /**
   * Owner ID to filter on
   * @type {string}
   * @memberof ActivitiesFilter
   */
  owner_id?: string
  /**
   * Primary contact ID to filter on
   * @type {string}
   * @memberof ActivitiesFilter
   */
  contact_id?: string
  /**
   *
   * @type {Date}
   * @memberof ActivitiesFilter
   */
  updated_since?: Date
}

export function ActivitiesFilterFromJSON(json: any): ActivitiesFilter {
  return ActivitiesFilterFromJSONTyped(json, false)
}

export function ActivitiesFilterFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ActivitiesFilter {
  if (json === undefined || json === null) {
    return json
  }
  return {
    company_id: !exists(json, 'company_id') ? undefined : json['company_id'],
    owner_id: !exists(json, 'owner_id') ? undefined : json['owner_id'],
    contact_id: !exists(json, 'contact_id') ? undefined : json['contact_id'],
    updated_since: !exists(json, 'updated_since') ? undefined : new Date(json['updated_since'])
  }
}

export function ActivitiesFilterToJSON(value?: ActivitiesFilter | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    company_id: value.company_id,
    owner_id: value.owner_id,
    contact_id: value.contact_id,
    updated_since:
      value.updated_since === undefined ? undefined : new Date(value.updated_since).toISOString()
  }
}
