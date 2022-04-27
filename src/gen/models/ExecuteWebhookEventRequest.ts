/* tslint:disable */
/**
 *
 * @export
 * @interface ExecuteWebhookEventRequest
 */
export interface ExecuteWebhookEventRequest {
  [key: string]: unknown
}

export function ExecuteWebhookEventRequestFromJSON(json: any): ExecuteWebhookEventRequest {
  return ExecuteWebhookEventRequestFromJSONTyped(json, false)
}

export function ExecuteWebhookEventRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ExecuteWebhookEventRequest {
  return json
}

export function ExecuteWebhookEventRequestToJSON(value?: ExecuteWebhookEventRequest | null): any {
  return value
}
