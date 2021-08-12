/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 5.0.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

// Override template imports only to fix circulr dependencies generated by default template
// https://github.com/OpenAPITools/openapi-generator/issues/6140

import { UnifiedId, UnifiedIdFromJSON, UnifiedIdToJSON } from './UnifiedId'

/**
 *
 * @export
 * @interface UpdatePipelineResponse
 */
export interface UpdatePipelineResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof UpdatePipelineResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof UpdatePipelineResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof UpdatePipelineResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof UpdatePipelineResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof UpdatePipelineResponse
   */
  operation: string
  /**
   *
   * @type {UnifiedId}
   * @memberof UpdatePipelineResponse
   */
  data: UnifiedId
}

export function UpdatePipelineResponseFromJSON(json: any): UpdatePipelineResponse {
  return UpdatePipelineResponseFromJSONTyped(json, false)
}

export function UpdatePipelineResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): UpdatePipelineResponse {
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

export function UpdatePipelineResponseToJSON(value?: UpdatePipelineResponse | null): any {
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
