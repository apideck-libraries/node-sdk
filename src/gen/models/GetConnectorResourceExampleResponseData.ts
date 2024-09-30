/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.7.6
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import {
  LinkedConnectorResource,
  LinkedConnectorResourceFromJSON,
  LinkedConnectorResourceToJSON
} from './LinkedConnectorResource'
import { UnifiedApiId, UnifiedApiIdFromJSON, UnifiedApiIdToJSON } from './UnifiedApiId'

/**
 *
 * @export
 * @interface GetConnectorResourceExampleResponseData
 */
export interface GetConnectorResourceExampleResponseData {
  /**
   *
   * @type {UnifiedApiId}
   * @memberof GetConnectorResourceExampleResponseData
   */
  unified_api?: UnifiedApiId
  /**
   * Service provider identifier
   * @type {string}
   * @memberof GetConnectorResourceExampleResponseData
   */
  service_id?: string
  /**
   *
   * @type {LinkedConnectorResource}
   * @memberof GetConnectorResourceExampleResponseData
   */
  resource?: LinkedConnectorResource
  /**
   *
   * @type {object}
   * @memberof GetConnectorResourceExampleResponseData
   */
  example_response?: object
}

export function GetConnectorResourceExampleResponseDataFromJSON(
  json: any
): GetConnectorResourceExampleResponseData {
  return GetConnectorResourceExampleResponseDataFromJSONTyped(json, false)
}

export function GetConnectorResourceExampleResponseDataFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetConnectorResourceExampleResponseData {
  if (json === undefined || json === null) {
    return json
  }
  return {
    unified_api: !exists(json, 'unified_api')
      ? undefined
      : UnifiedApiIdFromJSON(json['unified_api']),
    service_id: !exists(json, 'service_id') ? undefined : json['service_id'],
    resource: !exists(json, 'resource')
      ? undefined
      : LinkedConnectorResourceFromJSON(json['resource']),
    example_response: !exists(json, 'example_response') ? undefined : json['example_response']
  }
}

export function GetConnectorResourceExampleResponseDataToJSON(
  value?: GetConnectorResourceExampleResponseData | null
): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    unified_api: UnifiedApiIdToJSON(value.unified_api),
    service_id: value.service_id,
    resource: LinkedConnectorResourceToJSON(value.resource),
    example_response: value.example_response
  }
}
