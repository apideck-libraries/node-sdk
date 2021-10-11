# Apideck.WebhookEventLog

### Description

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
`id` | **string** |  | [optional] 
`status_code` | **number** | HTTP Status code that was returned. | [optional] 
`success` | **boolean** | Whether or not the request was successful. | [optional] 
`application_id` | **string** | ID of your Apideck Application | [optional] 
`consumer_id` | **string** | Consumer identifier | [optional] 
`unified_api` | [**UnifiedApi**](UnifiedApi.md) |  | [optional] 
`service` | [**WebhookEventLogService**](WebhookEventLogService.md) |  | [optional] 
`endpoint` | **string** | The URL of the webhook endpoint. | [optional] 
`event_type` | **string** | Name of source event that webhook is subscribed to. | [optional] 
`execution_attempt` | **number** | Number of attempts webhook endpoint was called before a success was returned or eventually failed | [optional] 
`http_method` | **string** | HTTP Method of request to endpoint. | [optional] 
`timestamp` | **string** | ISO Date and time when the request was made. | [optional] 
`entity_type` | **string** | Name of the Entity described by the attributes delivered within payload | [optional] 
`request_body` | **string** | The JSON stringified payload that was delivered to the webhook endpoint. | [optional] 
`response_body` | **string** | The JSON stringified response that was returned from the webhook endpoint. | [optional] 
`attempts` | [**Array&lt;WebhookEventLogAttempts&gt;**](WebhookEventLogAttempts.md) | record of each attempt to call webhook endpoint | [optional] 





## Referenced Types:





* [`UnifiedApi`](UnifiedApi.md)
* [`WebhookEventLogService`](WebhookEventLogService.md)








* [`WebhookEventLogAttempts`](WebhookEventLogAttempts.md)

---

[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)


