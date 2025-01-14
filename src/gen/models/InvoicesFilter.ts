/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.9.1
 * Contact: support@apideck.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
/**
 *
 * @export
 * @interface InvoicesFilter
 */
export interface InvoicesFilter {
  /**
   *
   * @type {Date}
   * @memberof InvoicesFilter
   */
  updated_since?: Date
  /**
   *
   * @type {Date}
   * @memberof InvoicesFilter
   */
  created_since?: Date
  /**
   * Invoice number to search for
   * @type {string}
   * @memberof InvoicesFilter
   */
  number?: string
}

export function InvoicesFilterFromJSON(json: any): InvoicesFilter {
  return InvoicesFilterFromJSONTyped(json, false)
}

export function InvoicesFilterFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): InvoicesFilter {
  if (json === undefined || json === null) {
    return json
  }
  return {
    updated_since: !exists(json, 'updated_since') ? undefined : new Date(json['updated_since']),
    created_since: !exists(json, 'created_since') ? undefined : new Date(json['created_since']),
    number: !exists(json, 'number') ? undefined : json['number']
  }
}

export function InvoicesFilterToJSON(value?: InvoicesFilter | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    updated_since:
      value.updated_since === undefined ? undefined : new Date(value.updated_since).toISOString(),
    created_since:
      value.created_since === undefined ? undefined : new Date(value.created_since).toISOString(),
    number: value.number
  }
}
