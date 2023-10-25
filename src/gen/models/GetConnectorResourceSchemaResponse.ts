/* tslint:disable */
/**
 *
 * @export
 * @interface GetConnectorResourceSchemaResponse
 */
export interface GetConnectorResourceSchemaResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof GetConnectorResourceSchemaResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof GetConnectorResourceSchemaResponse
   */
  status: string
  /**
   *
   * @type {object}
   * @memberof GetConnectorResourceSchemaResponse
   */
  data: object
}

export function GetConnectorResourceSchemaResponseFromJSON(
  json: any
): GetConnectorResourceSchemaResponse {
  return GetConnectorResourceSchemaResponseFromJSONTyped(json, false)
}

export function GetConnectorResourceSchemaResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetConnectorResourceSchemaResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    data: json['data']
  }
}

export function GetConnectorResourceSchemaResponseToJSON(
  value?: GetConnectorResourceSchemaResponse | null
): any {
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
