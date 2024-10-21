/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.7.6
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
 * @interface PhoneNumber
 */
export interface PhoneNumber {
  /**
   * The phone number
   * @type {string}
   * @memberof PhoneNumber
   */
  number: string
  /**
   * Unique identifier of the phone number
   * @type {string}
   * @memberof PhoneNumber
   */
  id?: string | null
  /**
   * The country code of the phone number, e.g. +1
   * @type {string}
   * @memberof PhoneNumber
   */
  country_code?: string | null
  /**
   * The area code of the phone number, e.g. 323
   * @type {string}
   * @memberof PhoneNumber
   */
  area_code?: string | null
  /**
   * The extension of the phone number
   * @type {string}
   * @memberof PhoneNumber
   */
  extension?: string | null
  /**
   * The type of phone number
   * @type {string}
   * @memberof PhoneNumber
   */
  type?: PhoneNumberType
}

/**
 * @export
 * @enum {string}
 */
export enum PhoneNumberType {
  primary = 'primary',
  secondary = 'secondary',
  home = 'home',
  work = 'work',
  office = 'office',
  mobile = 'mobile',
  assistant = 'assistant',
  fax = 'fax',
  direct_dial_in = 'direct-dial-in',
  personal = 'personal',
  other = 'other'
}

export function PhoneNumberFromJSON(json: any): PhoneNumber {
  return PhoneNumberFromJSONTyped(json, false)
}

export function PhoneNumberFromJSONTyped(json: any, ignoreDiscriminator: boolean): PhoneNumber {
  if (json === undefined || json === null) {
    return json
  }
  return {
    number: json['number'],
    id: !exists(json, 'id') ? undefined : json['id'],
    country_code: !exists(json, 'country_code') ? undefined : json['country_code'],
    area_code: !exists(json, 'area_code') ? undefined : json['area_code'],
    extension: !exists(json, 'extension') ? undefined : json['extension'],
    type: !exists(json, 'type') ? undefined : json['type']
  }
}

export function PhoneNumberToJSON(value?: PhoneNumber | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    number: value.number,
    id: value.id,
    country_code: value.country_code,
    area_code: value.area_code,
    extension: value.extension,
    type: value.type
  }
}
