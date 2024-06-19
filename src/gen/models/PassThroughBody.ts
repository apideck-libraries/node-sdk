/* tslint:disable */
/**
 * The pass_through property allows passing service-specific, custom data or structured modifications in request body when creating or updating resources.
 * @export
 * @interface PassThroughBody
 */
export interface PassThroughBody extends Array<object> {}

export function PassThroughBodyFromJSON(json: any): PassThroughBody {
  return PassThroughBodyFromJSONTyped(json, false)
}

export function PassThroughBodyFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): PassThroughBody {
  return json
}

export function PassThroughBodyToJSON(value?: PassThroughBody | null): any {
  return value
}
