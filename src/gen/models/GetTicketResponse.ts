/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.9.0
 * Contact: support@apideck.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Ticket, TicketFromJSON, TicketToJSON } from './Ticket'

/**
 *
 * @export
 * @interface GetTicketResponse
 */
export interface GetTicketResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetTicketResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetTicketResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetTicketResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetTicketResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof GetTicketResponse
   */
  operation: string
  /**
   *
   * @type {Ticket}
   * @memberof GetTicketResponse
   */
  data: Ticket
}

export function GetTicketResponseFromJSON(json: any): GetTicketResponse {
  return GetTicketResponseFromJSONTyped(json, false)
}

export function GetTicketResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetTicketResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: TicketFromJSON(json['data'])
  }
}

export function GetTicketResponseToJSON(value?: GetTicketResponse | null): any {
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
    data: TicketToJSON(value.data)
  }
}
