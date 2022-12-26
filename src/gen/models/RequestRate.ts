/* tslint:disable */
/**
 * The rate at which requests for resources will be made to downstream.
 * @export
 * @interface RequestRate
 */
export interface RequestRate {
  /**
   * The number of requests per window unit.
   * @type {number}
   * @memberof RequestRate
   */
  rate: number
  /**
   * Size of request window.
   * @type {number}
   * @memberof RequestRate
   */
  size: number
  /**
   * The window unit for the rate.
   * @type {string}
   * @memberof RequestRate
   */
  unit: RequestRateUnit
}

/**
 * @export
 * @enum {string}
 */
export enum RequestRateUnit {
  second = 'second',
  minute = 'minute',
  hour = 'hour',
  day = 'day'
}

export function RequestRateFromJSON(json: any): RequestRate {
  return RequestRateFromJSONTyped(json, false)
}

export function RequestRateFromJSONTyped(json: any, ignoreDiscriminator: boolean): RequestRate {
  if (json === undefined || json === null) {
    return json
  }
  return {
    rate: json['rate'],
    size: json['size'],
    unit: json['unit']
  }
}

export function RequestRateToJSON(value?: RequestRate | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    rate: value.rate,
    size: value.size,
    unit: value.unit
  }
}
