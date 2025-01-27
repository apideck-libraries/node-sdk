/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.11.0
 * Contact: support@apideck.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * The employment status of the employee, indicating whether they are currently employed, inactive, terminated, or in another status.
 * @export
 * @enum {string}
 */
export enum EmploymentStatus {
  active = 'active',
  inactive = 'inactive',
  terminated = 'terminated',
  other = 'other'
}

export function EmploymentStatusFromJSON(json: any): EmploymentStatus {
  return EmploymentStatusFromJSONTyped(json, false)
}

export function EmploymentStatusFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): EmploymentStatus {
  return json as EmploymentStatus
}

export function EmploymentStatusToJSON(value?: EmploymentStatus | null): any {
  return value as any
}
