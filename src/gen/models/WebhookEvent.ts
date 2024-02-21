/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.3.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
/**
 *
 * @export
 * @interface WebhookEvent
 */
export interface WebhookEvent {
  /**
   * Unique reference to this request event
   * @type {string}
   * @memberof WebhookEvent
   */
  event_id?: string
  /**
   * Name of Apideck Unified API
   * @type {string}
   * @memberof WebhookEvent
   */
  unified_api?: WebhookEventUnifiedApi
  /**
   * Service provider identifier
   * @type {string}
   * @memberof WebhookEvent
   */
  service_id?: string
  /**
   * Unique consumer identifier. You can freely choose a consumer ID yourself. Most of the time, this is an ID of your internal data model that represents a user or account in your system (for example account:12345). If the consumer doesn't exist yet, Vault will upsert a consumer based on your ID.
   * @type {string}
   * @memberof WebhookEvent
   */
  consumer_id?: string
  /**
   * The service provider's ID of the entity that triggered this event
   * @type {string}
   * @memberof WebhookEvent
   */
  entity_id?: string
  /**
   * The type entity that triggered this event
   * @type {string}
   * @memberof WebhookEvent
   */
  entity_type?: string
  /**
   * The url to retrieve entity detail.
   * @type {string}
   * @memberof WebhookEvent
   */
  entity_url?: string
  /**
   * The current count this request event has been attempted
   * @type {number}
   * @memberof WebhookEvent
   */
  execution_attempt?: number
  /**
   * ISO Datetime for when the original event occurred
   * @type {string}
   * @memberof WebhookEvent
   */
  occurred_at?: string
}

/**
 * @export
 * @enum {string}
 */
export enum WebhookEventUnifiedApi {
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

export function WebhookEventFromJSON(json: any): WebhookEvent {
  return WebhookEventFromJSONTyped(json, false)
}

export function WebhookEventFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebhookEvent {
  if (json === undefined || json === null) {
    return json
  }
  return {
    event_id: !exists(json, 'event_id') ? undefined : json['event_id'],
    unified_api: !exists(json, 'unified_api') ? undefined : json['unified_api'],
    service_id: !exists(json, 'service_id') ? undefined : json['service_id'],
    consumer_id: !exists(json, 'consumer_id') ? undefined : json['consumer_id'],
    entity_id: !exists(json, 'entity_id') ? undefined : json['entity_id'],
    entity_type: !exists(json, 'entity_type') ? undefined : json['entity_type'],
    entity_url: !exists(json, 'entity_url') ? undefined : json['entity_url'],
    execution_attempt: !exists(json, 'execution_attempt') ? undefined : json['execution_attempt'],
    occurred_at: !exists(json, 'occurred_at') ? undefined : json['occurred_at']
  }
}

export function WebhookEventToJSON(value?: WebhookEvent | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    event_id: value.event_id,
    unified_api: value.unified_api,
    service_id: value.service_id,
    consumer_id: value.consumer_id,
    entity_id: value.entity_id,
    entity_type: value.entity_type,
    entity_url: value.entity_url,
    execution_attempt: value.execution_attempt,
    occurred_at: value.occurred_at
  }
}
