# Apideck.Vault

## Class Name
**VaultApi**

## Methods

* [Get All Connections](#connectionsAll)
* [Deletes A Connection](#connectionsDelete)
* [Get Settings](#connectionsGetSettings)
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
**200** | All Connections | 
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

apideck.vault.connectionsAll(params).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
  return data;
}).catch((error) => {
  console.error(error);
  return error.json();
})

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

apideck.vault.connectionsDelete(params).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
  return data;
}).catch((error) => {
  console.error(error);
  return error.json();
})

```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="connectionsGetSettings"></a>
# Get Settings


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

apideck.vault.connectionsGetSettings(params).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
  return data;
}).catch((error) => {
  console.error(error);
  return error.json();
})

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
 **createConnectionRequestBody** | [CreateConnectionRequestBody](../models/CreateConnectionRequestBody.md)| Fields to be updated on the resource |
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
  unifiedApi: 'crm'
}

apideck.vault.connectionsUpdate(params).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
  return data;
}).catch((error) => {
  console.error(error);
  return error.json();
})

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
  connectionsSetting: {
    serviceId: 'salesforce',
    name: 'Salesforce',
    tagLine: 'CRM software solutions and enterprise cloud computing from Salesforce, the leader in customer relationship management (CRM) and PaaS. Free 30 day trial.',
    unifiedApi: 'crm',
    website: 'https://www.salesforce.com',
    icon: 'https://res.cloudinary.com/apideck/image/upload/v1529456047/catalog/salesforce/icon128x128.png',
    logo: 'https://c1.sfdcstatic.com/content/dam/web/en_us/www/images/home/logo-salesforce-m.svg',
    settings: {
      instanceUrl: 'https://eu28.salesforce.com'
    },
    metadata: {
      ecosystem: {
        name: 'My Ecosystem',
        id: 'a6469332-7948-46a6-abc2-87ba3f005025'
      },
      account: {
        name: 'My Company',
        id: 'c01458a5-7276-41ce-bc19-639906b0450a'
      }
    },
    authType: 'oauth2',
    status: 'live',
    formFields: [
      {
        id: 'instance_url',
        label: 'Instance url',
        value: 'https://eu28.salesforce.com',
        placeholder: '',
        mask: false,
        type: 'text',
        required: true,
        disabled: false,
        customField: false
      }
    ],
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
    configurableResources: [
      'opportunities',
      'companies',
      'contacts',
      'leads'
    ],
    resourceSchemaSupport: [
      'leads'
    ],
    resourceSettingsSupport: [
      'leads'
    ],
    settingsRequiredForAuthorization: [
      'instance_url'
    ],
    authorizeUrl: 'https://unify.apideck.com/vault/authorize/salesforce/<application-id>?state=<state>',
    revokeUrl: 'https://unify.apideck.com/vault/revoke/salesforce/<application-id>?state=<state>',
    enabled: true,
    createdAt: 1615563533390,
    updatedAt: 1616662325753,
    state: 'authorized'
  }
}

apideck.vault.connectionsUpdateSettings(params).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
  return data;
}).catch((error) => {
  console.error(error);
  return error.json();
})

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
**200** | All Consumers | 
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

apideck.vault.consumersAll(params).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
  return data;
}).catch((error) => {
  console.error(error);
  return error.json();
})

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

apideck.vault.consumersOne(params).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
  return data;
}).catch((error) => {
  console.error(error);
  return error.json();
})

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
  consumerId: 'test_user_id'
}

apideck.vault.consumersRequestCounts(params).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
  return data;
}).catch((error) => {
  console.error(error);
  return error.json();
})

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
 **filter** | **object** | Filter results | (optional) 
 **cursor** | [**string**] | Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response. | (optional) 
 **limit** | [**number**] | Number of records to return | (optional) defaults to 20



### Response Type

[`GetLogsResponse`](../models/GetLogsResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | All Consumer Logs | 
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

apideck.vault.logsAll(params).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
  return data;
}).catch((error) => {
  console.error(error);
  return error.json();
})

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
 **sessionRequest** | [SessionRequest](../models/SessionRequest.md)| Additional redirect uri and/or consumer metadata |
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
    redirectUri: 'https://mysaas.com/dashboard',
    consumerMetadata: {
      accountName: 'SpaceX',
      userName: 'Elon Musk',
      email: 'elon@musk.com',
      image: 'https://www.spacex.com/static/images/share.jpg'
    },
    theme: {
      vaultName: 'Intercom',
      primaryColor: '#286efa',
      sidepanelBackgroundColor: '#286efa',
      sidepanelTextColor: '#FFFFFF',
      favicon: 'https://res.cloudinary.com/apideck/icons/intercom',
      termsUrl: 'https://www.termsfeed.com/terms-conditions/957c85c1b089ae9e3219c83eff65377e',
      privacyUrl: 'https://compliance.apideck.com/privacy-policy'
    },
    settings: {
      sessionLength: '30m',
      hideResourceSettings: false,
      showLogs: true,
      sandboxMode: false
    }
  }
}

apideck.vault.sessionsCreate(params).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
  return data;
}).catch((error) => {
  console.error(error);
  return error.json();
})

```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

