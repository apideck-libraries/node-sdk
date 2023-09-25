/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 9.9.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Application, ApplicationFromJSON, ApplicationToJSON } from './Application'

/**
 *
 * @export
 * @interface GetApplicationResponse
 */
export interface GetApplicationResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetApplicationResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetApplicationResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetApplicationResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetApplicationResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof GetApplicationResponse
   */
  operation: string
  /**
   *
   * @type {Application}
   * @memberof GetApplicationResponse
   */
  data: Application
}

export function GetApplicationResponseFromJSON(json: any): GetApplicationResponse {
  return GetApplicationResponseFromJSONTyped(json, false)
}

export function GetApplicationResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetApplicationResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: ApplicationFromJSON(json['data'])
  }
}

export function GetApplicationResponseToJSON(value?: GetApplicationResponse | null): any {
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
    data: ApplicationToJSON(value.data)
  }
}
