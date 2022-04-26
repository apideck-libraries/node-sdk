# Apideck.Payroll

### Description

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
`id` | **string** |  | 
`processed` | **boolean** | Whether or not the payroll has been successfully processed. Note that processed payrolls cannot be updated. | 
`check_date` | **string** | The date on which employees will be paid for the payroll. | 
`start_date` | **string** | The start date, inclusive, of the pay period. | 
`end_date` | **string** | The end date, inclusive, of the pay period. | 
`company_id` | **string** |  | [optional] 
`processed_date` | **string** | The date the payroll was processed. | [optional] 
`totals` | [**PayrollTotals**](.md) |  | [optional] 
`compensations` | [**Array&lt;Compensation&gt;**](Compensation.md) | An array of compensations for the payroll. | [optional] 





## Referenced Types:







* [``](.md)
* [`Compensation`](Compensation.md)

---

[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)


