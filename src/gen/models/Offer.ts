/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.74.0
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
 * @interface Offer
 */
export interface Offer {
  /**
   *
   * @type {string}
   * @memberof Offer
   */
  readonly id?: string
  /**
   *
   * @type {string}
   * @memberof Offer
   */
  application_id?: string
  /**
   *
   * @type {string}
   * @memberof Offer
   */
  readonly updated_by?: string | null
  /**
   *
   * @type {string}
   * @memberof Offer
   */
  readonly created_by?: string | null
  /**
   *
   * @type {Date}
   * @memberof Offer
   */
  readonly updated_at?: Date
  /**
   *
   * @type {Date}
   * @memberof Offer
   */
  readonly created_at?: Date
}

export function OfferFromJSON(json: any): Offer {
  return OfferFromJSONTyped(json, false)
}

export function OfferFromJSONTyped(json: any, ignoreDiscriminator: boolean): Offer {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    application_id: !exists(json, 'application_id') ? undefined : json['application_id'],
    updated_by: !exists(json, 'updated_by') ? undefined : json['updated_by'],
    created_by: !exists(json, 'created_by') ? undefined : json['created_by'],
    updated_at: !exists(json, 'updated_at') ? undefined : new Date(json['updated_at']),
    created_at: !exists(json, 'created_at') ? undefined : new Date(json['created_at'])
  }
}

export function OfferToJSON(value?: Offer | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    application_id: value.application_id
  }
}
