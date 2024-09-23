/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.7.4
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Attachment, AttachmentFromJSON, AttachmentToJSON } from './Attachment'

/**
 *
 * @export
 * @interface GetAttachmentResponse
 */
export interface GetAttachmentResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetAttachmentResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetAttachmentResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetAttachmentResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetAttachmentResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof GetAttachmentResponse
   */
  operation: string
  /**
   *
   * @type {Attachment}
   * @memberof GetAttachmentResponse
   */
  data: Attachment
}

export function GetAttachmentResponseFromJSON(json: any): GetAttachmentResponse {
  return GetAttachmentResponseFromJSONTyped(json, false)
}

export function GetAttachmentResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetAttachmentResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: AttachmentFromJSON(json['data'])
  }
}

export function GetAttachmentResponseToJSON(value?: GetAttachmentResponse | null): any {
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
    data: AttachmentToJSON(value.data)
  }
}
