/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.9.1
 * Contact: support@apideck.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
/**
 *
 * @export
 * @interface ConnectorSetting
 */
export interface ConnectorSetting {
  /**
   *
   * @type {string}
   * @memberof ConnectorSetting
   */
  id?: string
  /**
   *
   * @type {string}
   * @memberof ConnectorSetting
   */
  label?: string
  /**
   *
   * @type {string}
   * @memberof ConnectorSetting
   */
  type?: ConnectorSettingType
}

/**
 * @export
 * @enum {string}
 */
export enum ConnectorSettingType {
  text = 'text',
  checkbox = 'checkbox',
  tel = 'tel',
  email = 'email',
  url = 'url',
  textarea = 'textarea',
  select = 'select',
  filtered_select = 'filtered-select',
  multi_select = 'multi-select',
  datetime = 'datetime',
  date = 'date',
  time = 'time',
  number = 'number',
  password = 'password'
}

export function ConnectorSettingFromJSON(json: any): ConnectorSetting {
  return ConnectorSettingFromJSONTyped(json, false)
}

export function ConnectorSettingFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ConnectorSetting {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    label: !exists(json, 'label') ? undefined : json['label'],
    type: !exists(json, 'type') ? undefined : json['type']
  }
}

export function ConnectorSettingToJSON(value?: ConnectorSetting | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    id: value.id,
    label: value.label,
    type: value.type
  }
}
