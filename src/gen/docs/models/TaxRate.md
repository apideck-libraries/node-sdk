# Apideck.TaxRate

### Description

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
`id` | **string** |  | [optional] 
`name` | **string** |  | [optional] 
`code` | **string** |  | [optional] 
`description` | **string** |  | [optional] 
`effective_tax_rate` | **number** |  | [optional] 
`total_tax_rate` | **number** | Not compounded sum of the components of a tax rate | [optional] 
`components` | **Array&lt;object&gt;** |  | [optional] 
`special_tax_type` | **string** | Special tax type to handle zero rate taxes. Used with VAT registered Businesses who receive goods/services (acquisitions) from other EU countries, will need to calculate the VAT due, but not paid, on these acquisitions. The rate of VAT payable is the same that would have been paid if the goods had been supplied by a UK supplier. | [optional] 
`original_tax_rate_id` | **string** | ID of the original tax rate from which the new tax rate is derived. Helps to understand the relationship between corresponding tax rate entities. | [optional] 
`active` | **boolean** |  | [optional] 
`updated_by` | **string** |  | [optional] 
`created_by` | **string** |  | [optional] 
`updated_at` | **Date** |  | [optional] 
`created_at` | **Date** |  | [optional] 





---

[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)


