# Apideck.Contact

### Description

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
`name` | **string** |  | 
`id` | **string** |  | [optional] 
`owner_id` | **string** |  | [optional] 
`type` | **string** |  | [optional] 
`company_id` | **string** |  | [optional] 
`company_name` | **string** |  | [optional] 
`lead_id` | **string** |  | [optional] 
`first_name` | **string** |  | [optional] 
`middle_name` | **string** |  | [optional] 
`last_name` | **string** |  | [optional] 
`prefix` | **string** |  | [optional] 
`suffix` | **string** |  | [optional] 
`title` | **string** |  | [optional] 
`department` | **string** |  | [optional] 
`language` | **string** | language code according to ISO 639-1. For the United States - EN | [optional] 
`gender` | **string** |  | [optional] 
`birthday` | **string** |  | [optional] 
`image` | **string** |  | [optional] 
`photo_url` | **string** | The URL of the photo of a person. | [optional] 
`lead_source` | **string** |  | [optional] 
`fax` | **string** |  | [optional] 
`description` | **string** |  | [optional] 
`current_balance` | **number** |  | [optional] 
`status` | **string** |  | [optional] 
`active` | **boolean** |  | [optional] 
`websites` | [**Array&lt;Website&gt;**](Website.md) |  | [optional] 
`addresses` | [**Array&lt;Address&gt;**](Address.md) |  | [optional] 
`social_links` | [**Array&lt;SocialLink&gt;**](SocialLink.md) |  | [optional] 
`phone_numbers` | [**Array&lt;PhoneNumber&gt;**](PhoneNumber.md) |  | [optional] 
`emails` | [**Array&lt;Email&gt;**](Email.md) |  | [optional] 
`email_domain` | **string** |  | [optional] 
`custom_fields` | [**Array&lt;CustomField&gt;**](CustomField.md) |  | [optional] 
`tags` | [**Tags**](Tags.md) |  | [optional] 
`first_call_at` | **Date** |  | [optional] 
`first_email_at` | **Date** |  | [optional] 
`last_activity_at` | **Date** |  | [optional] 
`updated_at` | **Date** |  | [optional] 
`created_at` | **Date** |  | [optional] 





<a name="ContactType"></a>
## Enum: Contact.type


* `customer` (value: `'customer'`)

* `supplier` (value: `'supplier'`)

* `employee` (value: `'employee'`)

* `personal` (value: `'personal'`)




<a name="ContactGender"></a>
## Enum: Contact.gender


* `male` (value: `'male'`)

* `female` (value: `'female'`)

* `unisex` (value: `'unisex'`)




## Referenced Types:

























* [`Website`](Website.md)
* [`Address`](Address.md)
* [`SocialLink`](SocialLink.md)
* [`PhoneNumber`](PhoneNumber.md)
* [`Email`](Email.md)

* [`CustomField`](CustomField.md)
* [`Tags`](Tags.md)






---

[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)


