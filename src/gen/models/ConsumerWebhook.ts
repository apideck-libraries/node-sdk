/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.9.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { UnifiedApiId, UnifiedApiIdFromJSON, UnifiedApiIdToJSON } from './UnifiedApiId'

/**
 *
 * @export
 * @interface ConsumerWebhook
 */
export interface ConsumerWebhook {
  /**
   *
   * @type {UnifiedApiId}
   * @memberof ConsumerWebhook
   */
  unified_api: UnifiedApiId
  /**
   * The status of the webhook.
   * @type {string}
   * @memberof ConsumerWebhook
   */
  status: ConsumerWebhookStatus
  /**
   * The delivery url of the webhook endpoint.
   * @type {string}
   * @memberof ConsumerWebhook
   */
  delivery_url: string
  /**
   * The Unify Base URL events from connectors will be sent to after service id is appended.
   * @type {string}
   * @memberof ConsumerWebhook
   */
  readonly execute_base_url: string
  /**
   * The list of subscribed events for this webhook. [’*’] indicates that all events are enabled.
   * @type {Array<string>}
   * @memberof ConsumerWebhook
   */
  events: Array<ConsumerWebhookEvents>
  /**
   *
   * @type {string}
   * @memberof ConsumerWebhook
   */
  readonly id?: string
  /**
   *
   * @type {string}
   * @memberof ConsumerWebhook
   */
  description?: string | null
  /**
   *
   * @type {Date}
   * @memberof ConsumerWebhook
   */
  readonly updated_at?: Date
  /**
   *
   * @type {Date}
   * @memberof ConsumerWebhook
   */
  readonly created_at?: Date
}

/**
 * @export
 * @enum {string}
 */
export enum ConsumerWebhookStatus {
  enabled = 'enabled',
  disabled = 'disabled'
}
/**
 * @export
 * @enum {string}
 */
export enum ConsumerWebhookEvents {
  Star = '*',
  crm_activity_created = 'crm.activity.created',
  crm_activity_updated = 'crm.activity.updated',
  crm_activity_deleted = 'crm.activity.deleted',
  crm_company_created = 'crm.company.created',
  crm_company_updated = 'crm.company.updated',
  crm_company_deleted = 'crm.company.deleted',
  crm_contact_created = 'crm.contact.created',
  crm_contact_updated = 'crm.contact.updated',
  crm_contact_deleted = 'crm.contact.deleted',
  crm_lead_created = 'crm.lead.created',
  crm_lead_updated = 'crm.lead.updated',
  crm_lead_deleted = 'crm.lead.deleted',
  crm_note_created = 'crm.note.created',
  crm_notes_updated = 'crm.notes.updated',
  crm_notes_deleted = 'crm.notes.deleted',
  crm_opportunity_created = 'crm.opportunity.created',
  crm_opportunity_updated = 'crm.opportunity.updated',
  crm_opportunity_deleted = 'crm.opportunity.deleted',
  lead_lead_created = 'lead.lead.created',
  lead_lead_updated = 'lead.lead.updated',
  lead_lead_deleted = 'lead.lead.deleted',
  vault_connection_created = 'vault.connection.created',
  vault_connection_updated = 'vault.connection.updated',
  vault_connection_deleted = 'vault.connection.deleted',
  vault_connection_callable = 'vault.connection.callable',
  ats_job_created = 'ats.job.created',
  ats_job_updated = 'ats.job.updated',
  ats_job_deleted = 'ats.job.deleted',
  ats_applicant_created = 'ats.applicant.created',
  ats_applicant_updated = 'ats.applicant.updated',
  ats_applicant_deleted = 'ats.applicant.deleted',
  pos_order_created = 'pos.order.created',
  pos_order_updated = 'pos.order.updated',
  pos_order_deleted = 'pos.order.deleted'
}

export function ConsumerWebhookFromJSON(json: any): ConsumerWebhook {
  return ConsumerWebhookFromJSONTyped(json, false)
}

export function ConsumerWebhookFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ConsumerWebhook {
  if (json === undefined || json === null) {
    return json
  }
  return {
    unified_api: UnifiedApiIdFromJSON(json['unified_api']),
    status: json['status'],
    delivery_url: json['delivery_url'],
    execute_base_url: json['execute_base_url'],
    events: json['events'],
    id: !exists(json, 'id') ? undefined : json['id'],
    description: !exists(json, 'description') ? undefined : json['description'],
    updated_at: !exists(json, 'updated_at') ? undefined : new Date(json['updated_at']),
    created_at: !exists(json, 'created_at') ? undefined : new Date(json['created_at'])
  }
}

export function ConsumerWebhookToJSON(value?: ConsumerWebhook | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    unified_api: UnifiedApiIdToJSON(value.unified_api),
    status: value.status,
    delivery_url: value.delivery_url,
    events: value.events,
    description: value.description
  }
}
