/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.7.0
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
export enum AttachmentReferenceType {
  invoice = 'invoice',
  bill = 'bill'
}

export function AttachmentReferenceTypeFromJSON(json: any): AttachmentReferenceType {
  return AttachmentReferenceTypeFromJSONTyped(json, false)
}

export function AttachmentReferenceTypeFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): AttachmentReferenceType {
  return json as AttachmentReferenceType
}

export function AttachmentReferenceTypeToJSON(value?: AttachmentReferenceType | null): any {
  return value as any
}
