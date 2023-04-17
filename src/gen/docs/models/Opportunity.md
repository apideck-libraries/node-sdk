# Apideck.Opportunity

### Description

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
`title` | **string** | The title or name of the opportunity. | 
`primary_contact_id` | **string** | The unique identifier of the primary contact associated with the opportunity. | 
`id` | **string** | A unique identifier for the opportunity. | [optional] 
`description` | **string** | A description of the opportunity. | [optional] 
`type` | **string** | The type of the opportunity | [optional] 
`monetary_amount` | **number** | The monetary value associated with the opportunity | [optional] 
`currency` | [**Currency**](Currency.md) |  | [optional] 
`win_probability` | **number** | The probability of winning the opportunity, expressed as a percentage. | [optional] 
`expected_revenue` | **number** | The expected revenue from the opportunity | [optional] 
`close_date` | **Date** | The actual closing date for the opportunity. If close_date is null, the opportunity is not closed yet. | [optional] 
`loss_reason_id` | **string** | The unique identifier of the reason why the opportunity was lost. | [optional] 
`loss_reason` | **string** | The reason why the opportunity was lost. | [optional] 
`won_reason_id` | **string** | The unique identifier of the reason why the opportunity was won. | [optional] 
`won_reason` | **string** | The reason why the opportunity was won. | [optional] 
`pipeline_id` | **string** | The unique identifier of the pipeline associated with the opportunity | [optional] 
`pipeline_stage_id` | **string** | The unique identifier of the stage in the pipeline associated with the opportunity. | [optional] 
`source_id` | **string** | The unique identifier of the source of the opportunity. | [optional] 
`lead_id` | **string** | The unique identifier of the lead associated with the opportunity. | [optional] 
`lead_source` | **string** | The source of the lead associated with the opportunity. | [optional] 
`contact_id` | **string** | The unique identifier of the contact associated with the opportunity. | [optional] 
`contact_ids` | **Array&lt;string&gt;** | An array of unique identifiers of all contacts associated with the opportunity. | [optional] 
`company_id` | **string** | The unique identifier of the company associated with the opportunity. | [optional] 
`company_name` | **string** | The name of the company associated with the opportunity. | [optional] 
`owner_id` | **string** | The unique identifier of the user who owns the opportunity. | [optional] 
`priority` | **string** | The priority level of the opportunity. | [optional] 
`status` | **string** | The current status of the opportunity. | [optional] 
`status_id` | **string** | The unique identifier of the current status of the opportunity. | [optional] 
`tags` | [**Tags**](Tags.md) |  | [optional] 
`interaction_count` | **number** | The number of interactions with the opportunity. | [optional] 
`custom_fields` | [**Array&lt;CustomField&gt;**](CustomField.md) |  | [optional] 
`stage_last_changed_at` | **Date** | The date and time when the stage of the opportunity was last changed. | [optional] 
`last_activity_at` | **string** | The date and time of the last activity associated with the opportunity. | [optional] 
`deleted` | **boolean** | Indicates whether the opportunity has been deleted. | [optional] 
`date_stage_changed` | **Date** | The date and time when the stage of the opportunity was last changed. | [optional] 
`date_last_contacted` | **Date** | The date and time when the opportunity was last contacted. | [optional] 
`date_lead_created` | **Date** | The date and time when the lead associated with the opportunity was created. | [optional] 
`updated_by` | **string** | The unique identifier of the user who last updated the opportunity. | [optional] 
`created_by` | **string** | The unique identifier of the user who created the opportunity. | [optional] 
`updated_at` | **Date** | The date and time when the opportunity was last updated. | [optional] 
`created_at` | **Date** | The date and time when the opportunity was created. | [optional] 





## Referenced Types:






* [`Currency`](Currency.md)




















* [`Tags`](Tags.md)

* [`CustomField`](CustomField.md)











---

[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)


