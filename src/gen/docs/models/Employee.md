# Apideck.Employee

### Description

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
`id` | **string** |  | [optional] 
`first_name` | **string** |  | [optional] 
`last_name` | **string** |  | [optional] 
`middle_name` | **string** |  | [optional] 
`display_name` | **string** |  | [optional] 
`preferred_name` | **string** |  | [optional] 
`initials` | **string** |  | [optional] 
`salutation` | **string** |  | [optional] 
`title` | **string** |  | [optional] 
`marital_status` | **string** |  | [optional] 
`picture_url` | **string** | The URL pointing to a picture. | [optional] 
`division` | **string** | The division the user is currently in. | [optional] 
`department` | **string** | The department the user is currently in. | [optional] 
`team` | [**EmployeeTeam**](EmployeeTeam.md) |  | [optional] 
`company_id` | **string** |  | [optional] 
`company_name` | **string** |  | [optional] 
`employment_start_date` | **string** | A Start Date is the date that the employee started working at the company | [optional] 
`employment_end_date` | **string** | A Start Date is the date that the employee ended working at the company | [optional] 
`employee_number` | **string** | An Employee Number, Employee ID or Employee Code, is a unique number that has been assigned to each individual staff member within a company. | [optional] 
`employment_status` | **string** |  | [optional] 
`employment_role` | [**EmployeeEmploymentRole**](EmployeeEmploymentRole.md) |  | [optional] 
`manager` | [**EmployeeManager**](EmployeeManager.md) |  | [optional] 
`social_security_number` | **string** |  | [optional] 
`birthday` | **Date** |  | [optional] 
`country_of_birth` | **string** | country code according to ISO 3166-1 alpha-2. | [optional] 
`description` | **string** |  | [optional] 
`gender` | [**Gender**](Gender.md) |  | [optional] 
`pronouns` | **string** |  | [optional] 
`preferred_language` | **string** | language code according to ISO 639-1. For the United States - EN | [optional] 
`languages` | **Array&lt;string&gt;** |  | [optional] 
`nationalities` | **Array&lt;string&gt;** |  | [optional] 
`photo_url` | **string** |  | [optional] 
`jobs` | [**Array&lt;EmployeeJobs&gt;**](EmployeeJobs.md) |  | [optional] 
`addresses` | [**Array&lt;Address&gt;**](Address.md) |  | [optional] 
`phone_numbers` | [**Array&lt;PhoneNumber&gt;**](PhoneNumber.md) |  | [optional] 
`emails` | [**Array&lt;Email&gt;**](Email.md) |  | [optional] 
`custom_fields` | [**Array&lt;CustomField&gt;**](CustomField.md) |  | [optional] 
`social_links` | [**Array&lt;EmployeeSocialLinks&gt;**](EmployeeSocialLinks.md) |  | [optional] 
`row_version` | **string** |  | [optional] 
`updated_by` | **string** |  | [optional] 
`created_by` | **string** |  | [optional] 
`updated_at` | **Date** |  | [optional] 
`created_at` | **Date** |  | [optional] 





<a name="EmployeeEmploymentStatus"></a>
## Enum: Employee.employment_status


* `active` (value: `'active'`)

* `inactive` (value: `'inactive'`)

* `terminated` (value: `'terminated'`)

* `other` (value: `'other'`)




## Referenced Types:













* [`EmployeeTeam`](EmployeeTeam.md)






* [`EmployeeEmploymentRole`](EmployeeEmploymentRole.md)
* [`EmployeeManager`](EmployeeManager.md)




* [`Gender`](Gender.md)





* [`EmployeeJobs`](EmployeeJobs.md)
* [`Address`](Address.md)
* [`PhoneNumber`](PhoneNumber.md)
* [`Email`](Email.md)
* [`CustomField`](CustomField.md)
* [`EmployeeSocialLinks`](EmployeeSocialLinks.md)






---

[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)


