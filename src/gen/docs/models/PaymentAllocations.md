# Apideck.PaymentAllocations

### Description

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
`id` | **string** | Unique identifier of entity this payment should be attributed to. | [optional] 
`type` | **string** | Type of entity this payment should be attributed to. | [optional] 
`code` | **string** |  | [optional] 
`amount` | **number** | Amount of payment that should be attributed to this allocation. If null, the total_amount will be used. | [optional] 





<a name="PaymentAllocationsType"></a>
## Enum: PaymentAllocations.type


* `invoice` (value: `'invoice'`)

* `order` (value: `'order'`)

* `expense` (value: `'expense'`)

* `credit_memo` (value: `'credit_memo'`)

* `over_payment` (value: `'over_payment'`)

* `pre_payment` (value: `'pre_payment'`)




---

[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)


