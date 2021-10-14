/* tslint:disable */
/**
 *
 * @export
 * @interface ExecuteWebhookEventsRequest
 */
export interface ExecuteWebhookEventsRequest extends Array<any> {}

export function ExecuteWebhookEventsRequestFromJSON(json: any): ExecuteWebhookEventsRequest {
  return ExecuteWebhookEventsRequestFromJSONTyped(json, false)
}

export function ExecuteWebhookEventsRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ExecuteWebhookEventsRequest {
  return json
}

export function ExecuteWebhookEventsRequestToJSON(value?: ExecuteWebhookEventsRequest | null): any {
  return value
}
