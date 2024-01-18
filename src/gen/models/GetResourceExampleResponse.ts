/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.2.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ResourceExample, ResourceExampleFromJSON, ResourceExampleToJSON } from './ResourceExample'

/**
 *
 * @export
 * @interface GetResourceExampleResponse
 */
export interface GetResourceExampleResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetResourceExampleResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetResourceExampleResponse
   */
  status: string
  /**
   *
   * @type {ResourceExample}
   * @memberof GetResourceExampleResponse
   */
  data: ResourceExample
}

export function GetResourceExampleResponseFromJSON(json: any): GetResourceExampleResponse {
  return GetResourceExampleResponseFromJSONTyped(json, false)
}

export function GetResourceExampleResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetResourceExampleResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    data: ResourceExampleFromJSON(json['data'])
  }
}

export function GetResourceExampleResponseToJSON(value?: GetResourceExampleResponse | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    status_code: value.status_code,
    status: value.status,
    data: ResourceExampleToJSON(value.data)
  }
}
