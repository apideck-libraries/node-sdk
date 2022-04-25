/* tslint:disable */
/**
 * Optional service charges or gratuity tip applied to the order.
 * @export
 * @interface ServiceCharges
 */
export interface ServiceCharges extends Array<object> {}

export function ServiceChargesFromJSON(json: any): ServiceCharges {
  return ServiceChargesFromJSONTyped(json, false)
}

export function ServiceChargesFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ServiceCharges {
  return json
}

export function ServiceChargesToJSON(value?: ServiceCharges | null): any {
  return value
}
