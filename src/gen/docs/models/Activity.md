# Apideck.Activity

### Description

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
`type` | **string** | The type of the activity | 
`id` | **string** | The unique identifier of the activity | [optional] 
`downstream_id` | **string** | The third-party API ID of original entity | [optional] 
`activity_datetime` | **string** | The date and time of the activity | [optional] 
`duration_seconds` | **number** | The duration of the activity in seconds | [optional] 
`user_id` | **string** | The user related to the activity | [optional] 
`account_id` | **string** | The account related to the activity | [optional] 
`contact_id` | **string** | The contact related to the activity | [optional] 
`company_id` | **string** | The company related to the activity | [optional] 
`opportunity_id` | **string** | The opportunity related to the activity | [optional] 
`lead_id` | **string** | The lead related to the activity | [optional] 
`owner_id` | **string** | The owner of the activity | [optional] 
`campaign_id` | **string** | The campaign related to the activity | [optional] 
`case_id` | **string** | The case related to the activity | [optional] 
`asset_id` | **string** | The asset related to the activity | [optional] 
`contract_id` | **string** | The contract related to the activity | [optional] 
`product_id` | **string** | The product related to the activity | [optional] 
`solution_id` | **string** | The solution related to the activity | [optional] 
`custom_object_id` | **string** | The custom object related to the activity | [optional] 
`title` | **string** | The title of the activity | [optional] 
`description` | **string** | A description of the activity | [optional] 
`note` | **string** | An internal note about the activity | [optional] 
`location` | **string** | The location of the activity | [optional] 
`location_address` | [**Address**](Address.md) |  | [optional] 
`all_day_event` | **boolean** | Whether the Activity is an all day event or not | [optional] 
`private` | **boolean** | Whether the Activity is private or not | [optional] 
`group_event` | **boolean** | Whether the Activity is a group event or not | [optional] 
`event_sub_type` | **string** | The sub type of the group event | [optional] 
`group_event_type` | **string** | The type of the group event | [optional] 
`child` | **boolean** | Whether the activity is a child of another activity or not | [optional] 
`archived` | **boolean** | Whether the activity is archived or not | [optional] 
`deleted` | **boolean** | Whether the activity is deleted or not | [optional] 
`show_as` | **string** |  | [optional] 
`done` | **boolean** | Whether the Activity is done or not | [optional] 
`start_datetime` | **string** | The start date and time of the activity | [optional] 
`end_datetime` | **string** | The end date and time of the activity | [optional] 
`duration_minutes` | **number** | The duration of the activity in minutes | [optional] 
`activity_date` | **string** | The date of the activity | [optional] 
`end_date` | **string** | The end date of the activity | [optional] 
`recurrent` | **boolean** | Whether the activity is recurrent or not | [optional] 
`reminder_datetime` | **string** | The date and time of the reminder | [optional] 
`reminder_set` | **boolean** | Whether the reminder is set or not | [optional] 
`video_conference_url` | **string** | The URL of the video conference | [optional] 
`video_conference_id` | **string** | The ID of the video conference | [optional] 
`custom_fields` | [**Array&lt;CustomField&gt;**](CustomField.md) | Custom fields of the activity | [optional] 
`attendees` | [**Array&lt;ActivityAttendee&gt;**](ActivityAttendee.md) |  | [optional] 
`updated_by` | **string** | The user who last updated the activity | [optional] 
`created_by` | **string** | The user who created the activity | [optional] 
`updated_at` | **string** | The date and time when the activity was last updated | [optional] 
`created_at` | **string** | The date and time when the activity was created | [optional] 





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


