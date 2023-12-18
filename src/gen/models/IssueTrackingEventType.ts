/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.1.3
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
export enum IssueTrackingEventType {
  Star = '*',
  issue_tracking_ticket_created = 'issue-tracking.ticket.created',
  issue_tracking_ticket_updated = 'issue-tracking.ticket.updated',
  issue_tracking_ticket_deleted = 'issue-tracking.ticket.deleted'
}

export function IssueTrackingEventTypeFromJSON(json: any): IssueTrackingEventType {
  return IssueTrackingEventTypeFromJSONTyped(json, false)
}

export function IssueTrackingEventTypeFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): IssueTrackingEventType {
  return json as IssueTrackingEventType
}

export function IssueTrackingEventTypeToJSON(value?: IssueTrackingEventType | null): any {
  return value as any
}
