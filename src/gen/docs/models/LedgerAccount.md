# Apideck.LedgerAccount

### Description

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
`id` | **string** |  | [optional] 
`displayId` | **string** |  | [optional] 
`nominalCode` | **string** |  | [optional] 
`classification` | **string** |  | [optional] 
`type` | **string** |  | [optional] 
`subType` | **string** |  | [optional] 
`name` | **string** |  | [optional] 
`fullyQualifiedName` | **string** |  | [optional] 
`description` | **string** |  | [optional] 
`openingBalance` | **number** | The opening balance. A positive integer representing the smallest currency unit (e.g., 100 cents equals $1.00 or 100 equals ¥100, a zero-decimal currency) | [optional] 
`currentBalance` | **number** | The current balance. A positive integer representing the smallest currency unit (e.g., 20000 cents equals $200.00 or 20000 equals ¥20000, a zero-decimal currency) | [optional] 
`currency` | [**Currency**](Currency.md) |  | [optional] 
`taxType` | **string** |  | [optional] 
`taxCode` | **string** |  | [optional] 
`level` | **string** |  | [optional] 
`active` | **boolean** |  | [optional] 
`bankAccount` | [**BankAccount**](BankAccount.md) |  | [optional] 
`parentAccount` | [**LedgerAccountParentAccount**](LedgerAccountParentAccount.md) |  | [optional] 
`subAccount` | **boolean** |  | [optional] 
`subAccounts` | **Array&lt;object&gt;** |  | [optional] 
`lastReconciliationDate` | **Date** | Reconciliation Date means the last calendar day of each Reconciliation Period. | [optional] 
`updatedBy` | **string** |  | [optional] 
`createdBy` | **string** |  | [optional] 
`updatedAt` | **Date** |  | [optional] 
`createdAt` | **Date** |  | [optional] 





<a name="LedgerAccountClassification"></a>
## Enum: LedgerAccount.classification


* `asset` (value: `'asset'`)

* `equity` (value: `'equity'`)

* `expense` (value: `'expense'`)

* `liability` (value: `'liability'`)

* `revenue` (value: `'revenue'`)

* `income` (value: `'income'`)

* `otherIncome` (value: `'other_income'`)

* `otherExpense` (value: `'other_expense'`)

* `costsOfSales` (value: `'costs_of_sales'`)




<a name="LedgerAccountType"></a>
## Enum: LedgerAccount.type


* `accountsReceivable` (value: `'accounts_receivable'`)

* `bank` (value: `'bank'`)

* `currentAsset` (value: `'current_asset'`)

* `nonCurrentAsset` (value: `'non_current_asset'`)

* `otherAsset` (value: `'other_asset'`)

* `equity` (value: `'equity'`)

* `expense` (value: `'expense'`)

* `otherExpense` (value: `'other_expense'`)

* `costsOfSales` (value: `'costs_of_sales'`)

* `accountsPayable` (value: `'accounts_payable'`)

* `creditCard` (value: `'credit_card'`)

* `currentLiability` (value: `'current_liability'`)

* `nonCurrentLiability` (value: `'non_current_liability'`)

* `otherLiability` (value: `'other_liability'`)




## Referenced Types:











* [`Currency`](Currency.md)




* [`BankAccount`](BankAccount.md)
* [`LedgerAccountParentAccount`](LedgerAccountParentAccount.md)








---

[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)


