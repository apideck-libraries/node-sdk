/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.66.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { Applicant, ApplicantFromJSON, ApplicantToJSON } from './Applicant'
import { Links, LinksFromJSON, LinksToJSON } from './Links'
import { Meta, MetaFromJSON, MetaToJSON } from './Meta'

/**
 *
 * @export
 * @interface GetApplicantsResponse
 */
export interface GetApplicantsResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetApplicantsResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetApplicantsResponse
   */
  status: string
  /**
   * Apideck ID of service provider
   * @type {string}
   * @memberof GetApplicantsResponse
   */
  service: string
  /**
   * Unified API resource name
   * @type {string}
   * @memberof GetApplicantsResponse
   */
  resource: string
  /**
   * Operation performed
   * @type {string}
   * @memberof GetApplicantsResponse
   */
  operation: string
  /**
   *
   * @type {Array<Applicant>}
   * @memberof GetApplicantsResponse
   */
  data: Array<Applicant>
  /**
   *
   * @type {Meta}
   * @memberof GetApplicantsResponse
   */
  meta?: Meta
  /**
   *
   * @type {Links}
   * @memberof GetApplicantsResponse
   */
  links?: Links
}

export function GetApplicantsResponseFromJSON(json: any): GetApplicantsResponse {
  return GetApplicantsResponseFromJSONTyped(json, false)
}

export function GetApplicantsResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetApplicantsResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: (json['data'] as Array<any>).map(ApplicantFromJSON),
    meta: !exists(json, 'meta') ? undefined : MetaFromJSON(json['meta']),
    links: !exists(json, 'links') ? undefined : LinksFromJSON(json['links'])
  }
}

export function GetApplicantsResponseToJSON(value?: GetApplicantsResponse | null): any {
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
    data: (value.data as Array<any>).map(ApplicantToJSON),
    meta: MetaToJSON(value.meta),
    links: LinksToJSON(value.links)
  }
}
