/* tslint:disable */
/**
 * Apideck service provider associated with request.
 * @export
 * @interface LogService
 */
export interface LogService {
  /**
   * Apideck service provider id.
   * @type {string}
   * @memberof LogService
   */
  id: string
  /**
   * Apideck service provider name.
   * @type {string}
   * @memberof LogService
   */
  name: string
}

export function LogServiceFromJSON(json: any): LogService {
  return LogServiceFromJSONTyped(json, false)
}

export function LogServiceFromJSONTyped(json: any, ignoreDiscriminator: boolean): LogService {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: json['id'],
    name: json['name']
  }
}

export function LogServiceToJSON(value?: LogService | null): any {
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
