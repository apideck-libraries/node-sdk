/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.11.4
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
 * @interface Assignee
 */
export interface Assignee {
  /**
   * A unique identifier for an object.
   * @type {string}
   * @memberof Assignee
   */
  id: string
  /**
   *
   * @type {string}
   * @memberof Assignee
   */
  readonly username?: string | null
}

export function AssigneeFromJSON(json: any): Assignee {
  return AssigneeFromJSONTyped(json, false)
}

export function AssigneeFromJSONTyped(json: any, ignoreDiscriminator: boolean): Assignee {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: json['id'],
    username: !exists(json, 'username') ? undefined : json['username']
  }
}

export function AssigneeToJSON(value?: Assignee | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    id: value.id
  }
}
