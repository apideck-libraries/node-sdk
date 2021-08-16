/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 5.2.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

// Override template imports only to fix circulr dependencies generated by default template
// https://github.com/OpenAPITools/openapi-generator/issues/6140

import { exists } from '../runtime'
/**
 *
 * @export
 * @interface Filter
 */
export interface Filter {
  /**
   *
   * @type {string}
   * @memberof Filter
   */
  connector_id?: string | null
  /**
   *
   * @type {number}
   * @memberof Filter
   */
  status_code?: number | null
  /**
   *
   * @type {string}
   * @memberof Filter
   */
  exclude_unified_apis?: string | null
}

export function FilterFromJSON(json: any): Filter {
  return FilterFromJSONTyped(json, false)
}

export function FilterFromJSONTyped(json: any, ignoreDiscriminator: boolean): Filter {
  if (json === undefined || json === null) {
    return json
  }
  return {
    connector_id: !exists(json, 'connector_id') ? undefined : json['connector_id'],
    status_code: !exists(json, 'status_code') ? undefined : json['status_code'],
    exclude_unified_apis: !exists(json, 'exclude_unified_apis')
      ? undefined
      : json['exclude_unified_apis']
  }
}

export function FilterToJSON(value?: Filter | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    connector_id: value.connector_id,
    status_code: value.status_code,
    exclude_unified_apis: value.exclude_unified_apis
  }
}
