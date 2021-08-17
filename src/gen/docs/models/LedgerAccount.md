# Apideck.LedgerAccount

### Description

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
`id` | **string** |  | [optional] 
`display_id` | **string** |  | [optional] 
`nominal_code` | **string** |  | [optional] 
`classification` | **string** |  | [optional] 
`type` | **string** |  | [optional] 
`sub_type` | **string** |  | [optional] 
`name` | **string** |  | [optional] 
`fully_qualified_name` | **string** |  | [optional] 
`description` | **string** |  | [optional] 
`opening_balance` | **number** | The opening balance. A positive integer representing the smallest currency unit (e.g., 100 cents equals $1.00 or 100 equals ¥100, a zero-decimal currency) | [optional] 
`current_balance` | **number** | The current balance. A positive integer representing the smallest currency unit (e.g., 20000 cents equals $200.00 or 20000 equals ¥20000, a zero-decimal currency) | [optional] 
`currency` | [**Currency**](Currency.md) |  | [optional] 
`tax_type` | **string** |  | [optional] 
`tax_code` | **string** |  | [optional] 
`level` | **string** |  | [optional] 
`active` | **boolean** |  | [optional] 
`bank_account` | [**BankAccount**](BankAccount.md) |  | [optional] 
`parent_account` | [**LedgerAccountParentAccount**](LedgerAccountParentAccount.md) |  | [optional] 
`sub_account` | **boolean** |  | [optional] 
`sub_accounts` | **Array&lt;object&gt;** |  | [optional] 
`last_reconciliation_date` | **Date** | Reconciliation Date means the last calendar day of each Reconciliation Period. | [optional] 
`updated_by` | **string** |  | [optional] 
`created_by` | **string** |  | [optional] 
`updated_at` | **Date** |  | [optional] 
`created_at` | **Date** |  | [optional] 





<a name="LedgerAccountClassification"></a>
## Enum: LedgerAccount.classification


* `asset` (value: `'asset'`)

* `equity` (value: `'equity'`)

* `expense` (value: `'expense'`)

* `liability` (value: `'liability'`)

* `revenue` (value: `'revenue'`)

* `income` (value: `'income'`)

* `other_income` (value: `'other_income'`)

* `other_expense` (value: `'other_expense'`)

* `costs_of_sales` (value: `'costs_of_sales'`)




<a name="LedgerAccountType"></a>
## Enum: LedgerAccount.type


* `accounts_receivable` (value: `'accounts_receivable'`)

* `bank` (value: `'bank'`)

* `current_asset` (value: `'current_asset'`)

* `non_current_asset` (value: `'non_current_asset'`)

* `other_asset` (value: `'other_asset'`)

* `equity` (value: `'equity'`)

* `expense` (value: `'expense'`)

* `other_expense` (value: `'other_expense'`)

* `costs_of_sales` (value: `'costs_of_sales'`)

* `accounts_payable` (value: `'accounts_payable'`)

* `credit_card` (value: `'credit_card'`)

* `current_liability` (value: `'current_liability'`)

* `non_current_liability` (value: `'non_current_liability'`)

* `other_liability` (value: `'other_liability'`)




## Referenced Types:











* [`Currency`](Currency.md)




* [`BankAccount`](BankAccount.md)
* [`LedgerAccountParentAccount`](LedgerAccountParentAccount.md)








---

[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)


