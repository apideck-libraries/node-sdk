# Apideck.Customer

### Description

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
`id` | **string** | A unique identifier for an object. | 
`downstream_id` | **string** | The third-party API ID of original entity | [optional] 
`display_id` | **string** | Display ID | [optional] 
`display_name` | **string** | Display name | [optional] 
`company_name` | **string** | The name of the company. | [optional] 
`company_id` | **string** | The company or subsidiary id the transaction belongs to | [optional] 
`title` | **string** | The job title of the person. | [optional] 
`first_name` | **string** | The first name of the person. | [optional] 
`middle_name` | **string** | Middle name of the person. | [optional] 
`last_name` | **string** | The last name of the person. | [optional] 
`suffix` | **string** |  | [optional] 
`individual` | **boolean** | Is this an individual or business customer | [optional] 
`project` | **boolean** | If true, indicates this is a Project. | [optional] 
`addresses` | [**Array&lt;Address&gt;**](Address.md) |  | [optional] 
`phone_numbers` | [**Array&lt;PhoneNumber&gt;**](PhoneNumber.md) |  | [optional] 
`emails` | [**Array&lt;Email&gt;**](Email.md) |  | [optional] 
`websites` | [**Array&lt;Website&gt;**](Website.md) |  | [optional] 
`bank_accounts` | [**Array&lt;BankAccount&gt;**](BankAccount.md) |  | [optional] 
`notes` | **string** | Some notes about this customer | [optional] 
`tax_rate` | [**LinkedTaxRate**](LinkedTaxRate.md) |  | [optional] 
`tax_number` | **string** |  | [optional] 
`currency` | [**Currency**](Currency.md) |  | [optional] 
`account` | [**LinkedLedgerAccount**](LinkedLedgerAccount.md) |  | [optional] 
`parent` | [**LinkedParentCustomer**](LinkedParentCustomer.md) |  | [optional] 
`status` | **string** | Customer status | [optional] 
`payment_method` | **string** | Payment method used for the transaction, such as cash, credit card, bank transfer, or check | [optional] 
`channel` | **string** | The channel through which the transaction is processed. | [optional] 
`custom_fields` | [**Array&lt;CustomField&gt;**](CustomField.md) |  | [optional] 
`custom_mappings` | **object** | When custom mappings are configured on the resource, the result is included here. | [optional] 
`updated_by` | **string** | The user who last updated the object. | [optional] 
`created_by` | **string** | The user who created the object. | [optional] 
`updated_at` | **Date** | The date and time when the object was last updated. | [optional] 
`created_at` | **Date** | The date and time when the object was created. | [optional] 
`row_version` | **string** | A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object. | [optional] 
`pass_through` | [**PassThroughBody**](PassThroughBody.md) |  | [optional] 





<a name="CustomerStatus"></a>
## Enum: Customer.status


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
* [`BankAccount`](BankAccount.md)

* [`LinkedTaxRate`](LinkedTaxRate.md)

* [`Currency`](Currency.md)
* [`LinkedLedgerAccount`](LinkedLedgerAccount.md)
* [`LinkedParentCustomer`](LinkedParentCustomer.md)



* [`CustomField`](CustomField.md)






* [`PassThroughBody`](PassThroughBody.md)

---

[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)


