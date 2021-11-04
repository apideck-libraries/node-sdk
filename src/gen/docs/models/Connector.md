# Apideck.Connector

### Description

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
`id` | **string** | ID of the connector. | [optional] 
`name` | **string** | Name of the connector. | [optional] 
`description` | **string** |  | [optional] 
`icon_url` | **string** | Link to a small square icon for the connector. | [optional] 
`logo_url` | **string** | Link to the full logo for the connector. | [optional] 
`website_url` | **string** | Link to the connector\'s website. | [optional] 
`auth_type` | **string** | Type of authorization used by the connector | [optional] 
`status` | **string** | Status of the connector. Connectors with status live or beta are callable. | [optional] 
`settings` | [**Array&lt;ConnectorSetting&gt;**](ConnectorSetting.md) |  | [optional] 
`service_id` | **string** | Service provider identifier | [optional] 
`unified_apis` | [**Array&lt;ConnectorUnifiedApis&gt;**](ConnectorUnifiedApis.md) | List of Unified APIs that feature this connector. | [optional] 
`supported_resources` | [**Array&lt;ConnectorSupportedResources&gt;**](ConnectorSupportedResources.md) | List of resources that are supported on the connector. | [optional] 
`configurable_resources` | **Array&lt;string&gt;** | List of resources that have settings that can be configured. | [optional] 
`supported_events` | [**Array&lt;ConnectorSupportedEvents&gt;**](ConnectorSupportedEvents.md) | List of resources that are supported on the connector. | [optional] 





<a name="ConnectorAuthType"></a>
## Enum: Connector.auth_type


* `oauth2` (value: `'oauth2'`)

* `apiKey` (value: `'apiKey'`)

* `basic` (value: `'basic'`)

* `none` (value: `'none'`)




<a name="ConnectorStatus"></a>
## Enum: Connector.status


* `live` (value: `'live'`)

* `beta` (value: `'beta'`)

* `development` (value: `'development'`)

* `considering` (value: `'considering'`)




## Referenced Types:








* [`ConnectorSetting`](ConnectorSetting.md)

* [`ConnectorUnifiedApis`](ConnectorUnifiedApis.md)
* [`ConnectorSupportedResources`](ConnectorSupportedResources.md)

* [`ConnectorSupportedEvents`](ConnectorSupportedEvents.md)

---

[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

