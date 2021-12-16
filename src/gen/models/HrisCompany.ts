/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.10.1
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
 * @interface HrisCompany
 */
export interface HrisCompany {
  /**
   *
   * @type {string}
   * @memberof HrisCompany
   */
  readonly id?: string
  /**
   *
   * @type {string}
   * @memberof HrisCompany
   */
  legal_name?: string
  /**
   *
   * @type {string}
   * @memberof HrisCompany
   */
  display_name?: string
  /**
   *
   * @type {string}
   * @memberof HrisCompany
   */
  debtor_id?: string
  /**
   *
   * @type {boolean}
   * @memberof HrisCompany
   */
  readonly deleted?: boolean
  /**
   *
   * @type {string}
   * @memberof HrisCompany
   */
  readonly updated_by?: string | null
  /**
   *
   * @type {string}
   * @memberof HrisCompany
   */
  readonly created_by?: string | null
  /**
   *
   * @type {Date}
   * @memberof HrisCompany
   */
  readonly updated_at?: Date
  /**
   *
   * @type {Date}
   * @memberof HrisCompany
   */
  readonly created_at?: Date
}

export function HrisCompanyFromJSON(json: any): HrisCompany {
  return HrisCompanyFromJSONTyped(json, false)
}

export function HrisCompanyFromJSONTyped(json: any, ignoreDiscriminator: boolean): HrisCompany {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    legal_name: !exists(json, 'legal_name') ? undefined : json['legal_name'],
    display_name: !exists(json, 'display_name') ? undefined : json['display_name'],
    debtor_id: !exists(json, 'debtor_id') ? undefined : json['debtor_id'],
    deleted: !exists(json, 'deleted') ? undefined : json['deleted'],
    updated_by: !exists(json, 'updated_by') ? undefined : json['updated_by'],
    created_by: !exists(json, 'created_by') ? undefined : json['created_by'],
    updated_at: !exists(json, 'updated_at') ? undefined : new Date(json['updated_at']),
    created_at: !exists(json, 'created_at') ? undefined : new Date(json['created_at'])
  }
}

export function HrisCompanyToJSON(value?: HrisCompany | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    legal_name: value.legal_name,
    display_name: value.display_name,
    debtor_id: value.debtor_id
  }
}
