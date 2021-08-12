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

import { Lead, LeadFromJSON, LeadToJSON } from './Lead'

/**
 *
 * @export
 * @interface InlineResponse2001
 */
export interface InlineResponse2001 {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof InlineResponse2001
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof InlineResponse2001
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof InlineResponse2001
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof InlineResponse2001
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof InlineResponse2001
   */
  operation: string
  /**
   *
   * @type {Lead}
   * @memberof InlineResponse2001
   */
  data: Lead
}

export function InlineResponse2001FromJSON(json: any): InlineResponse2001 {
  return InlineResponse2001FromJSONTyped(json, false)
}

export function InlineResponse2001FromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): InlineResponse2001 {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: LeadFromJSON(json['data'])
  }
}

export function InlineResponse2001ToJSON(value?: InlineResponse2001 | null): any {
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
    data: LeadToJSON(value.data)
  }
}
