/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 5.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

// Override template imports only to fix circulr dependencies generated by default template
// https://github.com/OpenAPITools/openapi-generator/issues/6140

import { Account, AccountFromJSON, AccountToJSON } from './Account'

/**
 *
 * @export
 * @interface GetAccountResponse
 */
export interface GetAccountResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetAccountResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetAccountResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetAccountResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetAccountResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof GetAccountResponse
   */
  operation: string
  /**
   *
   * @type {Account}
   * @memberof GetAccountResponse
   */
  data: Account
}

export function GetAccountResponseFromJSON(json: any): GetAccountResponse {
  return GetAccountResponseFromJSONTyped(json, false)
}

export function GetAccountResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetAccountResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: AccountFromJSON(json['data'])
  }
}

export function GetAccountResponseToJSON(value?: GetAccountResponse | null): any {
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
    data: AccountToJSON(value.data)
  }
}
