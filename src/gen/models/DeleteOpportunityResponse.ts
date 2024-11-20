/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.8.1
 * Contact: support@apideck.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { UnifiedId, UnifiedIdFromJSON, UnifiedIdToJSON } from './UnifiedId'

/**
 *
 * @export
 * @interface DeleteOpportunityResponse
 */
export interface DeleteOpportunityResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof DeleteOpportunityResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof DeleteOpportunityResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof DeleteOpportunityResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof DeleteOpportunityResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof DeleteOpportunityResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof DeleteOpportunityResponse
   */
  data: UnifiedId
}

export function DeleteOpportunityResponseFromJSON(json: any): DeleteOpportunityResponse {
  return DeleteOpportunityResponseFromJSONTyped(json, false)
}

export function DeleteOpportunityResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): DeleteOpportunityResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: UnifiedIdFromJSON(json['data'])
  }
}

export function DeleteOpportunityResponseToJSON(value?: DeleteOpportunityResponse | null): any {
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
    data: UnifiedIdToJSON(value.data)
  }
}
