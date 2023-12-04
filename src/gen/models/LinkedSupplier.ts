/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { Address, AddressFromJSON, AddressToJSON } from './Address'

/**
 * The supplier this entity is linked to.
 * @export
 * @interface LinkedSupplier
 */
export interface LinkedSupplier {
  /**
   * The ID of the supplier this entity is linked to.
   * @type {string}
   * @memberof LinkedSupplier
   */
  id: string
  /**
   * The display ID of the supplier.
   * @type {string}
   * @memberof LinkedSupplier
   */
  readonly display_id?: string | null
  /**
   * The display name of the supplier.
   * @type {string}
   * @memberof LinkedSupplier
   */
  display_name?: string | null
  /**
   * The company name of the supplier.
   * @type {string}
   * @memberof LinkedSupplier
   */
  readonly company_name?: string | null
  /**
   *
   * @type {Address}
   * @memberof LinkedSupplier
   */
  address?: Address
}

export function LinkedSupplierFromJSON(json: any): LinkedSupplier {
  return LinkedSupplierFromJSONTyped(json, false)
}

export function LinkedSupplierFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): LinkedSupplier {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: json['id'],
    display_id: !exists(json, 'display_id') ? undefined : json['display_id'],
    display_name: !exists(json, 'display_name') ? undefined : json['display_name'],
    company_name: !exists(json, 'company_name') ? undefined : json['company_name'],
    address: !exists(json, 'address') ? undefined : AddressFromJSON(json['address'])
  }
}

export function LinkedSupplierToJSON(value?: LinkedSupplier | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    id: value.id,
    display_name: value.display_name,
    address: AddressToJSON(value.address)
  }
}
