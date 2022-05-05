# Apideck.Supplier

### Description

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
`id` | **string** |  | [optional] 
`company_name` | **string** |  | [optional] 
`display_name` | **string** | Display name of supplier. | [optional] 
`title` | **string** |  | [optional] 
`first_name` | **string** |  | [optional] 
`middle_name` | **string** |  | [optional] 
`last_name` | **string** |  | [optional] 
`suffix` | **string** |  | [optional] 
`addresses` | [**Array&lt;Address&gt;**](Address.md) |  | [optional] 
`notes` | **string** |  | [optional] 
`phone_numbers` | [**Array&lt;PhoneNumber&gt;**](PhoneNumber.md) |  | [optional] 
`emails` | [**Array&lt;Email&gt;**](Email.md) |  | [optional] 
`websites` | [**Array&lt;Website&gt;**](Website.md) |  | [optional] 
`tax_rate` | [**LinkedTaxRate**](LinkedTaxRate.md) |  | [optional] 
`tax_number` | **string** |  | [optional] 
`currency` | [**Currency**](Currency.md) |  | [optional] 
`bank_accounts` | [**BankAccount**](BankAccount.md) |  | [optional] 
`account` | [**LinkedLedgerAccount**](LinkedLedgerAccount.md) |  | [optional] 
`status` | **string** | Customer status | [optional] 
`updated_by` | **string** |  | [optional] 
`created_by` | **string** |  | [optional] 
`updated_at` | **Date** |  | [optional] 
`created_at` | **Date** |  | [optional] 
`row_version` | **string** |  | [optional] 





<a name="SupplierStatus"></a>
## Enum: Supplier.status


* `active` (value: `'active'`)

* `inactive` (value: `'inactive'`)

* `archived` (value: `'archived'`)

* `gdpr_erasure_request` (value: `'gdpr-erasure-request'`)

* `unknown` (value: `'unknown'`)




## Referenced Types:








* [`Address`](Address.md)

* [`PhoneNumber`](PhoneNumber.md)
* [`Email`](Email.md)
* [`Website`](Website.md)
* [`LinkedTaxRate`](LinkedTaxRate.md)

* [`Currency`](Currency.md)
* [`BankAccount`](BankAccount.md)
* [`LinkedLedgerAccount`](LinkedLedgerAccount.md)







---

[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)


