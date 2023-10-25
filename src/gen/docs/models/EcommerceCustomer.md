# Apideck.EcommerceCustomer

### Description

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
`id` | **string** | A unique identifier for an object. | 
`name` | **string** | Full name of the customer | [optional] 
`first_name` | **string** | First name of the customer | [optional] 
`last_name` | **string** | Last name of the customer | [optional] 
`company_name` | **string** | Company name of the customer | [optional] 
`status` | **string** | The current status of the customer | [optional] 
`currency` | [**Currency**](Currency.md) |  | [optional] 
`emails` | [**Array&lt;Email&gt;**](Email.md) | An array of email addresses for the customer. | [optional] 
`phone_numbers` | [**Array&lt;PhoneNumber&gt;**](PhoneNumber.md) | An array of phone numbers for the customer. | [optional] 
`addresses` | [**Array&lt;EcommerceCustomerAddresses&gt;**](EcommerceCustomerAddresses.md) | An array of addresses for the customer. | [optional] 
`orders` | [**Array&lt;LinkedEcommerceOrder&gt;**](LinkedEcommerceOrder.md) |  | [optional] 
`custom_mappings` | **object** | When custom mappings are configured on the resource, the result is included here. | [optional] 
`created_at` | **Date** | The date and time when the object was created. | [optional] 
`updated_at` | **Date** | The date and time when the object was last updated. | [optional] 





<a name="EcommerceCustomerStatus"></a>
## Enum: EcommerceCustomer.status


* `active` (value: `'active'`)

* `archived` (value: `'archived'`)




## Referenced Types:






* [`Currency`](Currency.md)
* [`Email`](Email.md)
* [`PhoneNumber`](PhoneNumber.md)
* [`EcommerceCustomerAddresses`](EcommerceCustomerAddresses.md)
* [`LinkedEcommerceOrder`](LinkedEcommerceOrder.md)




---

[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)


