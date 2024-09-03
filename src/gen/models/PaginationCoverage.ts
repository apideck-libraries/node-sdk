/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.7.2
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
 * @interface PaginationCoverage
 */
export interface PaginationCoverage {
  /**
   * How pagination is implemented on this connector. Native mode means Apideck is using the pagination parameters of the connector. With virtual pagination, the connector does not support pagination, but Apideck emulates it.
   * @type {string}
   * @memberof PaginationCoverage
   */
  mode?: PaginationCoverageMode
  /**
   * Indicates whether the connector supports paging through results using the cursor parameter.
   * @type {boolean}
   * @memberof PaginationCoverage
   */
  paging_support?: boolean
  /**
   * Indicates whether the connector supports changing the page size by using the limit parameter.
   * @type {boolean}
   * @memberof PaginationCoverage
   */
  limit_support?: boolean
}

/**
 * @export
 * @enum {string}
 */
export enum PaginationCoverageMode {
  native = 'native',
  virtual = 'virtual'
}

export function PaginationCoverageFromJSON(json: any): PaginationCoverage {
  return PaginationCoverageFromJSONTyped(json, false)
}

export function PaginationCoverageFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): PaginationCoverage {
  if (json === undefined || json === null) {
    return json
  }
  return {
    mode: !exists(json, 'mode') ? undefined : json['mode'],
    paging_support: !exists(json, 'paging_support') ? undefined : json['paging_support'],
    limit_support: !exists(json, 'limit_support') ? undefined : json['limit_support']
  }
}

export function PaginationCoverageToJSON(value?: PaginationCoverage | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    mode: value.mode,
    paging_support: value.paging_support,
    limit_support: value.limit_support
  }
}
