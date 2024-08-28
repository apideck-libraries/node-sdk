# Apideck.LedgerAccount

### Description

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
`id` | **string** | A unique identifier for an object. | [optional] 
`display_id` | **string** | The human readable display ID used when displaying the account | [optional] 
`nominal_code` | **string** | The nominal code of the ledger account. | [optional] 
`code` | **string** | The code assigned to the account. | [optional] 
`classification` | **string** | The classification of account. | [optional] 
`type` | **string** | The type of account. | [optional] 
`sub_type` | **string** | The sub type of account. | [optional] 
`name` | **string** | The name of the account. | [optional] 
`fully_qualified_name` | **string** | The fully qualified name of the account. | [optional] 
`description` | **string** | The description of the account. | [optional] 
`opening_balance` | **number** | The opening balance of the account. | [optional] 
`current_balance` | **number** | The current balance of the account. | [optional] 
`currency` | [**Currency**](Currency.md) |  | [optional] 
`tax_type` | **string** | The tax type of the account. | [optional] 
`tax_rate` | [**LinkedTaxRate**](LinkedTaxRate.md) |  | [optional] 
`level` | **number** |  | [optional] 
`active` | **boolean** | Whether the account is active or not. | [optional] 
`status` | **string** | The status of the account. | [optional] 
`header` | **boolean** | Whether the account is a header or not. | [optional] 
`bank_account` | [**BankAccount**](BankAccount.md) |  | [optional] 
`categories` | [**Array&lt;LedgerAccountCategories&gt;**](LedgerAccountCategories.md) | The categories of the account. | [optional] 
`parent_account` | [**LedgerAccountParentAccount**](LedgerAccountParentAccount.md) |  | [optional] 
`sub_account` | **boolean** | Whether the account is a sub account or not. | [optional] 
`sub_accounts` | **Array&lt;object&gt;** | The sub accounts of the account. | [optional] 
`last_reconciliation_date` | **Date** | Reconciliation Date means the last calendar day of each Reconciliation Period. | [optional] 
`custom_mappings` | **object** | When custom mappings are configured on the resource, the result is included here. | [optional] 
`row_version` | **string** | A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object. | [optional] 
`updated_by` | **string** | The user who last updated the object. | [optional] 
`created_by` | **string** | The user who created the object. | [optional] 
`updated_at` | **Date** | The date and time when the object was last updated. | [optional] 
`created_at` | **Date** | The date and time when the object was created. | [optional] 
`pass_through` | [**PassThroughBody**](PassThroughBody.md) |  | [optional] 





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

* `other` (value: `'other'`)




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

* `other` (value: `'other'`)




<a name="LedgerAccountStatus"></a>
## Enum: LedgerAccount.status


* `active` (value: `'active'`)

* `inactive` (value: `'inactive'`)

* `archived` (value: `'archived'`)




## Referenced Types:












* [`Currency`](Currency.md)

* [`LinkedTaxRate`](LinkedTaxRate.md)




* [`BankAccount`](BankAccount.md)
* [`LedgerAccountCategories`](LedgerAccountCategories.md)
* [`LedgerAccountParentAccount`](LedgerAccountParentAccount.md)









* [`PassThroughBody`](PassThroughBody.md)

---

[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)


