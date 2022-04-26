# Apideck.Connector

## Class Name
**ConnectorApi**

## Methods

* [Get API Resource Coverage](#apiResourceCoverageOne)
* [Get API Resource](#apiResourcesOne)
* [List APIs](#apisAll)
* [Get API](#apisOne)
* [Get Connector Doc Content](#connectorDocsOne)
* [Get Connector Resource](#connectorResourcesOne)
* [List Connectors](#connectorsAll)
* [Get Connector](#connectorsOne)

<a name="apiResourceCoverageOne"></a>
# Get API Resource Coverage


Method: **apiResourceCoverageOne**

```typescript
connectorApi.apiResourceCoverageOne(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | ID of the record you are acting upon. | 
 **resourceId** | [**string**] | ID of the resource you are acting upon. | 
 **appId** | [**string**] | The ID of your Unify application | (optional) 



### Response Type

[`GetApiResourceCoverageResponse`](../models/GetApiResourceCoverageResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | ApiResources | 
**401** | Unauthorized | 
**402** | Payment Required | 
**404** | The specified resource was not found | 
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
  resourceId: 'resource_id_example'
}

try {
  const { data } = await apideck.connector.apiResourceCoverageOne(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="apiResourcesOne"></a>
# Get API Resource


Method: **apiResourcesOne**

```typescript
connectorApi.apiResourcesOne(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | ID of the record you are acting upon. | 
 **resourceId** | [**string**] | ID of the resource you are acting upon. | 
 **appId** | [**string**] | The ID of your Unify application | (optional) 



### Response Type

[`GetApiResourceResponse`](../models/GetApiResourceResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | ApiResources | 
**401** | Unauthorized | 
**402** | Payment Required | 
**404** | The specified resource was not found | 
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
  resourceId: 'resource_id_example'
}

try {
  const { data } = await apideck.connector.apiResourcesOne(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="apisAll"></a>
# List APIs


Method: **apisAll**

```typescript
connectorApi.apisAll(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **cursor** | [**string**] | Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response. | (optional) 
 **limit** | [**number**] | Number of records to return | (optional) defaults to 20
 **filter** | **ApisFilter** | Apply filters | (optional) 



### Response Type

[`GetApisResponse`](../models/GetApisResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Apis | 
**400** | Bad Request | 
**401** | Unauthorized | 
**402** | Payment Required | 
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
  const { data } = await apideck.connector.apisAll(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="apisOne"></a>
# Get API


Method: **apisOne**

```typescript
connectorApi.apisOne(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | ID of the record you are acting upon. | 
 **appId** | [**string**] | The ID of your Unify application | (optional) 



### Response Type

[`GetApiResponse`](../models/GetApiResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Apis | 
**401** | Unauthorized | 
**402** | Payment Required | 
**404** | The specified resource was not found | 
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
  const { data } = await apideck.connector.apisOne(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="connectorDocsOne"></a>
# Get Connector Doc Content


Method: **connectorDocsOne**

```typescript
connectorApi.connectorDocsOne(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | ID of the record you are acting upon. | 
 **docId** | [**string**] | ID of the Doc | 
 **appId** | [**string**] | The ID of your Unify application | (optional) 



### Response Type

[`GetConnectorResponse`](../models/GetConnectorResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Connectors | 
**401** | Unauthorized | 
**402** | Payment Required | 
**404** | The specified resource was not found | 
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
  docId: 'doc_id_example'
}

try {
  const { data } = await apideck.connector.connectorDocsOne(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="connectorResourcesOne"></a>
# Get Connector Resource


Method: **connectorResourcesOne**

```typescript
connectorApi.connectorResourcesOne(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | ID of the record you are acting upon. | 
 **resourceId** | [**string**] | ID of the resource you are acting upon. | 
 **appId** | [**string**] | The ID of your Unify application | (optional) 



### Response Type

[`GetConnectorResourceResponse`](../models/GetConnectorResourceResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | ConnectorResources | 
**401** | Unauthorized | 
**402** | Payment Required | 
**404** | The specified resource was not found | 
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
  resourceId: 'resource_id_example'
}

try {
  const { data } = await apideck.connector.connectorResourcesOne(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="connectorsAll"></a>
# List Connectors


Method: **connectorsAll**

```typescript
connectorApi.connectorsAll(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **cursor** | [**string**] | Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response. | (optional) 
 **limit** | [**number**] | Number of records to return | (optional) defaults to 20
 **filter** | **ConnectorsFilter** | Apply filters | (optional) 



### Response Type

[`GetConnectorsResponse`](../models/GetConnectorsResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Connectors | 
**400** | Bad Request | 
**401** | Unauthorized | 
**402** | Payment Required | 
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
  const { data } = await apideck.connector.connectorsAll(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="connectorsOne"></a>
# Get Connector


Method: **connectorsOne**

```typescript
connectorApi.connectorsOne(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | ID of the record you are acting upon. | 
 **appId** | [**string**] | The ID of your Unify application | (optional) 



### Response Type

[`GetConnectorResponse`](../models/GetConnectorResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Connectors | 
**401** | Unauthorized | 
**402** | Payment Required | 
**404** | The specified resource was not found | 
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
  const { data } = await apideck.connector.connectorsOne(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

