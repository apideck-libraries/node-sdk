/* tslint:disable */
/**
 * The request as defined in OpenApi Spec.
 * @export
 * @interface LogOperation
 */
export interface LogOperation {
  /**
   * The OpenApi Operation Id associated with the request
   * @type {string}
   * @memberof LogOperation
   */
  id: string
  /**
   * The OpenApi Operation name associated with the request
   * @type {string}
   * @memberof LogOperation
   */
  name: string
}

export function LogOperationFromJSON(json: any): LogOperation {
  return LogOperationFromJSONTyped(json, false)
}

export function LogOperationFromJSONTyped(json: any, ignoreDiscriminator: boolean): LogOperation {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: json['id'],
    name: json['name']
  }
}

export function LogOperationToJSON(value?: LogOperation | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    id: value.id,
    name: value.name
  }
}
