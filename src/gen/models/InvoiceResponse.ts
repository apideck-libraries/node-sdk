/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.28.1
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
 * @interface InvoiceResponse
 */
export interface InvoiceResponse {
  /**
   *
   * @type {string}
   * @memberof InvoiceResponse
   */
  readonly id?: string
  /**
   * The third-party API ID of original entity
   * @type {string}
   * @memberof InvoiceResponse
   */
  readonly downstream_id?: string | null
}

export function InvoiceResponseFromJSON(json: any): InvoiceResponse {
  return InvoiceResponseFromJSONTyped(json, false)
}

export function InvoiceResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): InvoiceResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    downstream_id: !exists(json, 'downstream_id') ? undefined : json['downstream_id']
  }
}

export function InvoiceResponseToJSON(value?: InvoiceResponse | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {}
}
