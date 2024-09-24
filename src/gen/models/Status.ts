/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.7.5
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * The status of the webhook.
 * @export
 * @enum {string}
 */
export enum Status {
  enabled = 'enabled',
  disabled = 'disabled'
}

export function StatusFromJSON(json: any): Status {
  return StatusFromJSONTyped(json, false)
}

export function StatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): Status {
  return json as Status
}

export function StatusToJSON(value?: Status | null): any {
  return value as any
}
