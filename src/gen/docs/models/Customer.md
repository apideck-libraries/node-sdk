# Apideck.Customer

### Description

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
`id` | **string** |  | [optional] 
`display_id` | **string** |  | [optional] 
`company_name` | **string** |  | [optional] 
`first_name` | **string** |  | [optional] 
`last_name` | **string** |  | [optional] 
`individual` | **boolean** |  | [optional] 
`addresses` | [**Array&lt;Address&gt;**](Address.md) |  | [optional] 
`notes` | **string** |  | [optional] 
`phone_numbers` | [**Array&lt;PhoneNumber&gt;**](PhoneNumber.md) |  | [optional] 
`emails` | [**Array&lt;Email&gt;**](Email.md) |  | [optional] 
`tax_rate` | [**LinkedTaxRate**](LinkedTaxRate.md) |  | [optional] 
`tax_number` | **string** |  | [optional] 
`currency` | [**Currency**](Currency.md) |  | [optional] 
`bank_accounts` | [**BankAccount**](BankAccount.md) |  | [optional] 
`status` | **string** | Customer status | [optional] 
`row_version` | **string** |  | [optional] 
`updated_by` | **string** |  | [optional] 
`created_by` | **string** |  | [optional] 
`updated_at` | **Date** |  | [optional] 
`created_at` | **Date** |  | [optional] 





<a name="CustomerStatus"></a>
## Enum: Customer.status


* `active` (value: `'active'`)

* `archived` (value: `'archived'`)

* `gdpr_erasure_request` (value: `'gdpr-erasure-request'`)

* `unknown` (value: `'unknown'`)




## Referenced Types:






* [`Address`](Address.md)

* [`PhoneNumber`](PhoneNumber.md)
* [`Email`](Email.md)
* [`LinkedTaxRate`](LinkedTaxRate.md)

* [`Currency`](Currency.md)
* [`BankAccount`](BankAccount.md)







---

[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)


