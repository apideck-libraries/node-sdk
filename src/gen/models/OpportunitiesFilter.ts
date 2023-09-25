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
 * @interface OpportunitiesFilter
 */
export interface OpportunitiesFilter {
  /**
   * Title of the opportunity to filter on
   * @type {string}
   * @memberof OpportunitiesFilter
   */
  title?: string
  /**
   * Status to filter on
   * @type {string}
   * @memberof OpportunitiesFilter
   */
  status?: string
  /**
   * Monetary amount to filter on
   * @type {number}
   * @memberof OpportunitiesFilter
   */
  monetary_amount?: number
  /**
   * Win probability to filter on
   * @type {number}
   * @memberof OpportunitiesFilter
   */
  win_probability?: number
  /**
   * Company ID to filter on
   * @type {string}
   * @memberof OpportunitiesFilter
   */
  company_id?: string
}

export function OpportunitiesFilterFromJSON(json: any): OpportunitiesFilter {
  return OpportunitiesFilterFromJSONTyped(json, false)
}

export function OpportunitiesFilterFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): OpportunitiesFilter {
  if (json === undefined || json === null) {
    return json
  }
  return {
    title: !exists(json, 'title') ? undefined : json['title'],
    status: !exists(json, 'status') ? undefined : json['status'],
    monetary_amount: !exists(json, 'monetary_amount') ? undefined : json['monetary_amount'],
    win_probability: !exists(json, 'win_probability') ? undefined : json['win_probability'],
    company_id: !exists(json, 'company_id') ? undefined : json['company_id']
  }
}

export function OpportunitiesFilterToJSON(value?: OpportunitiesFilter | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    title: value.title,
    status: value.status,
    monetary_amount: value.monetary_amount,
    win_probability: value.win_probability,
    company_id: value.company_id
  }
}
