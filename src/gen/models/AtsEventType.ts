/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.8.2
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
export enum AtsEventType {
  Star = '*',
  ats_job_created = 'ats.job.created',
  ats_job_updated = 'ats.job.updated',
  ats_job_deleted = 'ats.job.deleted',
  ats_applicant_created = 'ats.applicant.created',
  ats_applicant_updated = 'ats.applicant.updated',
  ats_applicant_deleted = 'ats.applicant.deleted',
  ats_application_created = 'ats.application.created',
  ats_application_updated = 'ats.application.updated',
  ats_application_deleted = 'ats.application.deleted'
}

export function AtsEventTypeFromJSON(json: any): AtsEventType {
  return AtsEventTypeFromJSONTyped(json, false)
}

export function AtsEventTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): AtsEventType {
  return json as AtsEventType
}

export function AtsEventTypeToJSON(value?: AtsEventType | null): any {
  return value as any
}
