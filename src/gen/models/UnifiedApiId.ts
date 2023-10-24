/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.0.0
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
  accounting = 'accounting',
  ats = 'ats',
  calendar = 'calendar',
  crm = 'crm',
  csp = 'csp',
  customer_support = 'customer-support',
  ecommerce = 'ecommerce',
  email = 'email',
  email_marketing = 'email-marketing',
  expense_management = 'expense-management',
  file_storage = 'file-storage',
  form = 'form',
  hris = 'hris',
  lead = 'lead',
  payroll = 'payroll',
  pos = 'pos',
  procurement = 'procurement',
  project_management = 'project-management',
  script = 'script',
  sms = 'sms',
  spreadsheet = 'spreadsheet',
  team_messaging = 'team-messaging',
  issue_tracking = 'issue-tracking',
  time_registration = 'time-registration',
  transactional_email = 'transactional-email',
  vault = 'vault',
  data_warehouse = 'data-warehouse'
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
