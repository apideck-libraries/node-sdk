/* tslint:disable */
/**
 * When custom mappings are configured on the resource, the result is included here.
 * @export
 * @interface CustomMappings
 */
export interface CustomMappings {
  [key: string]: unknown
}

export function CustomMappingsFromJSON(json: any): CustomMappings {
  return CustomMappingsFromJSONTyped(json, false)
}

export function CustomMappingsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): CustomMappings {
  return json
}

export function CustomMappingsToJSON(value?: CustomMappings | null): any {
  return value
}
