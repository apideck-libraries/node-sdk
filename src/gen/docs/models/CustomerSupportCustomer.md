# Apideck.CustomerSupportCustomer

### Description

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
`id` | **string** | A unique identifier for an object. | [optional] 
`company_name` | **string** | The name of the company. | [optional] 
`first_name` | **string** | The first name of the person. | [optional] 
`last_name` | **string** | The last name of the person. | [optional] 
`individual` | **boolean** |  | [optional] 
`addresses` | [**Array&lt;Address&gt;**](Address.md) |  | [optional] 
`notes` | **string** |  | [optional] 
`phone_numbers` | [**Array&lt;PhoneNumber&gt;**](PhoneNumber.md) |  | [optional] 
`emails` | [**Array&lt;Email&gt;**](Email.md) |  | [optional] 
`tax_number` | **string** |  | [optional] 
`currency` | [**Currency**](Currency.md) |  | [optional] 
`bank_accounts` | [**BankAccount**](BankAccount.md) |  | [optional] 
`status` | **string** | Customer status | [optional] 
`updated_by` | **string** | The user who last updated the object. | [optional] 
`created_by` | **string** | The user who created the object. | [optional] 
`updated_at` | **Date** | The date and time when the object was last updated. | [optional] 
`created_at` | **Date** | The date and time when the object was created. | [optional] 





<a name="CustomerSupportCustomerStatus"></a>
## Enum: CustomerSupportCustomer.status


* `active` (value: `'active'`)

* `archived` (value: `'archived'`)

* `gdpr_erasure_request` (value: `'gdpr-erasure-request'`)

* `unknown` (value: `'unknown'`)




## Referenced Types:





* [`Address`](Address.md)

* [`PhoneNumber`](PhoneNumber.md)
* [`Email`](Email.md)

* [`Currency`](Currency.md)
* [`BankAccount`](BankAccount.md)






---

[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)


