/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.36.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * The status of the job.
 * @export
 * @enum {string}
 */
export enum JobStatus {
  draft = 'draft',
  internal = 'internal',
  published = 'published',
  completed = 'completed',
  on_hold = 'on-hold',
  private = 'private'
}

export function JobStatusFromJSON(json: any): JobStatus {
  return JobStatusFromJSONTyped(json, false)
}

export function JobStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): JobStatus {
  return json as JobStatus
}

export function JobStatusToJSON(value?: JobStatus | null): any {
  return value as any
}
