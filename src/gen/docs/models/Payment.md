# Apideck.Payment

### Description

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
`total_amount` | **number** | Amount of payment | 
`transaction_date` | **Date** | Date transaction was entered - YYYY:MM::DDThh:mm:ss.sTZD | 
`id` | **string** | Unique identifier representing the entity | [optional] 
`currency` | [**Currency**](Currency.md) |  | [optional] 
`currency_rate` | **number** | Currency Exchange Rate at the time entity was recorded/generated. | [optional] 
`reference` | **string** | Optional payment reference message ie: Debit remittance detail. | [optional] 
`payment_method` | **string** | Payment method | [optional] 
`payment_method_reference` | **string** | Optional reference message returned by payment method on processing | [optional] 
`accounts_receivable_account_type` | **string** | Type of accounts receivable account. | [optional] 
`accounts_receivable_account_id` | **string** | Unique identifier for the account to allocate payment to. | [optional] 
`account` | [**LinkedLedgerAccount**](LinkedLedgerAccount.md) |  | [optional] 
`customer` | [**LinkedCustomer**](LinkedCustomer.md) |  | [optional] 
`reconciled` | **boolean** | Payment has been reconciled | [optional] 
`status` | **string** | Status of payment | [optional] 
`type` | **string** | Type of payment | [optional] 
`allocations` | **Array&lt;object&gt;** |  | [optional] 
`note` | **string** | Optional note to be associated with the payment. | [optional] 
`row_version` | **string** |  | [optional] 
`created_at` | **Date** |  | [optional] 
`updated_at` | **Date** |  | [optional] 





<a name="PaymentStatus"></a>
## Enum: Payment.status


* `authorised` (value: `'authorised'`)

* `paid` (value: `'paid'`)

* `voided` (value: `'voided'`)

* `deleted` (value: `'deleted'`)




<a name="PaymentType"></a>
## Enum: Payment.type


* `receivable` (value: `'accounts_receivable'`)

* `payable` (value: `'accounts_payable'`)

* `receivable_credit` (value: `'accounts_receivable_credit'`)

* `payable_credit` (value: `'accounts_payable_credit'`)

* `receivable_overpayment` (value: `'accounts_receivable_overpayment'`)

* `payable_overpayment` (value: `'accounts_payable_overpayment'`)

* `receivable_prepayment` (value: `'accounts_receivable_prepayment'`)

* `payable_prepayment` (value: `'accounts_payable_prepayment'`)




## Referenced Types:



* [`Currency`](Currency.md)






* [`LinkedLedgerAccount`](LinkedLedgerAccount.md)
* [`LinkedCustomer`](LinkedCustomer.md)









---

[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)


