/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.3.5
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * The gender represents the gender identity of a person.
 * @export
 * @enum {string}
 */
export enum Gender {
  male = 'male',
  female = 'female',
  unisex = 'unisex',
  other = 'other',
  not_specified = 'not_specified'
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
