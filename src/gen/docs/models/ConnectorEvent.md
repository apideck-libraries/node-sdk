# Apideck.ConnectorEvent

### Description

Unify event that is supported on the connector. Events are delivered via Webhooks.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
`event_type` | **string** | Unify event type | [optional] 
`event_source` | **string** | Unify event source | [optional] 
`downstream_event_type` | **string** | Downstream event type | [optional] 
`resource` | **string** | ID of the resource, typically a lowercased version of name. | [optional] 





<a name="ConnectorEventEventSource"></a>
## Enum: ConnectorEvent.event_source


* `native` (value: `'native'`)

* `virtual` (value: `'virtual'`)




---

[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)


