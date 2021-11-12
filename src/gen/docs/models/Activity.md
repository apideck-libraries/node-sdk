# Apideck.Activity

### Description

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
`type` | **string** |  | 
`id` | **string** |  | [optional] 
`activity_datetime` | **string** |  | [optional] 
`duration_seconds` | **number** |  | [optional] 
`user_id` | **string** |  | [optional] 
`account_id` | **string** |  | [optional] 
`contact_id` | **string** |  | [optional] 
`company_id` | **string** |  | [optional] 
`opportunity_id` | **string** |  | [optional] 
`lead_id` | **string** |  | [optional] 
`owner_id` | **string** |  | [optional] 
`campaign_id` | **string** |  | [optional] 
`case_id` | **string** |  | [optional] 
`asset_id` | **string** |  | [optional] 
`contract_id` | **string** |  | [optional] 
`product_id` | **string** |  | [optional] 
`solution_id` | **string** |  | [optional] 
`custom_object_id` | **string** |  | [optional] 
`title` | **string** |  | [optional] 
`description` | **string** |  | [optional] 
`note` | **string** |  | [optional] 
`location` | **string** |  | [optional] 
`location_address` | [**Address**](Address.md) |  | [optional] 
`all_day_event` | **boolean** |  | [optional] 
`private` | **boolean** |  | [optional] 
`group_event` | **boolean** |  | [optional] 
`event_sub_type` | **string** |  | [optional] 
`group_event_type` | **string** |  | [optional] 
`child` | **boolean** |  | [optional] 
`archived` | **boolean** |  | [optional] 
`deleted` | **boolean** |  | [optional] 
`show_as` | **string** |  | [optional] 
`done` | **boolean** | Whether the Activity is done or not | [optional] 
`start_datetime` | **string** |  | [optional] 
`end_datetime` | **string** |  | [optional] 
`duration_minutes` | **number** |  | [optional] 
`activity_date` | **string** |  | [optional] 
`end_date` | **string** |  | [optional] 
`recurrent` | **boolean** |  | [optional] 
`reminder_datetime` | **string** |  | [optional] 
`reminder_set` | **boolean** |  | [optional] 
`video_conference_url` | **string** |  | [optional] 
`video_conference_id` | **string** |  | [optional] 
`custom_fields` | [**Array&lt;CustomField&gt;**](CustomField.md) |  | [optional] 
`attendees` | [**Array&lt;ActivityAttendee&gt;**](ActivityAttendee.md) |  | [optional] 
`updated_by` | **string** |  | [optional] 
`created_by` | **string** |  | [optional] 
`updated_at` | **string** |  | [optional] 
`created_at` | **string** |  | [optional] 





<a name="ActivityType"></a>
## Enum: Activity.type


* `call` (value: `'call'`)

* `meeting` (value: `'meeting'`)

* `email` (value: `'email'`)

* `note` (value: `'note'`)

* `task` (value: `'task'`)

* `deadline` (value: `'deadline'`)

* `send_letter` (value: `'send-letter'`)

* `send_quote` (value: `'send-quote'`)

* `other` (value: `'other'`)




<a name="ActivityShowAs"></a>
## Enum: Activity.show_as


* `free` (value: `'free'`)

* `busy` (value: `'busy'`)




## Referenced Types:






















* [`Address`](Address.md)




















* [`CustomField`](CustomField.md)
* [`ActivityAttendee`](ActivityAttendee.md)





---

[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)


