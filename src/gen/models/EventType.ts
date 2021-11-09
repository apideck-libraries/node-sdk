/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.4.1
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
export enum EventType {
  activity_created = 'crm.activity.created',
  activity_updated = 'crm.activity.updated',
  activity_deleted = 'crm.activity.deleted',
  company_created = 'crm.company.created',
  company_updated = 'crm.company.updated',
  company_deleted = 'crm.company.deleted',
  contact_created = 'crm.contact.created',
  contact_updated = 'crm.contact.updated',
  contact_deleted = 'crm.contact.deleted',
  lead_created = 'crm.lead.created',
  lead_updated = 'crm.lead.updated',
  lead_deleted = 'crm.lead.deleted',
  note_created = 'crm.note.created',
  note_updated = 'crm.note.updated',
  note_deleted = 'crm.note.deleted',
  opportunity_created = 'crm.opportunity.created',
  opportunity_updated = 'crm.opportunity.updated',
  opportunity_deleted = 'crm.opportunity.deleted'
}

export function EventTypeFromJSON(json: any): EventType {
  return EventTypeFromJSONTyped(json, false)
}

export function EventTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): EventType {
  return json as EventType
}

export function EventTypeToJSON(value?: EventType | null): any {
  return value as any
}
