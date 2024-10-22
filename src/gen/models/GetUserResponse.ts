/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.7.7
 * Contact: support@apideck.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { User, UserFromJSON, UserToJSON } from './User'

/**
 *
 * @export
 * @interface GetUserResponse
 */
export interface GetUserResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetUserResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetUserResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetUserResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetUserResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof GetUserResponse
   */
  operation: string
  /**
   *
   * @type {User}
   * @memberof GetUserResponse
   */
  data: User
}

export function GetUserResponseFromJSON(json: any): GetUserResponse {
  return GetUserResponseFromJSONTyped(json, false)
}

export function GetUserResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetUserResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: UserFromJSON(json['data'])
  }
}

export function GetUserResponseToJSON(value?: GetUserResponse | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    status_code: value.status_code,
    status: value.status,
    service: value.service,
    resource: value.resource,
    operation: value.operation,
    data: UserToJSON(value.data)
  }
}
