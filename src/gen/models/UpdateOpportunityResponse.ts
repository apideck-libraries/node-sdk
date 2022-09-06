/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.49.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { UnifiedId, UnifiedIdFromJSON, UnifiedIdToJSON } from './UnifiedId'

/**
 *
 * @export
 * @interface UpdateOpportunityResponse
 */
export interface UpdateOpportunityResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof UpdateOpportunityResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof UpdateOpportunityResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof UpdateOpportunityResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof UpdateOpportunityResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof UpdateOpportunityResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof UpdateOpportunityResponse
   */
  data: UnifiedId
}

export function UpdateOpportunityResponseFromJSON(json: any): UpdateOpportunityResponse {
  return UpdateOpportunityResponseFromJSONTyped(json, false)
}

export function UpdateOpportunityResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): UpdateOpportunityResponse {
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

export function UpdateOpportunityResponseToJSON(value?: UpdateOpportunityResponse | null): any {
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
