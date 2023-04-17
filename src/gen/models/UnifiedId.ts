/* tslint:disable */
/**
 *
 * @export
 * @interface UnifiedId
 */
export interface UnifiedId {
  /**
   * The unique identifier of the resource
   * @type {string}
   * @memberof UnifiedId
   */
  readonly id: string
}

export function UnifiedIdFromJSON(json: any): UnifiedId {
  return UnifiedIdFromJSONTyped(json, false)
}

export function UnifiedIdFromJSONTyped(json: any, ignoreDiscriminator: boolean): UnifiedId {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: json['id']
  }
}

export function UnifiedIdToJSON(value?: UnifiedId | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {}
}
