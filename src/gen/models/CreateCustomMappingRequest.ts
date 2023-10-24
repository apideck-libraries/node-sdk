/* tslint:disable */
/**
 *
 * @export
 * @interface CreateCustomMappingRequest
 */
export interface CreateCustomMappingRequest {
  /**
   * Target Field Mapping value
   * @type {string}
   * @memberof CreateCustomMappingRequest
   */
  value: string
}

export function CreateCustomMappingRequestFromJSON(json: any): CreateCustomMappingRequest {
  return CreateCustomMappingRequestFromJSONTyped(json, false)
}

export function CreateCustomMappingRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): CreateCustomMappingRequest {
  if (json === undefined || json === null) {
    return json
  }
  return {
    value: json['value']
  }
}

export function CreateCustomMappingRequestToJSON(value?: CreateCustomMappingRequest | null): any {
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
