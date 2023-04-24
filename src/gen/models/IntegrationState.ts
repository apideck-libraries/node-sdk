/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 9.3.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * The current state of the Integration.
 * @export
 * @enum {string}
 */
export enum IntegrationState {
  disabled = 'disabled',
  needs_configuration = 'needs_configuration',
  configured = 'configured'
}

export function IntegrationStateFromJSON(json: any): IntegrationState {
  return IntegrationStateFromJSONTyped(json, false)
}

export function IntegrationStateFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): IntegrationState {
  return json as IntegrationState
}

export function IntegrationStateToJSON(value?: IntegrationState | null): any {
  return value as any
}
