/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 5.4.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

// Override template imports only to fix circulr dependencies generated by default template
// https://github.com/OpenAPITools/openapi-generator/issues/6140

import { exists } from '../runtime'
import { MetaCursors, MetaCursorsFromJSON, MetaCursorsToJSON } from './MetaCursors'

/**
 * Reponse metadata
 * @export
 * @interface Meta
 */
export interface Meta {
  /**
   * Number of items returned in the data property of the response
   * @type {number}
   * @memberof Meta
   */
  items_on_page?: number
  /**
   *
   * @type {MetaCursors}
   * @memberof Meta
   */
  cursors?: MetaCursors
}

export function MetaFromJSON(json: any): Meta {
  return MetaFromJSONTyped(json, false)
}

export function MetaFromJSONTyped(json: any, ignoreDiscriminator: boolean): Meta {
  if (json === undefined || json === null) {
    return json
  }
  return {
    items_on_page: !exists(json, 'items_on_page') ? undefined : json['items_on_page'],
    cursors: !exists(json, 'cursors') ? undefined : MetaCursorsFromJSON(json['cursors'])
  }
}

export function MetaToJSON(value?: Meta | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    items_on_page: value.items_on_page,
    cursors: MetaCursorsToJSON(value.cursors)
  }
}
