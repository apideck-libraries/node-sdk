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
 * @interface Session
 */
export interface Session {
  /**
   *
   * @type {string}
   * @memberof Session
   */
  session_uri?: string
}

export function SessionFromJSON(json: any): Session {
  return SessionFromJSONTyped(json, false)
}

export function SessionFromJSONTyped(json: any, ignoreDiscriminator: boolean): Session {
  if (json === undefined || json === null) {
    return json
  }
  return {
    session_uri: !exists(json, 'session_uri') ? undefined : json['session_uri']
  }
}

export function SessionToJSON(value?: Session | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    session_uri: value.session_uri
  }
}
