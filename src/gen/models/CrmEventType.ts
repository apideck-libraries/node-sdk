/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 9.3.0
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
export enum CrmEventType {
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
  crm_note_updated = 'crm.note.updated',
  crm_note_deleted = 'crm.note.deleted',
  crm_opportunity_created = 'crm.opportunity.created',
  crm_opportunity_updated = 'crm.opportunity.updated',
  crm_opportunity_deleted = 'crm.opportunity.deleted'
}

export function CrmEventTypeFromJSON(json: any): CrmEventType {
  return CrmEventTypeFromJSONTyped(json, false)
}

export function CrmEventTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CrmEventType {
  return json as CrmEventType
}

export function CrmEventTypeToJSON(value?: CrmEventType | null): any {
  return value as any
}
