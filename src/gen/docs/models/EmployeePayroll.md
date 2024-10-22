# Apideck.EmployeePayroll

### Description

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
`id` | **string** | A unique identifier for an object. | 
`processed` | **boolean** | Whether or not the payroll has been successfully processed. Note that processed payrolls cannot be updated. | 
`check_date` | **string** | The date on which employees will be paid for the payroll. | 
`start_date` | **string** | The start date, inclusive, of the pay period. | 
`end_date` | **string** | The end date, inclusive, of the pay period. | 
`employee_id` | **string** | ID of the employee | [optional] 
`company_id` | **string** | The unique identifier of the company. | [optional] 
`processed_date` | **string** | The date the payroll was processed. | [optional] 
`totals` | [**PayrollTotals**](PayrollTotals.md) |  | [optional] 
`compensations` | [**Array&lt;Compensation&gt;**](Compensation.md) | An array of compensations for the payroll. | [optional] 





## Referenced Types:








* [`PayrollTotals`](PayrollTotals.md)
* [`Compensation`](Compensation.md)

---

[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)


