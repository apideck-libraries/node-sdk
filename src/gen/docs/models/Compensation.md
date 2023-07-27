# Apideck.Compensation

### Description

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
`employee_id` | **string** | A unique identifier for an object. | 
`net_pay` | **number** | The employee\'s net pay. Only available when payroll has been processed | [optional] 
`gross_pay` | **number** | The employee\'s gross pay. Only available when payroll has been processed | [optional] 
`taxes` | [**Array&lt;Tax&gt;**](Tax.md) | An array of employer and employee taxes for the pay period. | [optional] 
`deductions` | [**Array&lt;Deduction&gt;**](Deduction.md) | An array of employee deductions for the pay period. | [optional] 
`benefits` | [**Array&lt;Benefit&gt;**](Benefit.md) | An array of employee benefits for the pay period. | [optional] 





## Referenced Types:



* [`Tax`](Tax.md)
* [`Deduction`](Deduction.md)
* [`Benefit`](Benefit.md)

---

[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)


