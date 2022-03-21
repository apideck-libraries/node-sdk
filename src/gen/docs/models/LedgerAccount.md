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
`opening_balance` | **number** |  | [optional] 
`current_balance` | **number** |  | [optional] 
`currency` | [**Currency**](Currency.md) |  | [optional] 
`tax_type` | **string** |  | [optional] 
`tax_rate` | [**LinkedTaxRate**](LinkedTaxRate.md) |  | [optional] 
`level` | **number** |  | [optional] 
`active` | **boolean** |  | [optional] 
`status` | **string** |  | [optional] 
`header` | **boolean** |  | [optional] 
`bank_account` | [**BankAccount**](BankAccount.md) |  | [optional] 
`categories` | **Array&lt;object&gt;** |  | [optional] 
`parent_account` | [**LedgerAccountParentAccount**](LedgerAccountParentAccount.md) |  | [optional] 
`sub_account` | **boolean** |  | [optional] 
`sub_accounts` | **Array&lt;object&gt;** |  | [optional] 
`last_reconciliation_date` | **Date** | Reconciliation Date means the last calendar day of each Reconciliation Period. | [optional] 
`row_version` | **string** |  | [optional] 
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

* `revenue` (value: `'revenue'`)

* `sales` (value: `'sales'`)

* `other_income` (value: `'other_income'`)

* `bank` (value: `'bank'`)

* `current_asset` (value: `'current_asset'`)

* `fixed_asset` (value: `'fixed_asset'`)

* `non_current_asset` (value: `'non_current_asset'`)

* `other_asset` (value: `'other_asset'`)

* `balancesheet` (value: `'balancesheet'`)

* `equity` (value: `'equity'`)

* `expense` (value: `'expense'`)

* `other_expense` (value: `'other_expense'`)

* `costs_of_sales` (value: `'costs_of_sales'`)

* `accounts_payable` (value: `'accounts_payable'`)

* `credit_card` (value: `'credit_card'`)

* `current_liability` (value: `'current_liability'`)

* `non_current_liability` (value: `'non_current_liability'`)

* `other_liability` (value: `'other_liability'`)




<a name="LedgerAccountStatus"></a>
## Enum: LedgerAccount.status


* `active` (value: `'active'`)

* `inactive` (value: `'inactive'`)

* `archived` (value: `'archived'`)




## Referenced Types:











* [`Currency`](Currency.md)

* [`LinkedTaxRate`](LinkedTaxRate.md)




* [`BankAccount`](BankAccount.md)

* [`LedgerAccountParentAccount`](LedgerAccountParentAccount.md)









---

[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)


