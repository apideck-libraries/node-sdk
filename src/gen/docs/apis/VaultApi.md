# Apideck.Vault

## Class Name
**VaultApi**

## Methods

* [Get All Connections](#connectionsAll)
* [Deletes A Connection](#connectionsDelete)
* [Get Resource Settings](#connectionsGetSettings)
* [Get Connection](#connectionsOne)
* [Update Connection](#connectionsUpdate)
* [Update Settings](#connectionsUpdateSettings)
* [Get All Consumers](#consumersAll)
* [Get Consumer](#consumersOne)
* [Consumer Request Counts](#consumersRequestCounts)
* [Get All Consumer Request Logs](#logsAll)
* [Create Session](#sessionsCreate)

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

<a name="connectionsGetSettings"></a>
# Get Resource Settings


Method: **connectionsGetSettings**

```typescript
vaultApi.connectionsGetSettings(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **unifiedApi** | [**string**] | Unified API | 
 **serviceId** | [**string**] | Service ID of the resource to return | 
 **resource** | [**string**] | Resource Name | 
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
  const { data } = await apideck.vault.connectionsGetSettings(params)
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
    settings: {
      instance_url: 'https://eu28.salesforce.com'
    },
    metadata: {
      account: {
        name: 'My Company',
        id: 'c01458a5-7276-41ce-bc19-639906b0450a'
      },
      plan: 'enterprise'
    },
    auth_type: 'oauth2',
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
    enabled: true
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

<a name="connectionsUpdateSettings"></a>
# Update Settings


Method: **connectionsUpdateSettings**

```typescript
vaultApi.connectionsUpdateSettings(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **connection** | [Connection](../models/Connection.md)| Fields that need to be updated on the resource |
 **serviceId** | [**string**] | Service ID of the resource to return | 
 **unifiedApi** | [**string**] | Unified API | 
 **resource** | [**string**] | Resource Name | 
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
    settings: {
      instance_url: 'https://eu28.salesforce.com'
    },
    metadata: {
      account: {
        name: 'My Company',
        id: 'c01458a5-7276-41ce-bc19-639906b0450a'
      },
      plan: 'enterprise'
    },
    auth_type: 'oauth2',
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
    enabled: true
  }
}

try {
  const { data } = await apideck.vault.connectionsUpdateSettings(params)
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
 **limit** | [**number**] | Number of records to return | (optional) defaults to 20



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

<a name="consumersRequestCounts"></a>
# Consumer Request Counts


Method: **consumersRequestCounts**

```typescript
vaultApi.consumersRequestCounts(body)
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
  const { data } = await apideck.vault.consumersRequestCounts(params)
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
 **limit** | [**number**] | Number of records to return | (optional) defaults to 20



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
      auto_redirect: false
    },
    theme: {
      favicon: 'https://res.cloudinary.com/apideck/icons/intercom',
      primary_color: '#286efa',
      privacy_url: 'https://compliance.apideck.com/privacy-policy',
      sidepanel_background_color: '#286efa',
      sidepanel_text_color: '#FFFFFF',
      terms_url: 'https://www.termsfeed.com/terms-conditions/957c85c1b089ae9e3219c83eff65377e',
      vault_name: 'Intercom'
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

