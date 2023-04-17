# Apideck.IssueTracking

## Class Name
**IssueTrackingApi**

## Methods

* [List Tags](#collectionTagsAll)
* [Create Comment](#ticketCommentsAdd)
* [List Comments](#ticketCommentsAll)
* [Delete Comment](#ticketCommentsDelete)
* [Get Comment](#ticketCommentsOne)
* [Update Comment](#ticketCommentsUpdate)
* [Create Ticket](#ticketsAdd)
* [List Tickets](#ticketsAll)
* [Delete Ticket](#ticketsDelete)
* [Get Ticket](#ticketsOne)
* [Update Ticket](#ticketsUpdate)
* [List Users](#collectionUsersAll)
* [Get User](#collectionUsersOne)
* [List Collections](#collectionsAll)
* [Get Collection](#collectionsOne)

<a name="collectionTagsAll"></a>
# List Tags


Method: **collectionTagsAll**

```typescript
issueTrackingApi.collectionTagsAll(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collectionId** | [**string**] | The collection ID | 
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **cursor** | [**string**] | Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response. | (optional) 
 **limit** | [**number**] | Number of results to return. Minimum 1, Maximum 200, Default 20 | (optional) defaults to 20
 **fields** | [**string**] | The \'fields\' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: &#x60;fields=name,email,addresses.city&#x60;<br /><br />In the example above, the response will only include the fields \&quot;name\&quot;, \&quot;email\&quot; and \&quot;addresses.city\&quot;. If any other fields are available, they will be excluded. | (optional) 



### Response Type

[`GetCollectionTagsResponse`](../models/GetCollectionTagsResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | List Tags | 
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
  collectionId: 'collection_id_example'
}

try {
  const { data } = await apideck.issueTracking.collectionTagsAll(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="ticketCommentsAdd"></a>
# Create Comment


Method: **ticketCommentsAdd**

```typescript
issueTrackingApi.ticketCommentsAdd(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ticketComment** | [CollectionTicketComment](../models/CollectionTicketComment.md)|  |
 **collectionId** | [**string**] | The collection ID | 
 **ticketId** | [**string**] | ID of the ticket you are acting upon. | 
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 



### Response Type

[`CreateCommentResponse`](../models/CreateCommentResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**201** | Create a Comment | 
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
  collectionId: 'collection_id_example',
  ticketId: 'ticket_id_example',
  ticketComment: {
    body: 'What internet provider do you use?'
  }
}

try {
  const { data } = await apideck.issueTracking.ticketCommentsAdd(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="ticketCommentsAll"></a>
# List Comments


Method: **ticketCommentsAll**

```typescript
issueTrackingApi.ticketCommentsAll(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collectionId** | [**string**] | The collection ID | 
 **ticketId** | [**string**] | ID of the ticket you are acting upon. | 
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **cursor** | [**string**] | Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response. | (optional) 
 **limit** | [**number**] | Number of results to return. Minimum 1, Maximum 200, Default 20 | (optional) defaults to 20
 **sort** | **CommentsSort** | Apply sorting | (optional) 
 **fields** | [**string**] | The \'fields\' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: &#x60;fields=name,email,addresses.city&#x60;<br /><br />In the example above, the response will only include the fields \&quot;name\&quot;, \&quot;email\&quot; and \&quot;addresses.city\&quot;. If any other fields are available, they will be excluded. | (optional) 



### Response Type

[`GetCommentsResponse`](../models/GetCommentsResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | List Comments | 
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
  collectionId: 'collection_id_example',
  ticketId: 'ticket_id_example'
}

try {
  const { data } = await apideck.issueTracking.ticketCommentsAll(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="ticketCommentsDelete"></a>
# Delete Comment


Method: **ticketCommentsDelete**

```typescript
issueTrackingApi.ticketCommentsDelete(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | ID of the record you are acting upon. | 
 **collectionId** | [**string**] | The collection ID | 
 **ticketId** | [**string**] | ID of the ticket you are acting upon. | 
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false



### Response Type

[`DeleteCommentResponse`](../models/DeleteCommentResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Delete a Comment | 
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
  id: 'id_example',
  collectionId: 'collection_id_example',
  ticketId: 'ticket_id_example'
}

try {
  const { data } = await apideck.issueTracking.ticketCommentsDelete(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="ticketCommentsOne"></a>
# Get Comment


Method: **ticketCommentsOne**

```typescript
issueTrackingApi.ticketCommentsOne(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | ID of the record you are acting upon. | 
 **collectionId** | [**string**] | The collection ID | 
 **ticketId** | [**string**] | ID of the ticket you are acting upon. | 
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **cursor** | [**string**] | Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response. | (optional) 
 **limit** | [**number**] | Number of results to return. Minimum 1, Maximum 200, Default 20 | (optional) defaults to 20
 **fields** | [**string**] | The \'fields\' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: &#x60;fields=name,email,addresses.city&#x60;<br /><br />In the example above, the response will only include the fields \&quot;name\&quot;, \&quot;email\&quot; and \&quot;addresses.city\&quot;. If any other fields are available, they will be excluded. | (optional) 



### Response Type

[`GetCommentResponse`](../models/GetCommentResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Get a Comment | 
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
  id: 'id_example',
  collectionId: 'collection_id_example',
  ticketId: 'ticket_id_example'
}

try {
  const { data } = await apideck.issueTracking.ticketCommentsOne(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="ticketCommentsUpdate"></a>
# Update Comment


Method: **ticketCommentsUpdate**

```typescript
issueTrackingApi.ticketCommentsUpdate(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ticketComment** | [CollectionTicketComment](../models/CollectionTicketComment.md)|  |
 **id** | [**string**] | ID of the record you are acting upon. | 
 **collectionId** | [**string**] | The collection ID | 
 **ticketId** | [**string**] | ID of the ticket you are acting upon. | 
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false



### Response Type

[`UpdateCommentResponse`](../models/UpdateCommentResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Update a Comment | 
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
  id: 'id_example',
  collectionId: 'collection_id_example',
  ticketId: 'ticket_id_example',
  ticketComment: {
    body: 'What internet provider do you use?'
  }
}

try {
  const { data } = await apideck.issueTracking.ticketCommentsUpdate(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="ticketsAdd"></a>
# Create Ticket


Method: **ticketsAdd**

```typescript
issueTrackingApi.ticketsAdd(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ticket** | [Ticket](../models/Ticket.md)|  |
 **collectionId** | [**string**] | The collection ID | 
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 



### Response Type

[`CreateTicketResponse`](../models/CreateTicketResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**201** | Create a Ticket | 
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
  collectionId: 'collection_id_example',
  ticket: {
    parent_id: '12345',
    type: 'Technical',
    subject: 'Technical Support Request',
    description: 'I am facing issues with my internet connection',
    status: 'open',
    priority: 'high',
    assignees: [
      {
        id: '12345'
      }
    ],
    due_date: '2020-09-30T07:43:32.000Z',
    tags: [
      {
        id: '12345'
      }
    ]
  }
}

try {
  const { data } = await apideck.issueTracking.ticketsAdd(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="ticketsAll"></a>
# List Tickets


Method: **ticketsAll**

```typescript
issueTrackingApi.ticketsAll(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collectionId** | [**string**] | The collection ID | 
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **cursor** | [**string**] | Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response. | (optional) 
 **limit** | [**number**] | Number of results to return. Minimum 1, Maximum 200, Default 20 | (optional) defaults to 20
 **sort** | **TicketsSort** | Apply sorting | (optional) 
 **filter** | **IssuesFilter** | Apply filters | (optional) 
 **fields** | [**string**] | The \'fields\' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: &#x60;fields=name,email,addresses.city&#x60;<br /><br />In the example above, the response will only include the fields \&quot;name\&quot;, \&quot;email\&quot; and \&quot;addresses.city\&quot;. If any other fields are available, they will be excluded. | (optional) 



### Response Type

[`GetTicketsResponse`](../models/GetTicketsResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | List Tickets | 
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
  collectionId: 'collection_id_example'
}

try {
  const { data } = await apideck.issueTracking.ticketsAll(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="ticketsDelete"></a>
# Delete Ticket


Method: **ticketsDelete**

```typescript
issueTrackingApi.ticketsDelete(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ticketId** | [**string**] | ID of the ticket you are acting upon. | 
 **collectionId** | [**string**] | The collection ID | 
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false



### Response Type

[`DeleteTicketResponse`](../models/DeleteTicketResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Delete a Ticket | 
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
  ticketId: 'ticket_id_example',
  collectionId: 'collection_id_example'
}

try {
  const { data } = await apideck.issueTracking.ticketsDelete(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="ticketsOne"></a>
# Get Ticket


Method: **ticketsOne**

```typescript
issueTrackingApi.ticketsOne(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ticketId** | [**string**] | ID of the ticket you are acting upon. | 
 **collectionId** | [**string**] | The collection ID | 
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false
 **fields** | [**string**] | The \'fields\' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: &#x60;fields=name,email,addresses.city&#x60;<br /><br />In the example above, the response will only include the fields \&quot;name\&quot;, \&quot;email\&quot; and \&quot;addresses.city\&quot;. If any other fields are available, they will be excluded. | (optional) 



### Response Type

[`GetTicketResponse`](../models/GetTicketResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Get a Ticket | 
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
  ticketId: 'ticket_id_example',
  collectionId: 'collection_id_example'
}

try {
  const { data } = await apideck.issueTracking.ticketsOne(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="ticketsUpdate"></a>
# Update Ticket


Method: **ticketsUpdate**

```typescript
issueTrackingApi.ticketsUpdate(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ticket** | [Ticket](../models/Ticket.md)|  |
 **ticketId** | [**string**] | ID of the ticket you are acting upon. | 
 **collectionId** | [**string**] | The collection ID | 
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false



### Response Type

[`UpdateTicketResponse`](../models/UpdateTicketResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Update a Ticket | 
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
  ticketId: 'ticket_id_example',
  collectionId: 'collection_id_example',
  ticket: {
    parent_id: '12345',
    type: 'Technical',
    subject: 'Technical Support Request',
    description: 'I am facing issues with my internet connection',
    status: 'open',
    priority: 'high',
    assignees: [
      {
        id: '12345'
      }
    ],
    due_date: '2020-09-30T07:43:32.000Z',
    tags: [
      {
        id: '12345'
      }
    ]
  }
}

try {
  const { data } = await apideck.issueTracking.ticketsUpdate(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="collectionUsersAll"></a>
# List Users


Method: **collectionUsersAll**

```typescript
issueTrackingApi.collectionUsersAll(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collectionId** | [**string**] | The collection ID | 
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **cursor** | [**string**] | Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response. | (optional) 
 **limit** | [**number**] | Number of results to return. Minimum 1, Maximum 200, Default 20 | (optional) defaults to 20
 **fields** | [**string**] | The \'fields\' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: &#x60;fields=name,email,addresses.city&#x60;<br /><br />In the example above, the response will only include the fields \&quot;name\&quot;, \&quot;email\&quot; and \&quot;addresses.city\&quot;. If any other fields are available, they will be excluded. | (optional) 



### Response Type

[`GetCollectionUsersResponse`](../models/GetCollectionUsersResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Users | 
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
  collectionId: 'collection_id_example'
}

try {
  const { data } = await apideck.issueTracking.collectionUsersAll(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="collectionUsersOne"></a>
# Get User


Method: **collectionUsersOne**

```typescript
issueTrackingApi.collectionUsersOne(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collectionId** | [**string**] | The collection ID | 
 **id** | [**string**] | ID of the record you are acting upon. | 
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false
 **fields** | [**string**] | The \'fields\' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: &#x60;fields=name,email,addresses.city&#x60;<br /><br />In the example above, the response will only include the fields \&quot;name\&quot;, \&quot;email\&quot; and \&quot;addresses.city\&quot;. If any other fields are available, they will be excluded. | (optional) 



### Response Type

[`GetCollectionUserResponse`](../models/GetCollectionUserResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | User | 
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
  collectionId: 'collection_id_example',
  id: 'id_example'
}

try {
  const { data } = await apideck.issueTracking.collectionUsersOne(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="collectionsAll"></a>
# List Collections


Method: **collectionsAll**

```typescript
issueTrackingApi.collectionsAll(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **cursor** | [**string**] | Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response. | (optional) 
 **limit** | [**number**] | Number of results to return. Minimum 1, Maximum 200, Default 20 | (optional) defaults to 20
 **sort** | **CollectionsSort** | Apply sorting | (optional) 
 **fields** | [**string**] | The \'fields\' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: &#x60;fields=name,email,addresses.city&#x60;<br /><br />In the example above, the response will only include the fields \&quot;name\&quot;, \&quot;email\&quot; and \&quot;addresses.city\&quot;. If any other fields are available, they will be excluded. | (optional) 



### Response Type

[`GetCollectionsResponse`](../models/GetCollectionsResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | List Collections | 
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
  const { data } = await apideck.issueTracking.collectionsAll(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="collectionsOne"></a>
# Get Collection


Method: **collectionsOne**

```typescript
issueTrackingApi.collectionsOne(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collectionId** | [**string**] | The collection ID | 
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false
 **fields** | [**string**] | The \'fields\' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: &#x60;fields=name,email,addresses.city&#x60;<br /><br />In the example above, the response will only include the fields \&quot;name\&quot;, \&quot;email\&quot; and \&quot;addresses.city\&quot;. If any other fields are available, they will be excluded. | (optional) 



### Response Type

[`GetCollectionResponse`](../models/GetCollectionResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Get a Collection | 
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
  collectionId: 'collection_id_example'
}

try {
  const { data } = await apideck.issueTracking.collectionsOne(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

