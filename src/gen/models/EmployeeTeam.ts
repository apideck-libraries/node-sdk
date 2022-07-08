/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.34.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
/**
 * The team the user is currently in.
 * @export
 * @interface EmployeeTeam
 */
export interface EmployeeTeam {
  /**
   *
   * @type {string}
   * @memberof EmployeeTeam
   */
  id?: string | null
  /**
   *
   * @type {string}
   * @memberof EmployeeTeam
   */
  name?: string | null
}

export function EmployeeTeamFromJSON(json: any): EmployeeTeam {
  return EmployeeTeamFromJSONTyped(json, false)
}

export function EmployeeTeamFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmployeeTeam {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    name: !exists(json, 'name') ? undefined : json['name']
  }
}

export function EmployeeTeamToJSON(value?: EmployeeTeam | null): any {
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
