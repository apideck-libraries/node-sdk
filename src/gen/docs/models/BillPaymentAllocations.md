# Apideck.BillPaymentAllocations

### Description

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
`id` | **string** | A unique identifier for an object. | [optional] 
`type` | **string** | Type of entity this payment should be attributed to. | [optional] 
`code` | **string** |  | [optional] 
`amount` | **number** | Amount of payment that should be attributed to this allocation. If null, the total_amount will be used. | [optional] 
`allocation_id` | **string** | Unique identifier of the allocation | [optional] 





<a name="BillPaymentAllocationsType"></a>
## Enum: BillPaymentAllocations.type


* `bill` (value: `'bill'`)

* `expense` (value: `'expense'`)

* `credit_memo` (value: `'credit_memo'`)

* `over_payment` (value: `'over_payment'`)

* `pre_payment` (value: `'pre_payment'`)

* `journal_entry` (value: `'journal_entry'`)

* `other` (value: `'other'`)




---

[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)


