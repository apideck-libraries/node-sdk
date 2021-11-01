# Apideck.Payment

### Description

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
`total_amount` | **number** | Amount of payment | 
`accounts_receivable_account_id` | **string** | Unique identifier for the account to allocate payment to. | 
`transaction_date` | **Date** | Date transction was entered - YYYY:MM::DDThh:mm:ss.sTZD | 
`id` | **string** | Unique identifier representing the entity | [optional] 
`currency` | [**Currency**](Currency.md) |  | [optional] 
`currency_rate` | **number** | Exchange rate when payment is received | [optional] 
`reference` | **string** | Optional payment reference message ie: Debit remittance detail. | [optional] 
`accounts_receivable_account_type` | **string** | Type of accounts receivable account. | [optional] 
`customer` | [**Customer1**](Customer1.md) |  | [optional] 
`allocations` | **Array&lt;object&gt;** |  | [optional] 





## Referenced Types:




* [`Currency`](Currency.md)



* [`Customer1`](Customer1.md)


---

[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)


