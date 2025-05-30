# Apideck.BankFeedStatement

### Description

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
`id` | **string** | A unique identifier for an object. | 
`bank_feed_account_id` | **string** | The ID of the bank feed account this statement belongs to. | [optional] 
`status` | **string** | The current status of the bank feed statement. | [optional] 
`start_date` | **Date** | Start date of the bank feed statement. | [optional] 
`end_date` | **Date** | End date of the bank feed statement. | [optional] 
`start_balance` | **number** | Balance amount at the start of the period. | [optional] 
`start_balance_credit_or_debit` | [**CreditOrDebit**](CreditOrDebit.md) |  | [optional] 
`end_balance` | **number** | Balance amount at the end of the period. | [optional] 
`end_balance_credit_or_debit` | [**CreditOrDebit**](CreditOrDebit.md) |  | [optional] 
`transactions` | [**Array&lt;BankFeedStatementTransactions&gt;**](BankFeedStatementTransactions.md) | List of transactions in the bank feed statement. | [optional] 
`created_at` | **Date** | The date and time when the object was created. | [optional] 
`created_by` | **string** | The user who created the object. | [optional] 
`updated_at` | **Date** | The date and time when the object was last updated. | [optional] 
`updated_by` | **string** | The user who last updated the object. | [optional] 





<a name="BankFeedStatementStatus"></a>
## Enum: BankFeedStatement.status


* `pending` (value: `'pending'`)

* `rejected` (value: `'rejected'`)

* `success` (value: `'success'`)




## Referenced Types:






* [`CreditOrDebit`](CreditOrDebit.md)

* [`CreditOrDebit`](CreditOrDebit.md)
* [`BankFeedStatementTransactions`](BankFeedStatementTransactions.md)





---

[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)


