/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 7.2.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { LogOperation, LogOperationFromJSON, LogOperationToJSON } from './LogOperation'
import { LogService, LogServiceFromJSON, LogServiceToJSON } from './LogService'

/**
 *
 * @export
 * @interface Log
 */
export interface Log {
  /**
   * Indicates if the request was made via REST or Graphql endpoint.
   * @type {string}
   * @memberof Log
   */
  api_style: string
  /**
   * The Apideck base URL the request was made to.
   * @type {string}
   * @memberof Log
   */
  base_url: string
  /**
   * Indicates whether or not this is a child or parent request.
   * @type {boolean}
   * @memberof Log
   */
  child_request: boolean
  /**
   * The consumer Id associated with the request.
   * @type {string}
   * @memberof Log
   */
  consumer_id: string
  /**
   * The entire execution time in milliseconds it took to call the Apideck service provider.
   * @type {number}
   * @memberof Log
   */
  duration: number
  /**
   * The entire execution time in milliseconds it took to make the request.
   * @type {number}
   * @memberof Log
   */
  execution: number
  /**
   * When request is a parent request, this indicates if there are child requests associated.
   * @type {boolean}
   * @memberof Log
   */
  has_children: boolean
  /**
   * HTTP Method of request.
   * @type {string}
   * @memberof Log
   */
  http_method: string
  /**
   * UUID acting as Request Identifier.
   * @type {string}
   * @memberof Log
   */
  id: string
  /**
   * Latency added by making this request via Unified Api.
   * @type {number}
   * @memberof Log
   */
  latency: number
  /**
   *
   * @type {LogOperation}
   * @memberof Log
   */
  operation: LogOperation
  /**
   * When request is a child request, this UUID indicates it's parent request.
   * @type {string}
   * @memberof Log
   */
  parent_id: string | null
  /**
   * The path component of the URI the request was made to.
   * @type {string}
   * @memberof Log
   */
  path: string
  /**
   * Indicates whether the request was made using Apidecks sandbox credentials or not.
   * @type {boolean}
   * @memberof Log
   */
  sandbox: boolean
  /**
   *
   * @type {LogService}
   * @memberof Log
   */
  service: LogService
  /**
   * HTTP Status code that was returned.
   * @type {number}
   * @memberof Log
   */
  status_code: number
  /**
   * Whether or not the request was successful.
   * @type {boolean}
   * @memberof Log
   */
  success: boolean
  /**
   * ISO Date and time when the request was made.
   * @type {string}
   * @memberof Log
   */
  timestamp: string
  /**
   * Which Unified Api request was made to.
   * @type {string}
   * @memberof Log
   */
  unified_api: LogUnifiedApi
  /**
   * If error occured, this is brief explanation
   * @type {string}
   * @memberof Log
   */
  error_message?: string | null
  /**
   * The IP address of the source of the request.
   * @type {string}
   * @memberof Log
   */
  source_ip?: string | null
}

/**
 * @export
 * @enum {string}
 */
export enum LogUnifiedApi {
  crm = 'crm',
  lead = 'lead',
  proxy = 'proxy',
  vault = 'vault',
  accounting = 'accounting'
}

export function LogFromJSON(json: any): Log {
  return LogFromJSONTyped(json, false)
}

export function LogFromJSONTyped(json: any, ignoreDiscriminator: boolean): Log {
  if (json === undefined || json === null) {
    return json
  }
  return {
    api_style: json['api_style'],
    base_url: json['base_url'],
    child_request: json['child_request'],
    consumer_id: json['consumer_id'],
    duration: json['duration'],
    execution: json['execution'],
    has_children: json['has_children'],
    http_method: json['http_method'],
    id: json['id'],
    latency: json['latency'],
    operation: LogOperationFromJSON(json['operation']),
    parent_id: json['parent_id'],
    path: json['path'],
    sandbox: json['sandbox'],
    service: LogServiceFromJSON(json['service']),
    status_code: json['status_code'],
    success: json['success'],
    timestamp: json['timestamp'],
    unified_api: json['unified_api'],
    error_message: !exists(json, 'error_message') ? undefined : json['error_message'],
    source_ip: !exists(json, 'source_ip') ? undefined : json['source_ip']
  }
}

export function LogToJSON(value?: Log | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    api_style: value.api_style,
    base_url: value.base_url,
    child_request: value.child_request,
    consumer_id: value.consumer_id,
    duration: value.duration,
    execution: value.execution,
    has_children: value.has_children,
    http_method: value.http_method,
    id: value.id,
    latency: value.latency,
    operation: LogOperationToJSON(value.operation),
    parent_id: value.parent_id,
    path: value.path,
    sandbox: value.sandbox,
    service: LogServiceToJSON(value.service),
    status_code: value.status_code,
    success: value.success,
    timestamp: value.timestamp,
    unified_api: value.unified_api,
    error_message: value.error_message,
    source_ip: value.source_ip
  }
}
