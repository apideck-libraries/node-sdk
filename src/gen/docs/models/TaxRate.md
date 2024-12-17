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
`custom_mappings` | **object** | When custom mappings are configured on the resource, the result is included here. | [optional] 
`row_version` | **string** | A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object. | [optional] 
`updated_by` | **string** | The user who last updated the object. | [optional] 
`created_by` | **string** | The user who created the object. | [optional] 
`updated_at` | **Date** | The date and time when the object was last updated. | [optional] 
`created_at` | **Date** | The date and time when the object was created. | [optional] 
`pass_through` | [**PassThroughBody**](PassThroughBody.md) |  | [optional] 
`subsidiaries` | **Array&lt;object&gt;** | The subsidiaries this belongs to. | [optional] 





<a name="TaxRateStatus"></a>
## Enum: TaxRate.status


* `active` (value: `'active'`)

* `inactive` (value: `'inactive'`)

* `archived` (value: `'archived'`)




## Referenced Types:



















* [`PassThroughBody`](PassThroughBody.md)


---

[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)


