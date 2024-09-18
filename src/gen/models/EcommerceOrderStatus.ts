/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.7.3
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * Current status of the order.
 * @export
 * @enum {string}
 */
export enum EcommerceOrderStatus {
  active = 'active',
  completed = 'completed',
  cancelled = 'cancelled',
  archived = 'archived',
  unknown = 'unknown',
  other = 'other'
}

export function EcommerceOrderStatusFromJSON(json: any): EcommerceOrderStatus {
  return EcommerceOrderStatusFromJSONTyped(json, false)
}

export function EcommerceOrderStatusFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): EcommerceOrderStatus {
  return json as EcommerceOrderStatus
}

export function EcommerceOrderStatusToJSON(value?: EcommerceOrderStatus | null): any {
  return value as any
}
