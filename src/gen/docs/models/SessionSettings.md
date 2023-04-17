# Apideck.SessionSettings

### Description

Settings to change the way the Vault is displayed.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
`unified_apis` | [**Array&lt;UnifiedApiId&gt;**](UnifiedApiId.md) | Provide the IDs of the Unified APIs you want to be visible. Leaving it empty or omitting this field will show all Unified APIs. | [optional] 
`hide_resource_settings` | **boolean** | A boolean that controls the display of the configurable resources for an integration. When set to true, the resource configuration options will be hidden and not shown to the user. When set to false, the resource configuration options will be displayed to the user. | [optional] 
`sandbox_mode` | **boolean** | Configure [Vault](/apis/vault/reference#section/Get-Started) to show a banner informing the logged in user is in a test environment. | [optional] 
`isolation_mode` | **boolean** | Configure [Vault](/apis/vault/reference#section/Get-Started) to run in isolation mode, meaning it only shows the connection settings and hides the navigation items. | [optional] 
`session_length` | **string** | The duration of time the session is valid for (maximum 1 week). | [optional] 
`show_logs` | **boolean** | Configure [Vault](/apis/vault/reference#section/Get-Started) to show the logs page. Defaults to &#x60;true&#x60;. | [optional] 
`show_suggestions` | **boolean** | Configure [Vault](/apis/vault/reference#section/Get-Started) to show the suggestions page. Defaults to &#x60;false&#x60;. | [optional] 
`show_sidebar` | **boolean** | Configure [Vault](/apis/vault/reference#section/Get-Started) to show the sidebar. Defaults to &#x60;true&#x60;. | [optional] 
`auto_redirect` | **boolean** | Automatically redirect to redirect uri after the connection has been configured as callable. Defaults to &#x60;false&#x60;. | [optional] 
`hide_guides` | **boolean** | Hide Apideck connection guides in [Vault](/apis/vault/reference#section/Get-Started). Defaults to &#x60;false&#x60;. | [optional] 
`allow_actions` | **Array&lt;string&gt;** | Hide actions from your users in [Vault](/apis/vault/reference#section/Get-Started). Actions in &#x60;allow_actions&#x60; will be shown on a connection in Vault. Available actions are: &#x60;delete&#x60;, &#x60;disconnect&#x60;, &#x60;reauthorize&#x60; and &#x60;disable&#x60;. Empty array will hide all actions. By default all actions are visible. | [optional] 





<a name="Array<SessionSettingsAllowActions>"></a>
## Enum: SessionSettings.allow_actions


* `delete` (value: `'delete'`)

* `disconnect` (value: `'disconnect'`)

* `reauthorize` (value: `'reauthorize'`)

* `disable` (value: `'disable'`)




## Referenced Types:
* [`UnifiedApiId`](UnifiedApiId.md)











---

[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)


