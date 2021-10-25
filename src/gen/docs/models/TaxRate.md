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
`tax_payable_account_id` | **string** | Unique identifier for the account for tax collected. | [optional] 
`tax_remitted_account_id` | **string** | Unique identifier for the account for tax remitted. | [optional] 
`components` | **Array&lt;object&gt;** |  | [optional] 
`tax_type` | **string** | Tax type used to define the source of tax collected or paid | [optional] 
`original_tax_rate_id` | **string** | ID of the original tax rate from which the new tax rate is derived. Helps to understand the relationship between corresponding tax rate entities. | [optional] 
`active` | **boolean** |  | [optional] 
`row_version` | **string** |  | [optional] 
`updated_by` | **string** |  | [optional] 
`created_by` | **string** |  | [optional] 
`updated_at` | **Date** |  | [optional] 
`created_at` | **Date** |  | [optional] 





<a name="TaxRateTaxType"></a>
## Enum: TaxRate.tax_type


* `output` (value: `'output'`)

* `input` (value: `'input'`)

* `withholdings` (value: `'withholdings'`)

* `import_gst` (value: `'import_gst'`)

* `output_gst` (value: `'output_gst'`)

* `input_exempt` (value: `'input_exempt'`)

* `output_exempt` (value: `'output_exempt'`)

* `consolidated` (value: `'consolidated'`)

* `luxury_car_tax` (value: `'luxury_car_tax'`)

* `none` (value: `'none'`)




---

[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)


