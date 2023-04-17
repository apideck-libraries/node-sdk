/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 9.1.5
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
export enum AtsEventType {
  job_created = 'ats.job.created',
  job_updated = 'ats.job.updated',
  job_deleted = 'ats.job.deleted',
  applicant_created = 'ats.applicant.created',
  applicant_updated = 'ats.applicant.updated',
  applicant_deleted = 'ats.applicant.deleted'
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
