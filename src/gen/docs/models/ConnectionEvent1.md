# Apideck.ConnectionEvent1

### Description

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
`event_id` | **string** | Unique reference to this request event | [optional] 
`service_id` | **string** | Service provider identifier | [optional] 
`entity_id` | **string** | The service provider\'s ID of the entity that triggered this event | [optional] 
`entity_type` | **string** | The type entity that triggered this event | [optional] 
`entity` | [**ConnectionEvent1Entity**](ConnectionEvent1Entity.md) |  | [optional] 
`event_type` | [**EventType4**](EventType4.md) |  | [optional] 
`execution_attempt` | **number** | The current count this request event has been attempted | [optional] 
`occured_at` | **string** | ISO Datetime for when the original event occurred | [optional] 





## Referenced Types:




* [`ConnectionEvent1Entity`](ConnectionEvent1Entity.md)
* [`EventType4`](EventType4.md)



---

[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)


