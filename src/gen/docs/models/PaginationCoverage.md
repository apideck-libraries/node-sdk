# Apideck.PaginationCoverage

### Description

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
`mode` | **string** | How pagination is implemented on this connector. Native mode means Apideck is using the pagination parameters of the connector. With virtual pagination, the connector does not support pagination, but Apideck emulates it. | [optional] 
`paging_support` | **boolean** | Indicates whether the connector supports paging through results using the cursor parameter. | [optional] 
`limit_support` | **boolean** | Indicates whether the connector supports changing the page size by using the limit parameter. | [optional] 





<a name="PaginationCoverageMode"></a>
## Enum: PaginationCoverage.mode


* `native` (value: `'native'`)

* `virtual` (value: `'virtual'`)




---

[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)


