/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.8.2
 * Contact: support@apideck.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
/**
 * The team the person is currently in.
 * @export
 * @interface Team
 */
export interface Team {
  /**
   * The unique identifier of the team.
   * @type {string}
   * @memberof Team
   */
  id?: string | null
  /**
   * The name of the team.
   * @type {string}
   * @memberof Team
   */
  name?: string | null
}

export function TeamFromJSON(json: any): Team {
  return TeamFromJSONTyped(json, false)
}

export function TeamFromJSONTyped(json: any, ignoreDiscriminator: boolean): Team {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    name: !exists(json, 'name') ? undefined : json['name']
  }
}

export function TeamToJSON(value?: Team | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    id: value.id,
    name: value.name
  }
}
