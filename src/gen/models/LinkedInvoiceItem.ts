/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 9.9.2
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
 * @interface LinkedInvoiceItem
 */
export interface LinkedInvoiceItem {
  /**
   * ID of the linked item. A reference to the [invoice item](https://developers.apideck.com/apis/accounting/reference#tag/Invoice-Items) that was used to create this line item
   * @type {string}
   * @memberof LinkedInvoiceItem
   */
  id?: string | null
  /**
   * User defined item code
   * @type {string}
   * @memberof LinkedInvoiceItem
   */
  code?: string | null
  /**
   * User defined item name
   * @type {string}
   * @memberof LinkedInvoiceItem
   */
  name?: string | null
}

export function LinkedInvoiceItemFromJSON(json: any): LinkedInvoiceItem {
  return LinkedInvoiceItemFromJSONTyped(json, false)
}

export function LinkedInvoiceItemFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): LinkedInvoiceItem {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    code: !exists(json, 'code') ? undefined : json['code'],
    name: !exists(json, 'name') ? undefined : json['name']
  }
}

export function LinkedInvoiceItemToJSON(value?: LinkedInvoiceItem | null): any {
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
