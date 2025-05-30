# Apideck.BankFeedStatementTransactions

### Description

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
`posted_date` | **Date** | The date of the transaction - YYYY:MM::DDThh:mm:ss.sTZD | 
`amount` | **number** | The amount of the transaction. | 
`credit_or_debit` | [**CreditOrDebit**](CreditOrDebit.md) |  | 
`source_transaction_id` | **string** | The ID of the source transaction. | 
`description` | **string** | A description of the transaction. | [optional] 
`counterparty` | **string** | The counterparty of the transaction. | [optional] 
`reference` | **string** | The reference of the transaction. | [optional] 
`transaction_type` | **string** | Type of transaction. | [optional] 





<a name="BankFeedStatementTransactionsTransactionType"></a>
## Enum: BankFeedStatementTransactions.transaction_type


* `credit` (value: `'credit'`)

* `debit` (value: `'debit'`)

* `deposit` (value: `'deposit'`)

* `transfer` (value: `'transfer'`)

* `payment` (value: `'payment'`)

* `other` (value: `'other'`)




## Referenced Types:


* [`CreditOrDebit`](CreditOrDebit.md)






---

[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)


