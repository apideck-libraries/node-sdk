/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 5.0.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

// Override template imports only to fix circulr dependencies generated by default template
// https://github.com/OpenAPITools/openapi-generator/issues/6140

import { exists } from '../runtime'
/**
 * The customer this invoice is linked to.
 * @export
 * @interface Customer
 */
export interface Customer {
  /**
   *
   * @type {string}
   * @memberof Customer
   */
  readonly id?: string
  /**
   *
   * @type {string}
   * @memberof Customer
   */
  company_name?: string | null
}

export function CustomerFromJSON(json: any): Customer {
  return CustomerFromJSONTyped(json, false)
}

export function CustomerFromJSONTyped(json: any, ignoreDiscriminator: boolean): Customer {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    company_name: !exists(json, 'company_name') ? undefined : json['company_name']
  }
}

export function CustomerToJSON(value?: Customer | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    company_name: value.company_name
  }
}
