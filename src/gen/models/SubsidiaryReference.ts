/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.12.3
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
 * @interface SubsidiaryReference
 */
export interface SubsidiaryReference {
  /**
   * A unique identifier for an object.
   * @type {string}
   * @memberof SubsidiaryReference
   */
  readonly id?: string
  /**
   * The name of the company.
   * @type {string}
   * @memberof SubsidiaryReference
   */
  name?: string | null
}

export function SubsidiaryReferenceFromJSON(json: any): SubsidiaryReference {
  return SubsidiaryReferenceFromJSONTyped(json, false)
}

export function SubsidiaryReferenceFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): SubsidiaryReference {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    name: !exists(json, 'name') ? undefined : json['name']
  }
}

export function SubsidiaryReferenceToJSON(value?: SubsidiaryReference | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    name: value.name
  }
}
