# Apideck.SessionSettings

### Description

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
`unified_apis` | [**Array&lt;UnifiedApiId&gt;**](UnifiedApiId.md) | Provide the IDs of the Unified APIs you want to be visible. Leaving it empty or omiting this field will show all Unified APIs. | [optional] 
`hide_resource_settings` | **boolean** |  | [optional] 
`sandbox_mode` | **boolean** | Configure [Vault](/apis/vault/reference#section/Get-Started) to show a banner informing the logged in user is in a test environment. | [optional] 
`isolation_mode` | **boolean** | Configure [Vault](/apis/vault/reference#section/Get-Started) to run in isolation mode, meaning it only shows the connection settings and hides the navigation items. | [optional] 
`session_length` | **string** | The duration of time the session is valid for (maximum 1 week). | [optional] 
`show_logs` | **boolean** | Configure [Vault](/apis/vault/reference#section/Get-Started) to show the logs page. Defaults to &#x60;true&#x60;. | [optional] 
`show_suggestions` | **boolean** | Configure [Vault](/apis/vault/reference#section/Get-Started) to show the suggestions page. Defaults to &#x60;true&#x60;. | [optional] 
`auto_redirect` | **boolean** | Automatically redirect to redirect uri after the connection has been configured as callable. Defaults to &#x60;false&#x60;. | [optional] 





## Referenced Types:
* [`UnifiedApiId`](UnifiedApiId.md)








---

[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)


