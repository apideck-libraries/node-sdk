# Apideck.TaxRate

### Description

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
`id` | **string** | ID assigned to identify this tax rate. | [optional] 
`name` | **string** | Name assigned to identify this tax rate. | [optional] 
`code` | **string** | Tax code assigned to identify this tax rate. | [optional] 
`description` | **string** | Description of tax rate | [optional] 
`effective_tax_rate` | **number** | Effective tax rate | [optional] 
`total_tax_rate` | **number** | Not compounded sum of the components of a tax rate | [optional] 
`tax_payable_account_id` | **string** | Unique identifier for the account for tax collected. | [optional] 
`tax_remitted_account_id` | **string** | Unique identifier for the account for tax remitted. | [optional] 
`components` | **Array&lt;object&gt;** |  | [optional] 
`type` | **string** | Tax type used to indicate the source of tax collected or paid | [optional] 
`report_tax_type` | **string** | Report Tax type to aggregate tax collected or paid for reporting purposes | [optional] 
`original_tax_rate_id` | **string** | ID of the original tax rate from which the new tax rate is derived. Helps to understand the relationship between corresponding tax rate entities. | [optional] 
`status` | **string** | Tax rate status | [optional] 
`row_version` | **string** |  | [optional] 
`updated_by` | **string** |  | [optional] 
`created_by` | **string** |  | [optional] 
`updated_at` | **Date** |  | [optional] 
`created_at` | **Date** |  | [optional] 





<a name="TaxRateStatus"></a>
## Enum: TaxRate.status


* `active` (value: `'active'`)

* `inactive` (value: `'inactive'`)

* `archived` (value: `'archived'`)




---

[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)


