/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 6.0.0
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
 * @interface InvoiceItem
 */
export interface InvoiceItem {
  /**
   * ID of the linked item
   * @type {string}
   * @memberof InvoiceItem
   */
  id?: string | null
  /**
   * User defined item code
   * @type {string}
   * @memberof InvoiceItem
   */
  code?: string | null
  /**
   *
   * @type {string}
   * @memberof InvoiceItem
   */
  name?: string | null
}

export function InvoiceItemFromJSON(json: any): InvoiceItem {
  return InvoiceItemFromJSONTyped(json, false)
}

export function InvoiceItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): InvoiceItem {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    code: !exists(json, 'code') ? undefined : json['code'],
    name: !exists(json, 'name') ? undefined : json['name']
  }
}

export function InvoiceItemToJSON(value?: InvoiceItem | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    id: value.id,
    code: value.code,
    name: value.name
  }
}
