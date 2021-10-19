/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 7.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
/**
 * The customer this invoice is linked to.
 * @export
 * @interface Customer1
 */
export interface Customer1 {
  /**
   *
   * @type {string}
   * @memberof Customer1
   */
  id: string
  /**
   *
   * @type {string}
   * @memberof Customer1
   */
  company_name?: string | null
}

export function Customer1FromJSON(json: any): Customer1 {
  return Customer1FromJSONTyped(json, false)
}

export function Customer1FromJSONTyped(json: any, ignoreDiscriminator: boolean): Customer1 {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: json['id'],
    company_name: !exists(json, 'company_name') ? undefined : json['company_name']
  }
}

export function Customer1ToJSON(value?: Customer1 | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    id: value.id,
    company_name: value.company_name
  }
}
