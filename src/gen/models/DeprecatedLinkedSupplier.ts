/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.7.5
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
 * @interface DeprecatedLinkedSupplier
 */
export interface DeprecatedLinkedSupplier {
  /**
   * A unique identifier for an object.
   * @type {string}
   * @memberof DeprecatedLinkedSupplier
   */
  readonly id?: string
  /**
   * The display ID of the supplier.
   * @type {string}
   * @memberof DeprecatedLinkedSupplier
   */
  readonly display_id?: string | null
  /**
   * The display name of the supplier.
   * @type {string}
   * @memberof DeprecatedLinkedSupplier
   */
  display_name?: string | null
  /**
   * The company name of the supplier.
   * @type {string}
   * @memberof DeprecatedLinkedSupplier
   */
  readonly company_name?: string | null
  /**
   *
   * @type {Address}
   * @memberof DeprecatedLinkedSupplier
   */
  address?: Address
}

export function DeprecatedLinkedSupplierFromJSON(json: any): DeprecatedLinkedSupplier {
  return DeprecatedLinkedSupplierFromJSONTyped(json, false)
}

export function DeprecatedLinkedSupplierFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): DeprecatedLinkedSupplier {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    display_id: !exists(json, 'display_id') ? undefined : json['display_id'],
    display_name: !exists(json, 'display_name') ? undefined : json['display_name'],
    company_name: !exists(json, 'company_name') ? undefined : json['company_name'],
    address: !exists(json, 'address') ? undefined : AddressFromJSON(json['address'])
  }
}

export function DeprecatedLinkedSupplierToJSON(value?: DeprecatedLinkedSupplier | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    display_name: value.display_name,
    address: AddressToJSON(value.address)
  }
}
