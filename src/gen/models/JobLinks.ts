/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 9.7.4
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
 * @interface JobLinks
 */
export interface JobLinks {
  /**
   *
   * @type {string}
   * @memberof JobLinks
   */
  type?: JobLinksType
  /**
   *
   * @type {string}
   * @memberof JobLinks
   */
  url?: string
}

/**
 * @export
 * @enum {string}
 */
export enum JobLinksType {
  portal = 'job_portal',
  description = 'job_description'
}

export function JobLinksFromJSON(json: any): JobLinks {
  return JobLinksFromJSONTyped(json, false)
}

export function JobLinksFromJSONTyped(json: any, ignoreDiscriminator: boolean): JobLinks {
  if (json === undefined || json === null) {
    return json
  }
  return {
    type: !exists(json, 'type') ? undefined : json['type'],
    url: !exists(json, 'url') ? undefined : json['url']
  }
}

export function JobLinksToJSON(value?: JobLinks | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    type: value.type,
    url: value.url
  }
}