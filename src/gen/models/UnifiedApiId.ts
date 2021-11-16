/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.7.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * Name of Apideck Unified API
 * @export
 * @enum {string}
 */
export enum UnifiedApiId {
  vault = 'vault',
  lead = 'lead',
  crm = 'crm',
  accounting = 'accounting',
  file_storage = 'file-storage',
  spreadsheet = 'spreadsheet',
  email = 'email',
  script = 'script',
  sms = 'sms',
  team_messaging = 'team-messaging',
  ecommerce = 'ecommerce',
  payroll = 'payroll',
  customer_support = 'customer-support',
  time_registration = 'time-registration',
  transactional_email = 'transactional-email',
  hcm = 'hcm',
  form = 'form',
  csp = 'csp',
  email_marketing = 'email-marketing',
  ats = 'ats',
  hris = 'hris'
}

export function UnifiedApiIdFromJSON(json: any): UnifiedApiId {
  return UnifiedApiIdFromJSONTyped(json, false)
}

export function UnifiedApiIdFromJSONTyped(json: any, ignoreDiscriminator: boolean): UnifiedApiId {
  return json as UnifiedApiId
}

export function UnifiedApiIdToJSON(value?: UnifiedApiId | null): any {
  return value as any
}
