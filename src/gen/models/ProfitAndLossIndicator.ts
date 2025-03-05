/* tslint:disable */
/**
 *
 * @export
 * @interface ProfitAndLossIndicator
 */
export interface ProfitAndLossIndicator {
  /**
   * The total amount of the transaction
   * @type {number}
   * @memberof ProfitAndLossIndicator
   */
  total: number | null
}

export function ProfitAndLossIndicatorFromJSON(json: any): ProfitAndLossIndicator {
  return ProfitAndLossIndicatorFromJSONTyped(json, false)
}

export function ProfitAndLossIndicatorFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ProfitAndLossIndicator {
  if (json === undefined || json === null) {
    return json
  }
  return {
    total: json['total']
  }
}

export function ProfitAndLossIndicatorToJSON(value?: ProfitAndLossIndicator | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    total: value.total
  }
}
