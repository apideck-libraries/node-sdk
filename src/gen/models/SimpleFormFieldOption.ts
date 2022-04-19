/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.23.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
 import {
     string | number | boolean | Array<string | number>,
     string | number | boolean | Array<string | number&gt;FromJSON,
     string | number | boolean | Array<string | number&gt;FromJSONTyped,
     string | number | boolean | Array<string | number&gt;ToJSON,
} from './string | number | boolean | Array<string | number&gt;';

/**
 * 
 * @export
 * @interface SimpleFormFieldOption
 */
export interface SimpleFormFieldOption {
    /**
     * 
     * @type {string}
     * @memberof SimpleFormFieldOption
     */
    label?: string;
    /**
     * 
     * @type {string | number | boolean | Array<string | number>}
     * @memberof SimpleFormFieldOption
     */
    value?: string | number | boolean | Array<string | number> | null;
}

export function SimpleFormFieldOptionFromJSON(json: any): SimpleFormFieldOption {
    return SimpleFormFieldOptionFromJSONTyped(json, false);
}

export function SimpleFormFieldOptionFromJSONTyped(json: any, ignoreDiscriminator: boolean): SimpleFormFieldOption {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'label': !exists(json, 'label') ? undefined : json['label'],
        'value': !exists(json, 'value') ? undefined : <string | number | boolean | Array<string | number>>(json['value']),
    };
}

export function SimpleFormFieldOptionToJSON(value?: SimpleFormFieldOption | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'label': value.label,
        'value': <string | number | boolean | Array<string | number>>(value.value),
    };
}

