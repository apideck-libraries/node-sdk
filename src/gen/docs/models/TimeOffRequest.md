# Apideck.TimeOffRequest

### Description

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
`id` | **string** |  | [optional] 
`employee_id` | **string** | ID of the employee | [optional] 
`policy_id` | **string** | ID of the policy | [optional] 
`status` | **string** | The status of the time off request. | [optional] 
`description` | **string** | Description of the time off request. | [optional] 
`start_date` | **string** | The start date of the time off request. | [optional] 
`end_date` | **string** | The end date of the time off request. | [optional] 
`request_date` | **string** | The date the request was made. | [optional] 
`request_type` | **string** | The type of request | [optional] 
`approval_date` | **string** | The date the request was approved | [optional] 
`units` | **string** | The unit of time off requested. Possible values include: &#x60;hours&#x60;, &#x60;days&#x60;, or &#x60;other&#x60;. | [optional] 
`amount` | **number** | The amount of time off requested. | [optional] 
`notes` | [**TimeOffRequestNotes**](TimeOffRequestNotes.md) |  | [optional] 
`updated_by` | **string** |  | [optional] 
`created_by` | **string** |  | [optional] 
`updated_at` | **Date** |  | [optional] 
`created_at` | **Date** |  | [optional] 





<a name="TimeOffRequestStatus"></a>
## Enum: TimeOffRequest.status


* `requested` (value: `'requested'`)

* `approved` (value: `'approved'`)

* `declined` (value: `'declined'`)

* `cancelled` (value: `'cancelled'`)

* `deleted` (value: `'deleted'`)

* `other` (value: `'other'`)




<a name="TimeOffRequestRequestType"></a>
## Enum: TimeOffRequest.request_type


* `vacation` (value: `'vacation'`)

* `sick` (value: `'sick'`)

* `personal` (value: `'personal'`)

* `jury_duty` (value: `'jury_duty'`)

* `volunteer` (value: `'volunteer'`)

* `bereavement` (value: `'bereavement'`)

* `other` (value: `'other'`)




<a name="TimeOffRequestUnits"></a>
## Enum: TimeOffRequest.units


* `days` (value: `'days'`)

* `hours` (value: `'hours'`)

* `other` (value: `'other'`)




## Referenced Types:












* [`TimeOffRequestNotes`](TimeOffRequestNotes.md)





---

[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)


