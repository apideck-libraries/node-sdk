/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.37.1
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
export enum Gender {
  male = 'male',
  female = 'female',
  unisex = 'unisex',
  other = 'other'
}

export function GenderFromJSON(json: any): Gender {
  return GenderFromJSONTyped(json, false)
}

export function GenderFromJSONTyped(json: any, ignoreDiscriminator: boolean): Gender {
  return json as Gender
}

export function GenderToJSON(value?: Gender | null): any {
  return value as any
}
