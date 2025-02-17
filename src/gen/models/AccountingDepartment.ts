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
import { PassThroughBody, PassThroughBodyFromJSON, PassThroughBodyToJSON } from './PassThroughBody'
import {
  SubsidiaryReference,
  SubsidiaryReferenceFromJSON,
  SubsidiaryReferenceToJSON
} from './SubsidiaryReference'

/**
 *
 * @export
 * @interface AccountingDepartment
 */
export interface AccountingDepartment {
  /**
   * A unique identifier for an object.
   * @type {string}
   * @memberof AccountingDepartment
   */
  readonly id?: string
  /**
   * A unique identifier for an object.
   * @type {string}
   * @memberof AccountingDepartment
   */
  parent_id?: string | null
  /**
   * The name of the department.
   * @type {string}
   * @memberof AccountingDepartment
   */
  name?: string | null
  /**
   * Based on the status some functionality is enabled or disabled.
   * @type {string}
   * @memberof AccountingDepartment
   */
  status?: AccountingDepartmentStatus
  /**
   *
   * @type {Array<SubsidiaryReference>}
   * @memberof AccountingDepartment
   */
  subsidiaries?: Array<SubsidiaryReference>
  /**
   * When custom mappings are configured on the resource, the result is included here.
   * @type {object}
   * @memberof AccountingDepartment
   */
  readonly custom_mappings?: object | null
  /**
   * A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object.
   * @type {string}
   * @memberof AccountingDepartment
   */
  row_version?: string | null
  /**
   * The user who last updated the object.
   * @type {string}
   * @memberof AccountingDepartment
   */
  readonly updated_by?: string | null
  /**
   * The user who created the object.
   * @type {string}
   * @memberof AccountingDepartment
   */
  readonly created_by?: string | null
  /**
   * The date and time when the object was last updated.
   * @type {Date}
   * @memberof AccountingDepartment
   */
  readonly updated_at?: Date | null
  /**
   * The date and time when the object was created.
   * @type {Date}
   * @memberof AccountingDepartment
   */
  readonly created_at?: Date | null
  /**
   *
   * @type {PassThroughBody}
   * @memberof AccountingDepartment
   */
  pass_through?: PassThroughBody
}

/**
 * @export
 * @enum {string}
 */
export enum AccountingDepartmentStatus {
  active = 'active',
  inactive = 'inactive'
}

export function AccountingDepartmentFromJSON(json: any): AccountingDepartment {
  return AccountingDepartmentFromJSONTyped(json, false)
}

export function AccountingDepartmentFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): AccountingDepartment {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    parent_id: !exists(json, 'parent_id') ? undefined : json['parent_id'],
    name: !exists(json, 'name') ? undefined : json['name'],
    status: !exists(json, 'status') ? undefined : json['status'],
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

export function AccountingDepartmentToJSON(value?: AccountingDepartment | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    parent_id: value.parent_id,
    name: value.name,
    status: value.status,
    subsidiaries:
      value.subsidiaries === undefined
        ? undefined
        : (value.subsidiaries as Array<any>).map(SubsidiaryReferenceToJSON),
    row_version: value.row_version,
    pass_through: PassThroughBodyToJSON(value.pass_through)
  }
}
