# Apideck.Vault

## Class Name
**VaultApi**

## Methods

* [List Connection Custom Mappings](#connectionCustomMappingsAll)
* [Get Resource Settings](#connectionSettingsAll)
* [Update Settings](#connectionSettingsUpdate)
* [Get All Connections](#connectionsAll)
* [Deletes A Connection](#connectionsDelete)
* [Import Connection](#connectionsImport)
* [Get Connection](#connectionsOne)
* [Authorize Access Token](#connectionsToken)
* [Update Connection](#connectionsUpdate)
* [Consumer Request Counts](#consumerRequestCountsAll)
* [Create Consumer](#consumersAdd)
* [Get All Consumers](#consumersAll)
* [Delete Consumer](#consumersDelete)
* [Get Consumer](#consumersOne)
* [Update Consumer](#consumersUpdate)
* [Create Callback State](#createCallbackState)
* [Get Resource Custom Fields](#customFieldsAll)
* [List Custom Mappings](#customMappingsAll)
* [Get All Consumer Request Logs](#logsAll)
* [Create Session](#sessionsCreate)
* [Validate Connection State](#validateConnectionState)

<a name="connectionCustomMappingsAll"></a>
# List Connection Custom Mappings


Method: **connectionCustomMappingsAll**

```typescript
vaultApi.connectionCustomMappingsAll(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **unifiedApi** | [**string**] | Unified API | 
 **serviceId** | [**string**] | Service ID of the resource to return | 
 **resource** | [**string**] | Name of the resource (plural) | 
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **resourceId** | [**string**] | This is the id of the resource you want to fetch when listing custom fields. For example, if you want to fetch custom fields for a specific contact, you would use the contact id. | (optional) 



### Response Type

[`GetCustomMappingsResponse`](../models/GetCustomMappingsResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Custom mapping | 
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
  appId: 'REPLACE_WITH_APP_ID',
  consumerId: 'REPLACE_WITH_CONSUMER_ID'
});

const params = {
  unifiedApi: 'crm',
  serviceId: 'pipedrive',
  resource: 'leads'
}

try {
  const { data } = await apideck.vault.connectionCustomMappingsAll(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="connectionSettingsAll"></a>
# Get Resource Settings


Method: **connectionSettingsAll**

```typescript
vaultApi.connectionSettingsAll(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **unifiedApi** | [**string**] | Unified API | 
 **serviceId** | [**string**] | Service ID of the resource to return | 
 **resource** | [**string**] | Name of the resource (plural) | 
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 



### Response Type

[`GetConnectionResponse`](../models/GetConnectionResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Connection | 
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
  appId: 'REPLACE_WITH_APP_ID',
  consumerId: 'REPLACE_WITH_CONSUMER_ID'
});

const params = {
  unifiedApi: 'crm',
  serviceId: 'pipedrive',
  resource: 'leads'
}

try {
  const { data } = await apideck.vault.connectionSettingsAll(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="connectionSettingsUpdate"></a>
# Update Settings


Method: **connectionSettingsUpdate**

```typescript
vaultApi.connectionSettingsUpdate(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **connection** | [Connection](../models/Connection.md)| Fields that need to be updated on the resource |
 **serviceId** | [**string**] | Service ID of the resource to return | 
 **unifiedApi** | [**string**] | Unified API | 
 **resource** | [**string**] | Name of the resource (plural) | 
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 



### Response Type

[`UpdateConnectionResponse`](../models/UpdateConnectionResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Connection updated | 
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
  appId: 'REPLACE_WITH_APP_ID',
  consumerId: 'REPLACE_WITH_CONSUMER_ID'
});

const params = {
  serviceId: 'pipedrive',
  unifiedApi: 'crm',
  resource: 'leads',
  connection: {
    enabled: true,
    settings: {
      instance_url: 'https://eu28.salesforce.com',
      api_key: '12345xxxxxx'
    },
    metadata: {
      account: {
        name: 'My Company',
        id: 'c01458a5-7276-41ce-bc19-639906b0450a'
      },
      plan: 'enterprise'
    },
    configuration: [
      {
        resource: 'leads',
        defaults: [
          {
            id: 'ProductInterest',
            options: [Array],
            value: 'GC5000 series'
          }
        ]
      }
    ],
    custom_mappings: [
      {
        value: '$.root.training.first_aid'
      }
    ]
  }
}

try {
  const { data } = await apideck.vault.connectionSettingsUpdate(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="connectionsAll"></a>
# Get All Connections


Method: **connectionsAll**

```typescript
vaultApi.connectionsAll(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **api** | [**string**] | Scope results to Unified API | (optional) 
 **configured** | [**boolean**] | Scopes results to connections that have been configured or not | (optional) 



### Response Type

[`GetConnectionsResponse`](../models/GetConnectionsResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Connections | 
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
  appId: 'REPLACE_WITH_APP_ID',
  consumerId: 'REPLACE_WITH_CONSUMER_ID'
});

const params = {}

try {
  const { data } = await apideck.vault.connectionsAll(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="connectionsDelete"></a>
# Deletes A Connection


Method: **connectionsDelete**

```typescript
vaultApi.connectionsDelete(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceId** | [**string**] | Service ID of the resource to return | 
 **unifiedApi** | [**string**] | Unified API | 
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 



### Response Type

void (empty response body)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**204** | Resource deleted | 
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
  appId: 'REPLACE_WITH_APP_ID',
  consumerId: 'REPLACE_WITH_CONSUMER_ID'
});

const params = {
  serviceId: 'pipedrive',
  unifiedApi: 'crm'
}

try {
  const { data } = await apideck.vault.connectionsDelete(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="connectionsImport"></a>
# Import Connection


Method: **connectionsImport**

```typescript
vaultApi.connectionsImport(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **connection** | [ConnectionImportData](../models/ConnectionImportData.md)| Fields that need to be persisted on the resource |
 **serviceId** | [**string**] | Service ID of the resource to return | 
 **unifiedApi** | [**string**] | Unified API | 
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 



### Response Type

[`CreateConnectionResponse`](../models/CreateConnectionResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Connection created | 
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
  appId: 'REPLACE_WITH_APP_ID',
  consumerId: 'REPLACE_WITH_CONSUMER_ID'
});

const params = {
  serviceId: 'pipedrive',
  unifiedApi: 'crm',
  connection: {
    credentials: {
      access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
      refresh_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.cThIIoDvwdueQB468K5xDc5633seEFoqwxjF_xSJyQQ'
    },
    settings: {
      instance_url: 'https://eu28.salesforce.com'
    },
    metadata: {
      account: {
        name: 'My Company',
        id: 'c01458a5-7276-41ce-bc19-639906b0450a'
      },
      plan: 'enterprise'
    }
  }
}

try {
  const { data } = await apideck.vault.connectionsImport(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="connectionsOne"></a>
# Get Connection


Method: **connectionsOne**

```typescript
vaultApi.connectionsOne(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceId** | [**string**] | Service ID of the resource to return | 
 **unifiedApi** | [**string**] | Unified API | 
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 



### Response Type

[`GetConnectionResponse`](../models/GetConnectionResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Connection | 
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
  appId: 'REPLACE_WITH_APP_ID',
  consumerId: 'REPLACE_WITH_CONSUMER_ID'
});

const params = {
  serviceId: 'pipedrive',
  unifiedApi: 'crm'
}

try {
  const { data } = await apideck.vault.connectionsOne(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="connectionsToken"></a>
# Authorize Access Token


Method: **connectionsToken**

```typescript
vaultApi.connectionsToken(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **object**|  |
 **serviceId** | [**string**] | Service ID of the resource to return | 
 **unifiedApi** | [**string**] | Unified API | 
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 



### Response Type

[`GetConnectionResponse`](../models/GetConnectionResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Connection | 
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
  appId: 'REPLACE_WITH_APP_ID',
  consumerId: 'REPLACE_WITH_CONSUMER_ID'
});

const params = {
  serviceId: 'pipedrive',
  unifiedApi: 'crm',
  connectionsToken: {}
}

try {
  const { data } = await apideck.vault.connectionsToken(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="connectionsUpdate"></a>
# Update Connection


Method: **connectionsUpdate**

```typescript
vaultApi.connectionsUpdate(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **connection** | [Connection](../models/Connection.md)| Fields that need to be updated on the resource |
 **serviceId** | [**string**] | Service ID of the resource to return | 
 **unifiedApi** | [**string**] | Unified API | 
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 



### Response Type

[`UpdateConnectionResponse`](../models/UpdateConnectionResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Connection updated | 
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
  appId: 'REPLACE_WITH_APP_ID',
  consumerId: 'REPLACE_WITH_CONSUMER_ID'
});

const params = {
  serviceId: 'pipedrive',
  unifiedApi: 'crm',
  connection: {
    enabled: true,
    settings: {
      instance_url: 'https://eu28.salesforce.com',
      api_key: '12345xxxxxx'
    },
    metadata: {
      account: {
        name: 'My Company',
        id: 'c01458a5-7276-41ce-bc19-639906b0450a'
      },
      plan: 'enterprise'
    },
    configuration: [
      {
        resource: 'leads',
        defaults: [
          {
            id: 'ProductInterest',
            options: [Array],
            value: 'GC5000 series'
          }
        ]
      }
    ],
    custom_mappings: [
      {
        value: '$.root.training.first_aid'
      }
    ]
  }
}

try {
  const { data } = await apideck.vault.connectionsUpdate(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="consumerRequestCountsAll"></a>
# Consumer Request Counts


Method: **consumerRequestCountsAll**

```typescript
vaultApi.consumerRequestCountsAll(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **consumerId** | [**string**] | ID of the consumer to return | 
 **startDatetime** | [**string**] | Scopes results to requests that happened after datetime | 
 **endDatetime** | [**string**] | Scopes results to requests that happened before datetime | 
 **appId** | [**string**] | The ID of your Unify application | (optional) 



### Response Type

[`ConsumerRequestCountsInDateRangeResponse`](../models/ConsumerRequestCountsInDateRangeResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Consumers Request Counts within Date Range | 
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
  consumerId: 'test_user_id',
  startDatetime: '2021-05-01T12:00:00.000Z',
  endDatetime: '2021-05-30T12:00:00.000Z'
}

try {
  const { data } = await apideck.vault.consumerRequestCountsAll(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="consumersAdd"></a>
# Create Consumer


Method: **consumersAdd**

```typescript
vaultApi.consumersAdd(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **consumer** | [Consumer](../models/Consumer.md)|  |
 **appId** | [**string**] | The ID of your Unify application | (optional) 



### Response Type

[`CreateConsumerResponse`](../models/CreateConsumerResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Consumer created | 
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
  consumer: {
    consumer_id: 'test_consumer_id',
    metadata: {
      account_name: 'SpaceX',
      user_name: 'Elon Musk',
      email: 'elon@musk.com',
      image: 'https://www.spacex.com/static/images/share.jpg'
    }
  }
}

try {
  const { data } = await apideck.vault.consumersAdd(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="consumersAll"></a>
# Get All Consumers


Method: **consumersAll**

```typescript
vaultApi.consumersAll(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **cursor** | [**string**] | Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response. | (optional) 
 **limit** | [**number**] | Number of results to return. Minimum 1, Maximum 200, Default 20 | (optional) defaults to 20



### Response Type

[`GetConsumersResponse`](../models/GetConsumersResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Consumers | 
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
  const { data } = await apideck.vault.consumersAll(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="consumersDelete"></a>
# Delete Consumer


Method: **consumersDelete**

```typescript
vaultApi.consumersDelete(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **consumerId** | [**string**] | ID of the consumer to return | 
 **appId** | [**string**] | The ID of your Unify application | (optional) 



### Response Type

[`DeleteConsumerResponse`](../models/DeleteConsumerResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Consumer deleted | 
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
  consumerId: 'test_user_id'
}

try {
  const { data } = await apideck.vault.consumersDelete(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="consumersOne"></a>
# Get Consumer


Method: **consumersOne**

```typescript
vaultApi.consumersOne(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **consumerId** | [**string**] | ID of the consumer to return | 
 **appId** | [**string**] | The ID of your Unify application | (optional) 



### Response Type

[`GetConsumerResponse`](../models/GetConsumerResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Consumer | 
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
  consumerId: 'test_user_id'
}

try {
  const { data } = await apideck.vault.consumersOne(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="consumersUpdate"></a>
# Update Consumer


Method: **consumersUpdate**

```typescript
vaultApi.consumersUpdate(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **consumer** | [UpdateConsumerRequest](../models/UpdateConsumerRequest.md)|  |
 **consumerId** | [**string**] | ID of the consumer to return | 
 **appId** | [**string**] | The ID of your Unify application | (optional) 



### Response Type

[`UpdateConsumerResponse`](../models/UpdateConsumerResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Consumer updated | 
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
  consumerId: 'test_user_id',
  consumer: {
    metadata: {
      account_name: 'SpaceX',
      user_name: 'Elon Musk',
      email: 'elon@musk.com',
      image: 'https://www.spacex.com/static/images/share.jpg'
    }
  }
}

try {
  const { data } = await apideck.vault.consumersUpdate(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="createCallbackState"></a>
# Create Callback State


Method: **createCallbackState**

```typescript
vaultApi.createCallbackState(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createCallbackStateData** | [CreateCallbackStateData](../models/CreateCallbackStateData.md)| Callback state data |
 **serviceId** | [**string**] | Service ID of the resource to return | 
 **unifiedApi** | [**string**] | Unified API | 
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 



### Response Type

[`CreateCallbackStateResponse`](../models/CreateCallbackStateResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Callback state created | 
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
  appId: 'REPLACE_WITH_APP_ID',
  consumerId: 'REPLACE_WITH_CONSUMER_ID'
});

const params = {
  serviceId: 'pipedrive',
  unifiedApi: 'crm',
  createCallbackState: {
    redirect_uri: 'https://example.com/callback'
  }
}

try {
  const { data } = await apideck.vault.createCallbackState(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="customFieldsAll"></a>
# Get Resource Custom Fields


Method: **customFieldsAll**

```typescript
vaultApi.customFieldsAll(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **unifiedApi** | [**string**] | Unified API | 
 **serviceId** | [**string**] | Service ID of the resource to return | 
 **resource** | [**string**] | Name of the resource (plural) | 
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **resourceId** | [**string**] | This is the id of the resource you want to fetch when listing custom fields. For example, if you want to fetch custom fields for a specific contact, you would use the contact id. | (optional) 



### Response Type

[`GetCustomFieldsResponse`](../models/GetCustomFieldsResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Custom mapping | 
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
  appId: 'REPLACE_WITH_APP_ID',
  consumerId: 'REPLACE_WITH_CONSUMER_ID'
});

const params = {
  unifiedApi: 'crm',
  serviceId: 'pipedrive',
  resource: 'leads'
}

try {
  const { data } = await apideck.vault.customFieldsAll(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="customMappingsAll"></a>
# List Custom Mappings


Method: **customMappingsAll**

```typescript
vaultApi.customMappingsAll(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **unifiedApi** | [**string**] | Unified API | 
 **serviceId** | [**string**] | Service ID of the resource to return | 
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 



### Response Type

[`GetCustomMappingsResponse`](../models/GetCustomMappingsResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Custom mapping | 
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
  appId: 'REPLACE_WITH_APP_ID',
  consumerId: 'REPLACE_WITH_CONSUMER_ID'
});

const params = {
  unifiedApi: 'crm',
  serviceId: 'pipedrive'
}

try {
  const { data } = await apideck.vault.customMappingsAll(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="logsAll"></a>
# Get All Consumer Request Logs


Method: **logsAll**

```typescript
vaultApi.logsAll(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **filter** | **LogsFilter** | Filter results | (optional) 
 **cursor** | [**string**] | Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response. | (optional) 
 **limit** | [**number**] | Number of results to return. Minimum 1, Maximum 200, Default 20 | (optional) defaults to 20



### Response Type

[`GetLogsResponse`](../models/GetLogsResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Logs | 
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
  appId: 'REPLACE_WITH_APP_ID',
  consumerId: 'REPLACE_WITH_CONSUMER_ID'
});

const params = {}

try {
  const { data } = await apideck.vault.logsAll(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="sessionsCreate"></a>
# Create Session


Method: **sessionsCreate**

```typescript
vaultApi.sessionsCreate(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **session** | [Session](../models/Session.md)| Additional redirect uri and/or consumer metadata |
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 



### Response Type

[`CreateSessionResponse`](../models/CreateSessionResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Session created | 
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
  appId: 'REPLACE_WITH_APP_ID',
  consumerId: 'REPLACE_WITH_CONSUMER_ID'
});

const params = {
  session: {
    consumer_metadata: {
      account_name: 'SpaceX',
      user_name: 'Elon Musk',
      email: 'elon@musk.com',
      image: 'https://www.spacex.com/static/images/share.jpg'
    },
    redirect_uri: 'https://mysaas.com/dashboard',
    settings: {
      unified_apis: [
        'crm'
      ],
      hide_resource_settings: false,
      sandbox_mode: false,
      isolation_mode: false,
      session_length: '30m',
      show_logs: true,
      show_suggestions: false,
      show_sidebar: true,
      auto_redirect: false,
      hide_guides: false,
      allow_actions: [
        'delete'
      ]
    },
    theme: {
      favicon: 'https://res.cloudinary.com/apideck/icons/intercom',
      logo: 'https://res.cloudinary.com/apideck/icons/intercom',
      primary_color: '#286efa',
      sidepanel_background_color: '#286efa',
      sidepanel_text_color: '#FFFFFF',
      vault_name: 'Intercom',
      privacy_url: 'https://compliance.apideck.com/privacy-policy',
      terms_url: 'https://www.termsfeed.com/terms-conditions/957c85c1b089ae9e3219c83eff65377e'
    },
    custom_consumer_settings: {
      feature_flag_1: true,
      tax_rates: [
        {
          id: '6',
          label: '6%'
        },
        {
          id: '21',
          label: '21%'
        }
      ]
    }
  }
}

try {
  const { data } = await apideck.vault.sessionsCreate(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="validateConnectionState"></a>
# Validate Connection State


Method: **validateConnectionState**

```typescript
vaultApi.validateConnectionState(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **object**|  |
 **serviceId** | [**string**] | Service ID of the resource to return | 
 **unifiedApi** | [**string**] | Unified API | 
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 



### Response Type

[`ValidateConnectionStateResponse`](../models/ValidateConnectionStateResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Connection access token refreshed | 
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
  appId: 'REPLACE_WITH_APP_ID',
  consumerId: 'REPLACE_WITH_CONSUMER_ID'
});

const params = {
  serviceId: 'pipedrive',
  unifiedApi: 'crm',
  validateConnectionState: {}
}

try {
  const { data } = await apideck.vault.validateConnectionState(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

