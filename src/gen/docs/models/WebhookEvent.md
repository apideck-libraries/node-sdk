# Apideck.WebhookEvent

### Description

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
`event_id` | **string** | Unique reference to this request event | [optional] 
`unified_api` | **string** | Name of Apideck Unified API | [optional] 
`service_id` | **string** | Service provider identifier | [optional] 
`consumer_id` | **string** | Unique consumer identifier. You can freely choose a consumer ID yourself. Most of the time, this is an ID of your internal data model that represents a user or account in your system (for example account:12345). If the consumer doesn\'t exist yet, Vault will upsert a consumer based on your ID. | [optional] 
`entity_id` | **string** | The service provider\'s ID of the entity that triggered this event | [optional] 
`entity_type` | **string** | The type entity that triggered this event | [optional] 
`entity_url` | **string** | The url to retrieve entity detail. | [optional] 
`execution_attempt` | **number** | The current count this request event has been attempted | [optional] 
`occurred_at` | **string** | ISO Datetime for when the original event occurred | [optional] 





<a name="WebhookEventUnifiedApi"></a>
## Enum: WebhookEvent.unified_api


* `accounting` (value: `'accounting'`)

* `ats` (value: `'ats'`)

* `calendar` (value: `'calendar'`)

* `crm` (value: `'crm'`)

* `csp` (value: `'csp'`)

* `customer_support` (value: `'customer-support'`)

* `ecommerce` (value: `'ecommerce'`)

* `email` (value: `'email'`)

* `email_marketing` (value: `'email-marketing'`)

* `expense_management` (value: `'expense-management'`)

* `file_storage` (value: `'file-storage'`)

* `form` (value: `'form'`)

* `hris` (value: `'hris'`)

* `lead` (value: `'lead'`)

* `payroll` (value: `'payroll'`)

* `pos` (value: `'pos'`)

* `procurement` (value: `'procurement'`)

* `project_management` (value: `'project-management'`)

* `script` (value: `'script'`)

* `sms` (value: `'sms'`)

* `spreadsheet` (value: `'spreadsheet'`)

* `team_messaging` (value: `'team-messaging'`)

* `issue_tracking` (value: `'issue-tracking'`)

* `time_registration` (value: `'time-registration'`)

* `transactional_email` (value: `'transactional-email'`)

* `vault` (value: `'vault'`)

* `data_warehouse` (value: `'data-warehouse'`)




---

[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)


