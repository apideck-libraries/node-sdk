/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.3.4
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
/**
 * Details of the branch for which the job is created.
 * @export
 * @interface Branch
 */
export interface Branch {
  /**
   * A unique identifier for an object.
   * @type {string}
   * @memberof Branch
   */
  readonly id?: string
  /**
   * Name of the branch.
   * @type {string}
   * @memberof Branch
   */
  name?: string
}

export function BranchFromJSON(json: any): Branch {
  return BranchFromJSONTyped(json, false)
}

export function BranchFromJSONTyped(json: any, ignoreDiscriminator: boolean): Branch {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    name: !exists(json, 'name') ? undefined : json['name']
  }
}

export function BranchToJSON(value?: Branch | null): any {
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
