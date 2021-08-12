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

import { exists } from '../runtime'
import { Lead, LeadFromJSON, LeadToJSON } from './Lead'
import { Links, LinksFromJSON, LinksToJSON } from './Links'
import { Meta, MetaFromJSON, MetaToJSON } from './Meta'

/**
 *
 * @export
 * @interface InlineResponse200
 */
export interface InlineResponse200 {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof InlineResponse200
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof InlineResponse200
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof InlineResponse200
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof InlineResponse200
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof InlineResponse200
   */
  operation: string
  /**
   *
   * @type {Array<Lead>}
   * @memberof InlineResponse200
   */
  data: Array<Lead>
  /**
   *
   * @type {Meta}
   * @memberof InlineResponse200
   */
  meta?: Meta
  /**
   *
   * @type {Links}
   * @memberof InlineResponse200
   */
  links?: Links
}

export function InlineResponse200FromJSON(json: any): InlineResponse200 {
  return InlineResponse200FromJSONTyped(json, false)
}

export function InlineResponse200FromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): InlineResponse200 {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: (json['data'] as Array<any>).map(LeadFromJSON),
    meta: !exists(json, 'meta') ? undefined : MetaFromJSON(json['meta']),
    links: !exists(json, 'links') ? undefined : LinksFromJSON(json['links'])
  }
}

export function InlineResponse200ToJSON(value?: InlineResponse200 | null): any {
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
    data: (value.data as Array<any>).map(LeadToJSON),
    meta: MetaToJSON(value.meta),
    links: LinksToJSON(value.links)
  }
}
