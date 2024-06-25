# Apideck.Pipeline

### Description

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
`name` | **string** | The name of the Pipeline. | 
`id` | **string** | The unique identifier of the Pipeline. | [optional] 
`currency` | [**Currency**](Currency.md) |  | [optional] 
`archived` | **boolean** | Whether the Pipeline is archived or not. | [optional] 
`active` | **boolean** | Whether the Pipeline is active or not. | [optional] 
`display_order` | **number** | The order in which the Pipeline is displayed in the UI. | [optional] 
`win_probability_enabled` | **boolean** | Whether the Pipeline has win probability enabled or not. | [optional] 
`stages` | [**Array&lt;PipelineStages&gt;**](PipelineStages.md) | The Pipeline Stages. | [optional] 
`updated_at` | **Date** | The date and time when the object was last updated. | [optional] 
`created_at` | **Date** | The date and time when the object was created. | [optional] 
`pass_through` | [**PassThroughBody**](PassThroughBody.md) |  | [optional] 





## Referenced Types:


* [`Currency`](Currency.md)




* [`PipelineStages`](PipelineStages.md)


* [`PassThroughBody`](PassThroughBody.md)

---

[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)


