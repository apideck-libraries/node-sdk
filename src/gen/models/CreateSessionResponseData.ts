/* tslint:disable */
/**
 *
 * @export
 * @interface CreateSessionResponseData
 */
export interface CreateSessionResponseData {
  /**
   *
   * @type {string}
   * @memberof CreateSessionResponseData
   */
  readonly session_uri: string
  /**
   *
   * @type {string}
   * @memberof CreateSessionResponseData
   */
  readonly session_token: string
}

export function CreateSessionResponseDataFromJSON(json: any): CreateSessionResponseData {
  return CreateSessionResponseDataFromJSONTyped(json, false)
}

export function CreateSessionResponseDataFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): CreateSessionResponseData {
  if (json === undefined || json === null) {
    return json
  }
  return {
    session_uri: json['session_uri'],
    session_token: json['session_token']
  }
}

export function CreateSessionResponseDataToJSON(value?: CreateSessionResponseData | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {}
}
