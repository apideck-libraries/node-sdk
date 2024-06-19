# Apideck.Message

### Description

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
`from` | **string** | The phone number that initiated the message. | 
`to` | **string** | The phone number that received the message. | 
`body` | **string** | The message text. | 
`id` | **string** | A unique identifier for an object. | [optional] 
`subject` | **string** |  | [optional] 
`type` | **string** | Set to sms for SMS messages and mms for MMS messages. | [optional] 
`number_of_units` | **number** | The number of units that make up the complete message. Messages can be split up due to the constraints of the message size. | [optional] 
`number_of_media_files` | **number** | The number of media files associated with the message. | [optional] 
`direction` | **string** | The direction of the message. | [optional] 
`status` | **string** | Status of the delivery of the message. | [optional] 
`scheduled_at` | **Date** | The scheduled date and time of the message. | [optional] 
`sent_at` | **Date** | The date and time that the message was sent | [optional] 
`webhook_url` | **string** | Define a webhook to receive delivery notifications. | [optional] 
`reference` | **string** | A client reference. | [optional] 
`price` | [**Price**](Price.md) |  | [optional] 
`error` | **Error** |  | [optional] 
`messaging_service_id` | **string** | The ID of the Messaging Service used with the message. In case of Plivo this links to the Powerpack ID. | [optional] 
`custom_mappings` | **object** | When custom mappings are configured on the resource, the result is included here. | [optional] 
`updated_by` | **string** | The user who last updated the object. | [optional] 
`created_by` | **string** | The user who created the object. | [optional] 
`updated_at` | **Date** | The date and time when the object was last updated. | [optional] 
`created_at` | **Date** | The date and time when the object was created. | [optional] 
`pass_through` | [**PassThroughBody**](PassThroughBody.md) |  | [optional] 





<a name="MessageType"></a>
## Enum: Message.type


* `sms` (value: `'sms'`)

* `mms` (value: `'mms'`)




<a name="MessageDirection"></a>
## Enum: Message.direction


* `inbound` (value: `'inbound'`)

* `outbound_api` (value: `'outbound-api'`)

* `outbound_call` (value: `'outbound-call'`)

* `outbound_reply` (value: `'outbound-reply'`)

* `unknown` (value: `'unknown'`)




<a name="MessageStatus"></a>
## Enum: Message.status


* `accepted` (value: `'accepted'`)

* `scheduled` (value: `'scheduled'`)

* `canceled` (value: `'canceled'`)

* `queued` (value: `'queued'`)

* `sending` (value: `'sending'`)

* `sent` (value: `'sent'`)

* `failed` (value: `'failed'`)

* `delivered` (value: `'delivered'`)

* `undelivered` (value: `'undelivered'`)

* `receiving` (value: `'receiving'`)

* `received` (value: `'received'`)

* `read` (value: `'read'`)




## Referenced Types:














* [`Price`](Price.md)







* [`PassThroughBody`](PassThroughBody.md)

---

[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)


