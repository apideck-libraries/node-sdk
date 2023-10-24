/* tslint:disable */
/**
 *
 * @export
 * @interface UpdateCustomMappingRequest
 */
export interface UpdateCustomMappingRequest {
  /**
   * Target Field Mapping value
   * @type {string}
   * @memberof UpdateCustomMappingRequest
   */
  value: string
}

export function UpdateCustomMappingRequestFromJSON(json: any): UpdateCustomMappingRequest {
  return UpdateCustomMappingRequestFromJSONTyped(json, false)
}

export function UpdateCustomMappingRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): UpdateCustomMappingRequest {
  if (json === undefined || json === null) {
    return json
  }
  return {
    value: json['value']
  }
}

export function UpdateCustomMappingRequestToJSON(value?: UpdateCustomMappingRequest | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    value: value.value
  }
}
