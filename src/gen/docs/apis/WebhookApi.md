# Apideck.Webhook

## Class Name
**WebhookApi**

## Methods

* [List Event Logs](#eventLogsAll)
* [Create Webhook](#webhooksAdd)
* [List Webhooks](#webhooksAll)
* [Delete Webhook](#webhooksDelete)
* [Get Webhook](#webhooksOne)
* [Update Webhook](#webhooksUpdate)

<a name="eventLogsAll"></a>
# List Event Logs


Method: **eventLogsAll**

```typescript
webhookApi.eventLogsAll(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **cursor** | [**string**] | Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response. | (optional) 
 **limit** | [**number**] | Number of records to return | (optional) defaults to 20
 **filter** | **WebhookEventLogsFilter** | Filter results | (optional) 



### Response Type

[`GetWebhookEventLogsResponse`](../models/GetWebhookEventLogsResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | EventLogs | 
**400** | Bad Request | 
**401** | Unauthorized | 
**402** | Payment Required | 
**404** | The specified resource was not found | 
**422** | Unprocessable | 
4/5xx | Unexpected error | 


## Example Usage

```typescript
import { Apideck } from '@apideck/node';

const apideck = new Apideck({
  apiKey: 'REPLACE_WITH_API_KEY',
  appId: 'REPLACE_WITH_APP_ID'
});

const params = {}

try {
  const { data } = await apideck.webhook.eventLogsAll(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="webhooksAdd"></a>
# Create Webhook


Method: **webhooksAdd**

```typescript
webhookApi.webhooksAdd(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **webhook** | [CreateWebhookRequest](../models/CreateWebhookRequest.md)|  |
 **appId** | [**string**] | The ID of your Unify application | (optional) 



### Response Type

[`CreateWebhookResponse`](../models/CreateWebhookResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**201** | Webhooks | 
**400** | Bad Request | 
**401** | Unauthorized | 
**402** | Payment Required | 
**404** | The specified resource was not found | 
**422** | Unprocessable | 
4/5xx | Unexpected error | 


## Example Usage

```typescript
import { Apideck } from '@apideck/node';

const apideck = new Apideck({
  apiKey: 'REPLACE_WITH_API_KEY',
  appId: 'REPLACE_WITH_APP_ID'
});

const params = {
  webhook: {
    description: 'This is a webhook. It listens to connection events',
    unified_api: 'vault',
    status: 'enabled',
    delivery_url: 'https://example.com/my/webhook/endpoint',
    events: [
      'vault.connection.created',
      'vault.connection.updated'
    ]
  }
}

try {
  const { data } = await apideck.webhook.webhooksAdd(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="webhooksAll"></a>
# List Webhooks


Method: **webhooksAll**

```typescript
webhookApi.webhooksAll(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **cursor** | [**string**] | Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response. | (optional) 
 **limit** | [**number**] | Number of records to return | (optional) defaults to 20



### Response Type

[`GetWebhooksResponse`](../models/GetWebhooksResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Webhooks | 
**400** | Bad Request | 
**401** | Unauthorized | 
**402** | Payment Required | 
**404** | The specified resource was not found | 
**422** | Unprocessable | 
4/5xx | Unexpected error | 


## Example Usage

```typescript
import { Apideck } from '@apideck/node';

const apideck = new Apideck({
  apiKey: 'REPLACE_WITH_API_KEY',
  appId: 'REPLACE_WITH_APP_ID'
});

const params = {}

try {
  const { data } = await apideck.webhook.webhooksAll(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="webhooksDelete"></a>
# Delete Webhook


Method: **webhooksDelete**

```typescript
webhookApi.webhooksDelete(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | JWT Webhook token that represents the unifiedApi and applicationId associated to the event source. | 
 **appId** | [**string**] | The ID of your Unify application | (optional) 



### Response Type

[`DeleteWebhookResponse`](../models/DeleteWebhookResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Webhooks | 
**400** | Bad Request | 
**401** | Unauthorized | 
**402** | Payment Required | 
**404** | The specified resource was not found | 
**422** | Unprocessable | 
4/5xx | Unexpected error | 


## Example Usage

```typescript
import { Apideck } from '@apideck/node';

const apideck = new Apideck({
  apiKey: 'REPLACE_WITH_API_KEY',
  appId: 'REPLACE_WITH_APP_ID'
});

const params = {
  id: 'id_example'
}

try {
  const { data } = await apideck.webhook.webhooksDelete(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="webhooksOne"></a>
# Get Webhook


Method: **webhooksOne**

```typescript
webhookApi.webhooksOne(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | JWT Webhook token that represents the unifiedApi and applicationId associated to the event source. | 
 **appId** | [**string**] | The ID of your Unify application | (optional) 



### Response Type

[`GetWebhookResponse`](../models/GetWebhookResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Webhooks | 
**400** | Bad Request | 
**401** | Unauthorized | 
**402** | Payment Required | 
**404** | The specified resource was not found | 
**422** | Unprocessable | 
4/5xx | Unexpected error | 


## Example Usage

```typescript
import { Apideck } from '@apideck/node';

const apideck = new Apideck({
  apiKey: 'REPLACE_WITH_API_KEY',
  appId: 'REPLACE_WITH_APP_ID'
});

const params = {
  id: 'id_example'
}

try {
  const { data } = await apideck.webhook.webhooksOne(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="webhooksUpdate"></a>
# Update Webhook


Method: **webhooksUpdate**

```typescript
webhookApi.webhooksUpdate(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **webhook** | [UpdateWebhookRequest](../models/UpdateWebhookRequest.md)|  |
 **id** | [**string**] | JWT Webhook token that represents the unifiedApi and applicationId associated to the event source. | 
 **appId** | [**string**] | The ID of your Unify application | (optional) 



### Response Type

[`UpdateWebhookResponse`](../models/UpdateWebhookResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Webhooks | 
**400** | Bad Request | 
**401** | Unauthorized | 
**402** | Payment Required | 
**404** | The specified resource was not found | 
**422** | Unprocessable | 
4/5xx | Unexpected error | 


## Example Usage

```typescript
import { Apideck } from '@apideck/node';

const apideck = new Apideck({
  apiKey: 'REPLACE_WITH_API_KEY',
  appId: 'REPLACE_WITH_APP_ID'
});

const params = {
  id: 'id_example',
  webhook: {
    description: 'This is a webhook. It listens to connection events',
    status: 'enabled',
    delivery_url: 'https://example.com/my/webhook/endpoint',
    events: [
      'vault.connection.created',
      'vault.connection.updated'
    ]
  }
}

try {
  const { data } = await apideck.webhook.webhooksUpdate(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

