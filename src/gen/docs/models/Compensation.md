# Apideck.Compensation

### Description

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
`id` | **string** | A unique identifier for an object. | [optional] 
`job_id` | **string** | The ID of the job to which the compensation belongs. | [optional] 
`rate` | **number** | The amount paid per payment unit. | [optional] 
`payment_unit` | [**PaymentUnit**](PaymentUnit.md) |  | [optional] 
`currency` | [**Currency**](Currency.md) |  | [optional] 
`flsa_status` | **string** | The FLSA status for this compensation. | [optional] 
`effective_date` | **string** | The date on which a change to an employee\'s compensation takes effect. | [optional] 
`payment_frequency` | **string** | Frequency of employee compensation. | [optional] 





<a name="CompensationFlsaStatus"></a>
## Enum: Compensation.flsa_status


* `exempt` (value: `'exempt'`)

* `salaried_nonexempt` (value: `'salaried-nonexempt'`)

* `nonexempt` (value: `'nonexempt'`)

* `owner` (value: `'owner'`)




<a name="CompensationPaymentFrequency"></a>
## Enum: Compensation.payment_frequency


* `weekly` (value: `'weekly'`)

* `biweekly` (value: `'biweekly'`)

* `monthly` (value: `'monthly'`)

* `pro_rata` (value: `'pro-rata'`)

* `other` (value: `'other'`)




## Referenced Types:



* [`PaymentUnit`](PaymentUnit.md)
* [`Currency`](Currency.md)




---

[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)


