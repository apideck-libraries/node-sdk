/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.11.5
 * Contact: support@apideck.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { Address, AddressFromJSON, AddressToJSON } from './Address'
import { PassThroughBody, PassThroughBodyFromJSON, PassThroughBodyToJSON } from './PassThroughBody'
import {
  SubsidiaryReference,
  SubsidiaryReferenceFromJSON,
  SubsidiaryReferenceToJSON
} from './SubsidiaryReference'

/**
 *
 * @export
 * @interface AccountingLocation
 */
export interface AccountingLocation {
  /**
   * A unique identifier for an object.
   * @type {string}
   * @memberof AccountingLocation
   */
  readonly id?: string
  /**
   * A unique identifier for an object.
   * @type {string}
   * @memberof AccountingLocation
   */
  parent_id?: string | null
  /**
   * The name of the company.
   * @type {string}
   * @memberof AccountingLocation
   */
  company_name?: string | null
  /**
   * The display name of the location.
   * @type {string}
   * @memberof AccountingLocation
   */
  display_name?: string | null
  /**
   * Based on the status some functionality is enabled or disabled.
   * @type {string}
   * @memberof AccountingLocation
   */
  status?: AccountingLocationStatus
  /**
   *
   * @type {Array<Address>}
   * @memberof AccountingLocation
   */
  addresses?: Array<Address>
  /**
   *
   * @type {Array<SubsidiaryReference>}
   * @memberof AccountingLocation
   */
  subsidiaries?: Array<SubsidiaryReference>
  /**
   * When custom mappings are configured on the resource, the result is included here.
   * @type {object}
   * @memberof AccountingLocation
   */
  readonly custom_mappings?: object | null
  /**
   * A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object.
   * @type {string}
   * @memberof AccountingLocation
   */
  row_version?: string | null
  /**
   * The user who last updated the object.
   * @type {string}
   * @memberof AccountingLocation
   */
  readonly updated_by?: string | null
  /**
   * The user who created the object.
   * @type {string}
   * @memberof AccountingLocation
   */
  readonly created_by?: string | null
  /**
   * The date and time when the object was last updated.
   * @type {Date}
   * @memberof AccountingLocation
   */
  readonly updated_at?: Date | null
  /**
   * The date and time when the object was created.
   * @type {Date}
   * @memberof AccountingLocation
   */
  readonly created_at?: Date | null
  /**
   *
   * @type {PassThroughBody}
   * @memberof AccountingLocation
   */
  pass_through?: PassThroughBody
}

/**
 * @export
 * @enum {string}
 */
export enum AccountingLocationStatus {
  active = 'active',
  inactive = 'inactive'
}

export function AccountingLocationFromJSON(json: any): AccountingLocation {
  return AccountingLocationFromJSONTyped(json, false)
}

export function AccountingLocationFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): AccountingLocation {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    parent_id: !exists(json, 'parent_id') ? undefined : json['parent_id'],
    company_name: !exists(json, 'company_name') ? undefined : json['company_name'],
    display_name: !exists(json, 'display_name') ? undefined : json['display_name'],
    status: !exists(json, 'status') ? undefined : json['status'],
    addresses: !exists(json, 'addresses')
      ? undefined
      : (json['addresses'] as Array<any>).map(AddressFromJSON),
    subsidiaries: !exists(json, 'subsidiaries')
      ? undefined
      : (json['subsidiaries'] as Array<any>).map(SubsidiaryReferenceFromJSON),
    custom_mappings: !exists(json, 'custom_mappings') ? undefined : json['custom_mappings'],
    row_version: !exists(json, 'row_version') ? undefined : json['row_version'],
    updated_by: !exists(json, 'updated_by') ? undefined : json['updated_by'],
    created_by: !exists(json, 'created_by') ? undefined : json['created_by'],
    updated_at: !exists(json, 'updated_at')
      ? undefined
      : json['updated_at'] === null
      ? null
      : new Date(json['updated_at']),
    created_at: !exists(json, 'created_at')
      ? undefined
      : json['created_at'] === null
      ? null
      : new Date(json['created_at']),
    pass_through: !exists(json, 'pass_through')
      ? undefined
      : PassThroughBodyFromJSON(json['pass_through'])
  }
}

export function AccountingLocationToJSON(value?: AccountingLocation | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    parent_id: value.parent_id,
    company_name: value.company_name,
    display_name: value.display_name,
    status: value.status,
    addresses:
      value.addresses === undefined
        ? undefined
        : (value.addresses as Array<any>).map(AddressToJSON),
    subsidiaries:
      value.subsidiaries === undefined
        ? undefined
        : (value.subsidiaries as Array<any>).map(SubsidiaryReferenceToJSON),
    row_version: value.row_version,
    pass_through: PassThroughBodyToJSON(value.pass_through)
  }
}
