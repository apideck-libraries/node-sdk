# Apideck.Employee

### Description

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
`id` | **string** |  | [optional] 
`first_name` | **string** |  | [optional] 
`last_name` | **string** |  | [optional] 
`middle_name` | **string** |  | [optional] 
`title` | **string** |  | [optional] 
`division` | **string** | The division the user is currently in. | [optional] 
`department` | **string** | The department the user is currently in. | [optional] 
`company_id` | **string** |  | [optional] 
`company_name` | **string** |  | [optional] 
`employee_number` | **string** | An Employee Number, Employee ID or Employee Code, is a unique number that has been assigned to each individual staff member within a company. | [optional] 
`employment_status` | **string** |  | [optional] 
`manager_id` | **string** |  | [optional] 
`social_security_number` | **string** |  | [optional] 
`birthday` | **Date** |  | [optional] 
`description` | **string** |  | [optional] 
`gender` | [**Gender**](Gender.md) |  | [optional] 
`language` | **string** | language code according to ISO 639-1. For the United States - EN | [optional] 
`jobs` | [**Array&lt;EmployeeJobs&gt;**](EmployeeJobs.md) |  | [optional] 
`addresses` | [**Array&lt;Address&gt;**](Address.md) |  | [optional] 
`phone_numbers` | [**Array&lt;PhoneNumber&gt;**](PhoneNumber.md) |  | [optional] 
`emails` | [**Array&lt;Email&gt;**](Email.md) |  | [optional] 
`custom_fields` | [**Array&lt;CustomField&gt;**](CustomField.md) |  | [optional] 
`updated_by` | **string** |  | [optional] 
`created_by` | **string** |  | [optional] 
`updated_at` | **Date** |  | [optional] 
`created_at` | **Date** |  | [optional] 





<a name="EmployeeEmploymentStatus"></a>
## Enum: Employee.employment_status


* `active` (value: `'active'`)

* `inactive` (value: `'inactive'`)

* `other` (value: `'other'`)




## Referenced Types:















* [`Gender`](Gender.md)

* [`EmployeeJobs`](EmployeeJobs.md)
* [`Address`](Address.md)
* [`PhoneNumber`](PhoneNumber.md)
* [`Email`](Email.md)
* [`CustomField`](CustomField.md)





---

[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)


