/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.3.1
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
export enum LeadEventType {
  created = 'lead.lead.created',
  updated = 'lead.lead.updated',
  deleted = 'lead.lead.deleted'
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
