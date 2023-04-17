/* tslint:disable */
/**
 *
 * @export
 * @interface DeleteConsumerResponse
 */
export interface DeleteConsumerResponse {
  /**
   * HTTP Response Status Code
   * @type {number}
   * @memberof DeleteConsumerResponse
   */
  status_code: number
  /**
   * HTTP Response Status
   * @type {string}
   * @memberof DeleteConsumerResponse
   */
  status: string
  /**
   *
   * @type {object}
   * @memberof DeleteConsumerResponse
   */
  data: object | null
}

export function DeleteConsumerResponseFromJSON(json: any): DeleteConsumerResponse {
  return DeleteConsumerResponseFromJSONTyped(json, false)
}

export function DeleteConsumerResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): DeleteConsumerResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    status_code: json['status_code'],
    status: json['status'],
    data: json['data']
  }
}

export function DeleteConsumerResponseToJSON(value?: DeleteConsumerResponse | null): any {
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
