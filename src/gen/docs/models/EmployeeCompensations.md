# Apideck.EmployeeCompensations

### Description

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
`id` | **string** |  | [optional] 
`job_id` | **string** | The ID of the job to which the compensation belongs. | [optional] 
`rate` | **number** | The amount paid per payment unit. | [optional] 
`payment_unit` | [**PaymentUnit**](PaymentUnit.md) |  | [optional] 
`currency` | [**Currency**](Currency.md) |  | [optional] 
`flsa_status` | **string** | The FLSA status for this compensation. | [optional] 
`effective_date` | **string** | The effective date for this compensation. | [optional] 





<a name="EmployeeCompensationsFlsaStatus"></a>
## Enum: EmployeeCompensations.flsa_status


* `exempt` (value: `'exempt'`)

* `salaried_nonexempt` (value: `'salaried-nonexempt'`)

* `nonexempt` (value: `'nonexempt'`)

* `owner` (value: `'owner'`)




## Referenced Types:



* [`PaymentUnit`](PaymentUnit.md)
* [`Currency`](Currency.md)



---

[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)


