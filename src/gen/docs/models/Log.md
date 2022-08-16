# Apideck.Log

### Description

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
`api_style` | **string** | Indicates if the request was made via REST or Graphql endpoint. | 
`base_url` | **string** | The Apideck base URL the request was made to. | 
`child_request` | **boolean** | Indicates whether or not this is a child or parent request. | 
`consumer_id` | **string** | The consumer Id associated with the request. | 
`duration` | **number** | The entire execution time in milliseconds it took to call the Apideck service provider. | 
`execution` | **number** | The entire execution time in milliseconds it took to make the request. | 
`has_children` | **boolean** | When request is a parent request, this indicates if there are child requests associated. | 
`http_method` | **string** | HTTP Method of request. | 
`id` | **string** | UUID acting as Request Identifier. | 
`latency` | **number** | Latency added by making this request via Unified Api. | 
`operation` | [**LogOperation**](LogOperation.md) |  | 
`parent_id` | **string** | When request is a child request, this UUID indicates it\'s parent request. | 
`path` | **string** | The path component of the URI the request was made to. | 
`sandbox` | **boolean** | Indicates whether the request was made using Apidecks sandbox credentials or not. | 
`service` | [**LogService**](LogService.md) |  | 
`status_code` | **number** | HTTP Status code that was returned. | 
`success` | **boolean** | Whether or not the request was successful. | 
`timestamp` | **string** | ISO Date and time when the request was made. | 
`unified_api` | **string** | Which Unified Api request was made to. | 
`error_message` | **string** | If error occurred, this is brief explanation | [optional] 
`source_ip` | **string** | The IP address of the source of the request. | [optional] 





<a name="LogUnifiedApi"></a>
## Enum: Log.unified_api


* `crm` (value: `'crm'`)

* `lead` (value: `'lead'`)

* `proxy` (value: `'proxy'`)

* `vault` (value: `'vault'`)

* `accounting` (value: `'accounting'`)

* `hris` (value: `'hris'`)

* `ats` (value: `'ats'`)

* `pos` (value: `'pos'`)

* `file_storage` (value: `'file-storage'`)

* `sms` (value: `'sms'`)




## Referenced Types:










* [`LogOperation`](LogOperation.md)



* [`LogService`](LogService.md)







---

[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)


