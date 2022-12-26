/* tslint:disable */
/**
 *
 * @export
 * @interface ResolveWebhookEventsRequest
 */
export interface ResolveWebhookEventsRequest extends Array<any> {}

export function ResolveWebhookEventsRequestFromJSON(json: any): ResolveWebhookEventsRequest {
  return ResolveWebhookEventsRequestFromJSONTyped(json, false)
}

export function ResolveWebhookEventsRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ResolveWebhookEventsRequest {
  return json
}

export function ResolveWebhookEventsRequestToJSON(value?: ResolveWebhookEventsRequest | null): any {
  return value
}
