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

import {
  GetConsumersResponseData,
  GetConsumersResponseDataFromJSON,
  GetConsumersResponseDataToJSON
} from './GetConsumersResponseData'

/**
 *
 * @export
 * @interface GetConsumersResponse
 */
export interface GetConsumersResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetConsumersResponse
   */
  statusCode: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetConsumersResponse
   */
  status: string
  /**
   *
   * @type {Array<GetConsumersResponseData>}
   * @memberof GetConsumersResponse
   */
  data: Array<GetConsumersResponseData>
}

export function GetConsumersResponseFromJSON(json: any): GetConsumersResponse {
  return GetConsumersResponseFromJSONTyped(json, false)
}

export function GetConsumersResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetConsumersResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    statusCode: json['status_code'],
    status: json['status'],
    data: (json['data'] as Array<any>).map(GetConsumersResponseDataFromJSON)
  }
}

export function GetConsumersResponseToJSON(value?: GetConsumersResponse | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    status_code: value.statusCode,
    status: value.status,
    data: (value.data as Array<any>).map(GetConsumersResponseDataToJSON)
  }
}
