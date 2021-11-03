/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.3.2
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
 * @interface DeletePipelineResponse
 */
export interface DeletePipelineResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof DeletePipelineResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof DeletePipelineResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof DeletePipelineResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof DeletePipelineResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof DeletePipelineResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof DeletePipelineResponse
   */
  data: UnifiedId
}

export function DeletePipelineResponseFromJSON(json: any): DeletePipelineResponse {
  return DeletePipelineResponseFromJSONTyped(json, false)
}

export function DeletePipelineResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): DeletePipelineResponse {
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

export function DeletePipelineResponseToJSON(value?: DeletePipelineResponse | null): any {
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
