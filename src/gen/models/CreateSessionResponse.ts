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

import { Session, SessionFromJSON, SessionToJSON } from './Session'

/**
 *
 * @export
 * @interface CreateSessionResponse
 */
export interface CreateSessionResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof CreateSessionResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof CreateSessionResponse
   */
  status: string
  /**
   *
   * @type {Session}
   * @memberof CreateSessionResponse
   */
  data: Session
}

export function CreateSessionResponseFromJSON(json: any): CreateSessionResponse {
  return CreateSessionResponseFromJSONTyped(json, false)
}

export function CreateSessionResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): CreateSessionResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    data: SessionFromJSON(json['data'])
  }
}

export function CreateSessionResponseToJSON(value?: CreateSessionResponse | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    status_code: value.status_code,
    status: value.status,
    data: SessionToJSON(value.data)
  }
}
