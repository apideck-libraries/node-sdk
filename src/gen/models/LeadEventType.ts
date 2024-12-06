/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.8.3
 * Contact: support@apideck.com
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
export enum LeadEventType {
  Star = '*',
  lead_lead_created = 'lead.lead.created',
  lead_lead_updated = 'lead.lead.updated',
  lead_lead_deleted = 'lead.lead.deleted'
}

export function LeadEventTypeFromJSON(json: any): LeadEventType {
  return LeadEventTypeFromJSONTyped(json, false)
}

export function LeadEventTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): LeadEventType {
  return json as LeadEventType
}

export function LeadEventTypeToJSON(value?: LeadEventType | null): any {
  return value as any
}
