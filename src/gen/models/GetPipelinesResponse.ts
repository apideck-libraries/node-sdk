/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 5.3.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

// Override template imports only to fix circulr dependencies generated by default template
// https://github.com/OpenAPITools/openapi-generator/issues/6140

import { exists } from '../runtime'
import { Links, LinksFromJSON, LinksToJSON } from './Links'
import { Meta, MetaFromJSON, MetaToJSON } from './Meta'
import { Pipeline, PipelineFromJSON, PipelineToJSON } from './Pipeline'

/**
 *
 * @export
 * @interface GetPipelinesResponse
 */
export interface GetPipelinesResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetPipelinesResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetPipelinesResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetPipelinesResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetPipelinesResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof GetPipelinesResponse
   */
  operation: string
  /**
   *
   * @type {Array<Pipeline>}
   * @memberof GetPipelinesResponse
   */
  data: Array<Pipeline>
  /**
   *
   * @type {Meta}
   * @memberof GetPipelinesResponse
   */
  meta?: Meta
  /**
   *
   * @type {Links}
   * @memberof GetPipelinesResponse
   */
  links?: Links
}

export function GetPipelinesResponseFromJSON(json: any): GetPipelinesResponse {
  return GetPipelinesResponseFromJSONTyped(json, false)
}

export function GetPipelinesResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetPipelinesResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: (json['data'] as Array<any>).map(PipelineFromJSON),
    meta: !exists(json, 'meta') ? undefined : MetaFromJSON(json['meta']),
    links: !exists(json, 'links') ? undefined : LinksFromJSON(json['links'])
  }
}

export function GetPipelinesResponseToJSON(value?: GetPipelinesResponse | null): any {
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
    data: (value.data as Array<any>).map(PipelineToJSON),
    meta: MetaToJSON(value.meta),
    links: LinksToJSON(value.links)
  }
}
