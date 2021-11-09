/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.5.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Opportunity, OpportunityFromJSON, OpportunityToJSON } from './Opportunity'

/**
 *
 * @export
 * @interface GetOpportunityResponse
 */
export interface GetOpportunityResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetOpportunityResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetOpportunityResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetOpportunityResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetOpportunityResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof GetOpportunityResponse
   */
  operation: string
  /**
   *
   * @type {Opportunity}
   * @memberof GetOpportunityResponse
   */
  data: Opportunity
}

export function GetOpportunityResponseFromJSON(json: any): GetOpportunityResponse {
  return GetOpportunityResponseFromJSONTyped(json, false)
}

export function GetOpportunityResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetOpportunityResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: OpportunityFromJSON(json['data'])
  }
}

export function GetOpportunityResponseToJSON(value?: GetOpportunityResponse | null): any {
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
    data: OpportunityToJSON(value.data)
  }
}
