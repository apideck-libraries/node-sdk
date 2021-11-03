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

import { exists } from '../runtime'
/**
 *
 * @export
 * @interface ConsumerMetadata
 */
export interface ConsumerMetadata {
  /**
   *
   * @type {string}
   * @memberof ConsumerMetadata
   */
  account_name?: string
  /**
   *
   * @type {string}
   * @memberof ConsumerMetadata
   */
  user_name?: string
  /**
   *
   * @type {string}
   * @memberof ConsumerMetadata
   */
  email?: string
  /**
   *
   * @type {string}
   * @memberof ConsumerMetadata
   */
  image?: string
}

export function ConsumerMetadataFromJSON(json: any): ConsumerMetadata {
  return ConsumerMetadataFromJSONTyped(json, false)
}

export function ConsumerMetadataFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ConsumerMetadata {
  if (json === undefined || json === null) {
    return json
  }
  return {
    account_name: !exists(json, 'account_name') ? undefined : json['account_name'],
    user_name: !exists(json, 'user_name') ? undefined : json['user_name'],
    email: !exists(json, 'email') ? undefined : json['email'],
    image: !exists(json, 'image') ? undefined : json['image']
  }
}

export function ConsumerMetadataToJSON(value?: ConsumerMetadata | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    account_name: value.account_name,
    user_name: value.user_name,
    email: value.email,
    image: value.image
  }
}
