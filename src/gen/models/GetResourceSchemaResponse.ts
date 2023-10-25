/* tslint:disable */
/**
 *
 * @export
 * @interface GetResourceSchemaResponse
 */
export interface GetResourceSchemaResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetResourceSchemaResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetResourceSchemaResponse
   */
  status: string
  /**
   *
   * @type {object}
   * @memberof GetResourceSchemaResponse
   */
  data: object
}

export function GetResourceSchemaResponseFromJSON(json: any): GetResourceSchemaResponse {
  return GetResourceSchemaResponseFromJSONTyped(json, false)
}

export function GetResourceSchemaResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetResourceSchemaResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    data: json['data']
  }
}

export function GetResourceSchemaResponseToJSON(value?: GetResourceSchemaResponse | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    status_code: value.status_code,
    status: value.status,
    data: value.data
  }
}
