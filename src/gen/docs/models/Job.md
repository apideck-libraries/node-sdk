# Apideck.Job

### Description

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
`id` | **string** |  | [optional] 
`slug` | **string** |  | [optional] 
`title` | **string** |  | [optional] 
`sequence` | **number** | Sequence in relation to other jobs. | [optional] 
`visibility` | **string** | The visibility of the job | [optional] 
`status` | [**JobStatus**](JobStatus.md) |  | [optional] 
`code` | **string** | The code of the job. | [optional] 
`language` | **string** | language code according to ISO 639-1. For the United States - EN | [optional] 
`employment_terms` | **string** |  | [optional] 
`experience` | **string** | Level of experience required for the job role. | [optional] 
`remote` | **boolean** | Specifies whether the posting is for a remote job. | [optional] 
`requisition_id` | **string** | A job\'s Requisition ID (Req ID) allows your organization to identify and track a job based on alphanumeric naming conventions unique to your company\'s internal processes. | [optional] 
`department` | [**Department**](Department.md) |  | [optional] 
`branch` | [**Branch**](Branch.md) |  | [optional] 
`recruiters` | **Array&lt;string&gt;** | The recruiter is generally someone who is tasked to help the hiring manager find and screen qualified applicant | [optional] 
`hiring_managers` | **Array&lt;object&gt;** |  | [optional] 
`followers` | **Array&lt;string&gt;** |  | [optional] 
`description` | **string** |  | [optional] 
`description_html` | **string** | The job description in HTML format | [optional] 
`blocks` | **Array&lt;object&gt;** |  | [optional] 
`closing` | **string** |  | [optional] 
`closing_html` | **string** | The closing section of the job description in HTML format | [optional] 
`closing_date` | **Date** |  | [optional] 
`salary` | [**JobSalary**](JobSalary.md) |  | [optional] 
`url` | **string** | URL of the job description | [optional] 
`job_portal_url` | **string** | URL of the job portal | [optional] 
`confidential` | **boolean** |  | [optional] 
`available_to_employees` | **boolean** | Specifies whether an employee of the organization can apply for the job. | [optional] 
`tags` | [**Tags**](Tags.md) |  | [optional] 
`addresses` | [**Array&lt;Address&gt;**](Address.md) |  | [optional] 
`record_url` | **string** |  | [optional] 
`deleted` | **boolean** |  | [optional] 
`owner_id` | **string** |  | [optional] 
`published_at` | **Date** |  | [optional] 
`updated_by` | **string** |  | [optional] 
`created_by` | **string** |  | [optional] 
`updated_at` | **Date** |  | [optional] 
`created_at` | **Date** |  | [optional] 





<a name="JobVisibility"></a>
## Enum: Job.visibility


* `public` (value: `'public'`)

* `internal` (value: `'internal'`)




<a name="JobEmploymentTerms"></a>
## Enum: Job.employment_terms


* `full_time` (value: `'full-time'`)

* `part_time` (value: `'part-time'`)

* `intership` (value: `'intership'`)

* `contractor` (value: `'contractor'`)

* `employee` (value: `'employee'`)

* `freelance` (value: `'freelance'`)

* `temp` (value: `'temp'`)

* `seasonal` (value: `'seasonal'`)

* `volunteer` (value: `'volunteer'`)

* `other` (value: `'other'`)




## Referenced Types:





* [`JobStatus`](JobStatus.md)






* [`Department`](Department.md)
* [`Branch`](Branch.md)









* [`JobSalary`](JobSalary.md)




* [`Tags`](Tags.md)
* [`Address`](Address.md)









---

[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)


