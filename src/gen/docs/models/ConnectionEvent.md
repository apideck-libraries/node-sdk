# Apideck.ConnectionEvent

### Description

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
`event_id` | **string** | Unique reference to this request event | [optional] 
`service_id` | **string** | Service provider identifier | [optional] 
`entity_id` | **string** | The service provider\'s ID of the entity that triggered this event | [optional] 
`entity_type` | **string** | The type entity that triggered this event | [optional] 
`entity` | [**ConsumerConnection**](ConsumerConnection.md) |  | [optional] 
`event_type` | [**EventType3**](EventType3.md) |  | [optional] 
`execution_attempt` | **number** | The current count this request event has been attempted | [optional] 
`occured_at` | **string** | ISO Datetime for when the original event occurred | [optional] 





## Referenced Types:




* [`ConsumerConnection`](ConsumerConnection.md)
* [`EventType3`](EventType3.md)



---

[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)


