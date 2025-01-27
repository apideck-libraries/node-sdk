/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.11.0
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
 * @interface ApplicationStage
 */
export interface ApplicationStage {
  /**
   * Stage the candidate should be in. If omitted, the default stage for this job will be used.
   * @type {string}
   * @memberof ApplicationStage
   */
  id?: string | null
  /**
   *
   * @type {string}
   * @memberof ApplicationStage
   */
  name?: string | null
}

export function ApplicationStageFromJSON(json: any): ApplicationStage {
  return ApplicationStageFromJSONTyped(json, false)
}

export function ApplicationStageFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ApplicationStage {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    name: !exists(json, 'name') ? undefined : json['name']
  }
}

export function ApplicationStageToJSON(value?: ApplicationStage | null): any {
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
