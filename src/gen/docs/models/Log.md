# Apideck.Log

### Description

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
`apiStyle` | **string** | Indicates if the request was made via REST or Graphql endpoint. | 
`baseUrl` | **string** | The Apideck base URL the request was made to. | 
`childRequest` | **boolean** | Indicates whether or not this is a child or parent request. | 
`consumerId` | **string** | The consumer Id associated with the request. | 
`duration` | **number** | The entire execution time in milliseconds it took to call the Apideck service provider. | 
`execution` | **number** | The entire execution time in milliseconds it took to make the request. | 
`hasChildren` | **boolean** | When request is a parent request, this indicates if there are child requests associated. | 
`httpMethod` | **string** | HTTP Method of request. | 
`id` | **string** | UUID acting as Request Identifier. | 
`latency` | **number** | Latency added by making this request via Unified Api. | 
`operation` | [**LogOperation**](LogOperation.md) |  | 
`parentId` | **string** | When request is a child request, this UUID indicates it\'s parent request. | 
`path` | **string** | The path component of the URI the request was made to. | 
`sandbox` | **boolean** | Indicates whether the request was made using Apidecks sandbox credentials or not. | 
`service` | [**LogService**](LogService.md) |  | 
`statusCode` | **number** | HTTP Status code that was returned. | 
`success` | **boolean** | Whether or not the request was successful. | 
`timestamp` | **string** | ISO Date and time when the request was made. | 
`unifiedApi` | **string** | Which Unified Api request was made to. | 
`errorMessage` | **string** | If error occured, this is brief explanation | [optional] 
`sourceIp` | **string** | The IP address of the source of the request. | [optional] 





<a name="LogUnifiedApi"></a>
## Enum: Log.unified_api


* `crm` (value: `'crm'`)

* `lead` (value: `'lead'`)

* `proxy` (value: `'proxy'`)

* `vault` (value: `'vault'`)




## Referenced Types:










* [`LogOperation`](LogOperation.md)



* [`LogService`](LogService.md)







---

[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)


