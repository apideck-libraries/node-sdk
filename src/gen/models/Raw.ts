/* tslint:disable */
/**
 * Raw response from the integration when raw=true query param is provided
 * @export
 * @interface Raw
 */
export interface Raw {
  [key: string]: unknown
}

export function RawFromJSON(json: any): Raw {
  return RawFromJSONTyped(json, false)
}

export function RawFromJSONTyped(json: any, ignoreDiscriminator: boolean): Raw {
  return json
}

export function RawToJSON(value?: Raw | null): any {
  return value
}
