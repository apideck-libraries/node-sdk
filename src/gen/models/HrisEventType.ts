/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.41.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 *
 * @export
 * @enum {string}
 */
export enum HrisEventType {
  Star = '*',
  hris_employee_created = 'hris.employee.created',
  hris_employee_updated = 'hris.employee.updated',
  hris_employee_deleted = 'hris.employee.deleted',
  hris_company_created = 'hris.company.created',
  hris_company_updated = 'hris.company.updated',
  hris_company_deleted = 'hris.company.deleted'
}

export function HrisEventTypeFromJSON(json: any): HrisEventType {
  return HrisEventTypeFromJSONTyped(json, false)
}

export function HrisEventTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): HrisEventType {
  return json as HrisEventType
}

export function HrisEventTypeToJSON(value?: HrisEventType | null): any {
  return value as any
}
