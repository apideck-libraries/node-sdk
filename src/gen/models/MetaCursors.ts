/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.66.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
/**
 * Cursors to navigate to previous or next pages through the API
 * @export
 * @interface MetaCursors
 */
export interface MetaCursors {
  /**
   * Cursor to navigate to the previous page of results through the API
   * @type {string}
   * @memberof MetaCursors
   */
  previous?: string | null
  /**
   * Cursor to navigate to the current page of results through the API
   * @type {string}
   * @memberof MetaCursors
   */
  current?: string | null
  /**
   * Cursor to navigate to the next page of results through the API
   * @type {string}
   * @memberof MetaCursors
   */
  next?: string | null
}

export function MetaCursorsFromJSON(json: any): MetaCursors {
  return MetaCursorsFromJSONTyped(json, false)
}

export function MetaCursorsFromJSONTyped(json: any, ignoreDiscriminator: boolean): MetaCursors {
  if (json === undefined || json === null) {
    return json
  }
  return {
    previous: !exists(json, 'previous') ? undefined : json['previous'],
    current: !exists(json, 'current') ? undefined : json['current'],
    next: !exists(json, 'next') ? undefined : json['next']
  }
}

export function MetaCursorsToJSON(value?: MetaCursors | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    previous: value.previous,
    current: value.current,
    next: value.next
  }
}
