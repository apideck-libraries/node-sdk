# Apideck.Job

### Description

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
`id` | **string** |  | [optional] 
`title` | **string** |  | [optional] 
`visibility` | **Array&lt;string&gt;** |  | [optional] 
`status` | [**JobStatus**](JobStatus.md) |  | [optional] 
`code` | **string** | The code of the job. | [optional] 
`requisition_id` | **string** | A job\'s Requisition ID (Req ID) allows your organization to identify and track a job based on alphanumeric naming conventions unique to your company\'s internal processes. | [optional] 
`hiring_managers` | **Array&lt;object&gt;** |  | [optional] 
`description` | **string** |  | [optional] 
`description_html` | **string** | The job description in HTML format | [optional] 
`blocks` | **Array&lt;object&gt;** |  | [optional] 
`closing` | **string** |  | [optional] 
`closing_html` | **string** | The closing section of the job description in HTML format | [optional] 
`url` | **string** | URL of the job description | [optional] 
`job_portal_url` | **string** | URL of the job portal | [optional] 
`confidential` | **boolean** |  | [optional] 
`tags` | [**Tags**](Tags.md) |  | [optional] 
`owner_id` | **string** |  | [optional] 
`updated_by` | **string** |  | [optional] 
`created_by` | **string** |  | [optional] 
`updated_at` | **Date** |  | [optional] 
`created_at` | **Date** |  | [optional] 





<a name="Array<JobVisibility>"></a>
## Enum: Job.visibility


* `public` (value: `'public'`)

* `internal` (value: `'internal'`)




## Referenced Types:



* [`JobStatus`](JobStatus.md)











* [`Tags`](Tags.md)






---

[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)


