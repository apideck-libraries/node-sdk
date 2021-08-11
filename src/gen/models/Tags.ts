/* tslint:disable */
/**
 *
 * @export
 * @interface Tags
 */
export interface Tags extends Array<string> {}

export function TagsFromJSON(json: any): Tags {
  return TagsFromJSONTyped(json, false)
}

export function TagsFromJSONTyped(json: any, ignoreDiscriminator: boolean): Tags {
  return json
}

export function TagsToJSON(value?: Tags | null): any {
  return value
}
