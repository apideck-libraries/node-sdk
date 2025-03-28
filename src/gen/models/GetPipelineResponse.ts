/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.12.4
 * Contact: support@apideck.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { Pipeline, PipelineFromJSON, PipelineToJSON } from './Pipeline'
import { Raw, RawFromJSON, RawToJSON } from './Raw'

/**
 *
 * @export
 * @interface GetPipelineResponse
 */
export interface GetPipelineResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetPipelineResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetPipelineResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetPipelineResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetPipelineResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof GetPipelineResponse
   */
  operation: string
  /**
   *
   * @type {Pipeline}
   * @memberof GetPipelineResponse
   */
  data: Pipeline
  /**
   *
   * @type {Raw}
   * @memberof GetPipelineResponse
   */
  _raw?: Raw | null
}

export function GetPipelineResponseFromJSON(json: any): GetPipelineResponse {
  return GetPipelineResponseFromJSONTyped(json, false)
}

export function GetPipelineResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetPipelineResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: PipelineFromJSON(json['data']),
    _raw: !exists(json, '_raw') ? undefined : RawFromJSON(json['_raw'])
  }
}

export function GetPipelineResponseToJSON(value?: GetPipelineResponse | null): any {
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
    data: PipelineToJSON(value.data),
    _raw: RawToJSON(value._raw)
  }
}
