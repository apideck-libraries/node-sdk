# Apideck.TaxRate

### Description

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
`id` | **string** |  | [optional] 
`name` | **string** |  | [optional] 
`code` | **string** |  | [optional] 
`description` | **string** |  | [optional] 
`effectiveTaxRate` | **number** |  | [optional] 
`totalTaxRate` | **number** | Not compounded sum of the components of a tax rate | [optional] 
`components` | **Array&lt;object&gt;** |  | [optional] 
`specialTaxType` | **string** | Special tax type to handle zero rate taxes. Used with VAT registered Businesses who receive goods/services (acquisitions) from other EU countries, will need to calculate the VAT due, but not paid, on these acquisitions. The rate of VAT payable is the same that would have been paid if the goods had been supplied by a UK supplier. | [optional] 
`originalTaxRateId` | **string** | ID of the original tax rate from which the new tax rate is derived. Helps to understand the relationship between corresponding tax rate entities. | [optional] 
`active` | **boolean** |  | [optional] 
`updatedBy` | **string** |  | [optional] 
`createdBy` | **string** |  | [optional] 
`updatedAt` | **Date** |  | [optional] 
`createdAt` | **Date** |  | [optional] 





---

[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)


