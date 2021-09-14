/* tslint:disable */
/**
 * Apideck service provider associated with event.
 * @export
 * @interface WebhookEventLogService
 */
export interface WebhookEventLogService {
  /**
   * Apideck service provider id.
   * @type {string}
   * @memberof WebhookEventLogService
   */
  id: string
  /**
   * Apideck service provider name.
   * @type {string}
   * @memberof WebhookEventLogService
   */
  name: string
}

export function WebhookEventLogServiceFromJSON(json: any): WebhookEventLogService {
  return WebhookEventLogServiceFromJSONTyped(json, false)
}

export function WebhookEventLogServiceFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): WebhookEventLogService {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: json['id'],
    name: json['name']
  }
}

export function WebhookEventLogServiceToJSON(value?: WebhookEventLogService | null): any {
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
