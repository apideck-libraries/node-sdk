/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.32.4
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * Status of the connector. Connectors with status live or beta are callable.
 * @export
 * @enum {string}
 */
export enum ConnectorStatus {
  live = 'live',
  beta = 'beta',
  development = 'development',
  considering = 'considering'
}

export function ConnectorStatusFromJSON(json: any): ConnectorStatus {
  return ConnectorStatusFromJSONTyped(json, false)
}

export function ConnectorStatusFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ConnectorStatus {
  return json as ConnectorStatus
}

export function ConnectorStatusToJSON(value?: ConnectorStatus | null): any {
  return value as any
}
