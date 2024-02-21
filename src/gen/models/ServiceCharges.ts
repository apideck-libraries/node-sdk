/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.3.2
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ServiceCharge } from './ServiceCharge'

/**
 * Optional service charges or gratuity tip applied to the order.
 * @export
 * @interface ServiceCharges
 */
export interface ServiceCharges extends Array<ServiceCharge> {}

export function ServiceChargesFromJSON(json: any): ServiceCharges {
  return ServiceChargesFromJSONTyped(json, false)
}

export function ServiceChargesFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ServiceCharges {
  return json
}

export function ServiceChargesToJSON(value?: ServiceCharges | null): any {
  return value
}
