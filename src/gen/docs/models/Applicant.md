# Apideck.Applicant

### Description

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
`id` | **string** | A unique identifier for an object. | [optional] 
`name` | **string** | The name of an applicant. | [optional] 
`first_name` | **string** | The first name of the person. | [optional] 
`last_name` | **string** | The last name of the person. | [optional] 
`middle_name` | **string** | Middle name of the person. | [optional] 
`initials` | **string** | The initials of the person, usually derived from their first, middle, and last names. | [optional] 
`birthday` | **Date** | The date of birth of the person. | [optional] 
`cover_letter` | **string** |  | [optional] 
`job_url` | **string** |  | [optional] 
`photo_url` | **string** | The URL of the photo of a person. | [optional] 
`headline` | **string** | Typically a list of previous companies where the contact has worked or schools that the contact has attended | [optional] 
`title` | **string** | The job title of the person. | [optional] 
`emails` | [**Array&lt;Email&gt;**](Email.md) |  | [optional] 
`custom_fields` | [**Array&lt;CustomField&gt;**](CustomField.md) |  | [optional] 
`phone_numbers` | [**Array&lt;PhoneNumber&gt;**](PhoneNumber.md) |  | [optional] 
`addresses` | [**Array&lt;Address&gt;**](Address.md) |  | [optional] 
`websites` | [**Array&lt;ApplicantWebsites&gt;**](ApplicantWebsites.md) |  | [optional] 
`social_links` | [**Array&lt;ApplicantSocialLinks&gt;**](ApplicantSocialLinks.md) |  | [optional] 
`stage_id` | **string** |  | [optional] 
`recruiter_id` | **string** |  | [optional] 
`coordinator_id` | **string** |  | [optional] 
`application_ids` | **Array&lt;string&gt;** |  | [optional] 
`applications` | **Array&lt;string&gt;** |  | [optional] 
`followers` | **Array&lt;string&gt;** |  | [optional] 
`sources` | **Array&lt;string&gt;** |  | [optional] 
`source_id` | **string** |  | [optional] 
`confidential` | **boolean** |  | [optional] 
`anonymized` | **boolean** |  | [optional] 
`tags` | [**Tags**](Tags.md) |  | [optional] 
`archived` | **boolean** |  | [optional] 
`last_interaction_at` | **Date** |  | [optional] 
`owner_id` | **string** |  | [optional] 
`sourced_by` | **string** |  | [optional] 
`cv_url` | **string** |  | [optional] 
`record_url` | **string** |  | [optional] 
`rejected_at` | **Date** |  | [optional] 
`custom_mappings` | **object** | When custom mappings are configured on the resource, the result is included here. | [optional] 
`deleted` | **boolean** | Flag to indicate if the object is deleted. | [optional] 
`deleted_by` | **string** | The user who deleted the object. | [optional] 
`deleted_at` | **Date** | The time at which the object was deleted. | [optional] 
`updated_by` | **string** | The user who last updated the object. | [optional] 
`created_by` | **string** | The user who created the object. | [optional] 
`updated_at` | **Date** | The date and time when the object was last updated. | [optional] 
`created_at` | **Date** | The date and time when the object was created. | [optional] 
`pass_through` | [**PassThroughBody**](PassThroughBody.md) |  | [optional] 





## Referenced Types:












* [`Email`](Email.md)
* [`CustomField`](CustomField.md)
* [`PhoneNumber`](PhoneNumber.md)
* [`Address`](Address.md)
* [`ApplicantWebsites`](ApplicantWebsites.md)
* [`ApplicantSocialLinks`](ApplicantSocialLinks.md)










* [`Tags`](Tags.md)















* [`PassThroughBody`](PassThroughBody.md)

---

[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)


