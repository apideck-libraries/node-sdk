/* tslint:disable */
/**
 *
 * @export
 * @interface ResolveWebhookEventRequest
 */
export interface ResolveWebhookEventRequest {
  [key: string]: unknown
}

export function ResolveWebhookEventRequestFromJSON(json: any): ResolveWebhookEventRequest {
  return ResolveWebhookEventRequestFromJSONTyped(json, false)
}

export function ResolveWebhookEventRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ResolveWebhookEventRequest {
  return json
}

export function ResolveWebhookEventRequestToJSON(value?: ResolveWebhookEventRequest | null): any {
  return value
}
