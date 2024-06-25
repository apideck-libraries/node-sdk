# Apideck.Lead

### Description

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
`name` | **string** | Full name of the lead. | 
`company_name` | **string** | The name of the company the lead is associated with. | 
`id` | **string** | Unique identifier for the contact. | [optional] 
`owner_id` | **string** | The owner of the lead. | [optional] 
`company_id` | **string** | The company the lead is associated with. | [optional] 
`lead_id` | **string** | The identifier of the lead. | [optional] 
`lead_source` | **string** | The source of the lead. | [optional] 
`first_name` | **string** | The first name of the lead. | [optional] 
`last_name` | **string** | The last name of the lead. | [optional] 
`description` | **string** | The description of the lead. | [optional] 
`prefix` | **string** | The prefix of the lead. | [optional] 
`title` | **string** | The job title of the lead. | [optional] 
`language` | **string** | language code according to ISO 639-1. For the United States - EN | [optional] 
`status` | **string** |  | [optional] 
`monetary_amount` | **number** | The monetary amount of the lead. | [optional] 
`currency` | [**Currency**](Currency.md) |  | [optional] 
`fax` | **string** | The fax number of the lead. | [optional] 
`websites` | [**Array&lt;Website&gt;**](Website.md) |  | [optional] 
`addresses` | [**Array&lt;Address&gt;**](Address.md) |  | [optional] 
`social_links` | [**Array&lt;SocialLink&gt;**](SocialLink.md) |  | [optional] 
`phone_numbers` | [**Array&lt;PhoneNumber&gt;**](PhoneNumber.md) |  | [optional] 
`emails` | [**Array&lt;Email&gt;**](Email.md) |  | [optional] 
`custom_fields` | [**Array&lt;CustomField&gt;**](CustomField.md) |  | [optional] 
`tags` | [**Tags**](Tags.md) |  | [optional] 
`custom_mappings` | **object** | When custom mappings are configured on the resource, the result is included here. | [optional] 
`updated_at` | **string** | Date updated in ISO 8601 format | [optional] 
`created_at` | **string** | Date created in ISO 8601 format | [optional] 
`pass_through` | [**PassThroughBody**](PassThroughBody.md) |  | [optional] 





## Referenced Types:















* [`Currency`](Currency.md)

* [`Website`](Website.md)
* [`Address`](Address.md)
* [`SocialLink`](SocialLink.md)
* [`PhoneNumber`](PhoneNumber.md)
* [`Email`](Email.md)
* [`CustomField`](CustomField.md)
* [`Tags`](Tags.md)



* [`PassThroughBody`](PassThroughBody.md)

---

[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)


