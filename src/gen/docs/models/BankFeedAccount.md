# Apideck.BankFeedAccount

### Description

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
`id` | **string** | A unique identifier for an object. | 
`bank_account_type` | **string** | Type of the bank account. | [optional] 
`source_account_id` | **string** | The source account\'s unique identifier. | [optional] 
`target_account_id` | **string** | The target account\'s unique identifier in the accounting connector. | [optional] 
`target_account_name` | **string** | Name associated with the target account. | [optional] 
`target_account_number` | **string** | Account number of the destination bank account. | [optional] 
`currency` | [**Currency**](Currency.md) |  | [optional] 
`feed_status` | **string** | Current status of the bank feed. | [optional] 
`country` | **string** | Country code according to ISO 3166-1 alpha-2. | [optional] 
`custom_fields` | [**Array&lt;CustomField&gt;**](CustomField.md) |  | [optional] 
`custom_mappings` | [**CustomMappings**](CustomMappings.md) |  | [optional] 
`created_at` | **Date** | The date and time when the object was created. | [optional] 
`updated_at` | **Date** | The date and time when the object was last updated. | [optional] 
`updated_by` | **string** | The user who last updated the object. | [optional] 
`created_by` | **string** | The user who created the object. | [optional] 





<a name="BankFeedAccountBankAccountType"></a>
## Enum: BankFeedAccount.bank_account_type


* `bank` (value: `'bank'`)

* `credit_card` (value: `'credit_card'`)




<a name="BankFeedAccountFeedStatus"></a>
## Enum: BankFeedAccount.feed_status


* `pending` (value: `'pending'`)

* `rejected` (value: `'rejected'`)




## Referenced Types:






* [`Currency`](Currency.md)


* [`CustomField`](CustomField.md)
* [`CustomMappings`](CustomMappings.md)





---

[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)


