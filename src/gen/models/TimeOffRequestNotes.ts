/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 9.7.6
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
 * @interface TimeOffRequestNotes
 */
export interface TimeOffRequestNotes {
  /**
   *
   * @type {string}
   * @memberof TimeOffRequestNotes
   */
  employee?: string
  /**
   *
   * @type {string}
   * @memberof TimeOffRequestNotes
   */
  manager?: string
}

export function TimeOffRequestNotesFromJSON(json: any): TimeOffRequestNotes {
  return TimeOffRequestNotesFromJSONTyped(json, false)
}

export function TimeOffRequestNotesFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): TimeOffRequestNotes {
  if (json === undefined || json === null) {
    return json
  }
  return {
    employee: !exists(json, 'employee') ? undefined : json['employee'],
    manager: !exists(json, 'manager') ? undefined : json['manager']
  }
}

export function TimeOffRequestNotesToJSON(value?: TimeOffRequestNotes | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    employee: value.employee,
    manager: value.manager
  }
}
