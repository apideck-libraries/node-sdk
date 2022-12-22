import fetch from 'node-fetch-commonjs'
const { Response } = jest.requireActual('node-fetch-commonjs')

jest.mock('node-fetch-commonjs', () => jest.fn())

import { Apideck } from '../../../'

const basePath = 'https://example.com'

const methodResponse = {
  All: {
    status: 'OK',
    data: []
  }
}

describe('WebhookApi', () => {
  describe('#eventLogsAll', () => {
    const endpoint = '/webhook/logs'

    const config = {
      apiKey: 'REPLACE_WITH_API_KEY',
      appId: 'REPLACE_WITH_APP_ID'
    }
    const apideck = new Apideck({ ...config, basePath: basePath })

    afterEach(() => {
      jest.clearAllMocks()
    })

    it('should call Apideck with expected params', async () => {
      const mockedResponse: Record<string, unknown> = {
        status_code: 200,
        status: 'OK',
        data: [
          {
            id: '1d174c4d-fe9e-4377-a76c-6da22fe9cd87',
            status_code: 200,
            success: true,
            application_id: 'dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX',
            consumer_id: 'test_consumer_id',
            unified_api: 'crm',
            service: {
              id: '101-data-solution',
              name: '101 Data Solution'
            },
            endpoint: 'https://example.com/my/webhook/endpoint',
            event_type: 'vault.connection.updated',
            execution_attempt: 3,
            http_method: 'GET',
            timestamp: '2021-07-12T14:26:17.420Z',
            entity_type: 'Connection',
            request_body:
              '{&quot;entity&quot;:{&quot;id&quot;:&quot;2222+test_user_id&quot;,&quot;application_id&quot;:&quot;2222&quot;,&quot;consumer_id&quot;:&quot;test_user_id&quot;,&quot;name&quot;:&quot;ActiveCampaign&quot;,&quot;icon&quot;:&quot;https://res.cloudinary.com/apideck/image/upload/v1529455970/catalog/activecampaign/icon128x128.png&quot;,&quot;logo&quot;:&quot;https://www.activecampaign.com/site/assets/social-2x.png&quot;,&quot;unified_api&quot;:&quot;crm&quot;,&quot;service_id&quot;:&quot;activecampaign&quot;,&quot;auth_type&quot;:&quot;apiKey&quot;,&quot;enabled&quot;:true,&quot;tag_line&quot;:&quot;Integrated email marketing, marketing automation, and small business CRM. Save time while growing your business with sales automation.&quot;,&quot;website&quot;:&quot;https://www.activecampaign.com/&quot;,&quot;settings&quot;:{&quot;instance_url&quot;:&quot;https://eu28.salesforce.com&quot;,&quot;base_url&quot;:&quot;https://updated.api-us1.com&quot;},&quot;metadata&quot;:{&quot;plan&quot;:&quot;enterprise&quot;,&quot;account&quot;:{&quot;name&quot;:&quot;My Company&quot;}},&quot;state&quot;:&quot;callable&quot;,&quot;created_at&quot;:&quot;2021-09-10T10:39:49.628Z&quot;,&quot;updated_at&quot;:&quot;2021-09-10T10:39:52.715Z&quot;},&quot;entityType&quot;:&quot;Connection&quot;}',
            response_body: '{&quot;status&quot;:&quot;OK&quot;}',
            retry_scheduled: true,
            attempts: [
              {
                timestamp: '2021-07-12T14:26:17.420Z',
                execution_attempt: 3,
                status_code: 200,
                success: true
              }
            ]
          }
        ],
        meta: {
          items_on_page: 50,
          cursors: {
            previous: 'em9oby1jcm06OnBhZ2U6OjE=',
            current: 'em9oby1jcm06OnBhZ2U6OjI=',
            next: 'em9oby1jcm06OnBhZ2U6OjM='
          }
        },
        links: {
          previous: 'https://unify.apideck.com/crm/companies?cursor=em9oby1jcm06OnBhZ2U6OjE%3D',
          current: 'https://unify.apideck.com/crm/companies',
          next: 'https://unify.apideck.com/crm/companies?cursor=em9oby1jcm06OnBhZ2U6OjM'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { webhook } = apideck
      const params = {} as any
      const current = await webhook.eventLogsAll(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#webhooksAdd', () => {
    const endpoint = '/webhook/webhooks'

    const config = {
      apiKey: 'REPLACE_WITH_API_KEY',
      appId: 'REPLACE_WITH_APP_ID'
    }
    const apideck = new Apideck({ ...config, basePath: basePath })

    afterEach(() => {
      jest.clearAllMocks()
    })

    it('should call Apideck with expected params', async () => {
      const mockedResponse: Record<string, unknown> = {
        status_code: 200,
        status: 'OK',
        data: {
          id: '1234',
          description: 'A description',
          unified_api: 'crm',
          status: 'enabled',
          disabled_reason: 'retry_limit',
          delivery_url: 'https://example.com/my/webhook/endpoint',
          execute_base_url: 'https://unify.apideck.com/webhook/webhooks/1234/execute',
          events: ['vault.connection.created', 'vault.connection.updated'],
          updated_at: '2020-09-30T07:43:32.000Z',
          created_at: '2020-09-30T07:43:32.000Z'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { webhook } = apideck
      const params = {
        webhook: {
          description: 'A description',
          unified_api: 'crm',
          status: 'enabled',
          delivery_url: 'https://example.com/my/webhook/endpoint',
          events: ['vault.connection.created', 'vault.connection.updated']
        }
      } as any
      const current = await webhook.webhooksAdd(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#webhooksAll', () => {
    const endpoint = '/webhook/webhooks'

    const config = {
      apiKey: 'REPLACE_WITH_API_KEY',
      appId: 'REPLACE_WITH_APP_ID'
    }
    const apideck = new Apideck({ ...config, basePath: basePath })

    afterEach(() => {
      jest.clearAllMocks()
    })

    it('should call Apideck with expected params', async () => {
      const mockedResponse: Record<string, unknown> = {
        status_code: 200,
        status: 'OK',
        data: [
          {
            id: '1234',
            description: 'A description',
            unified_api: 'crm',
            status: 'enabled',
            disabled_reason: 'retry_limit',
            delivery_url: 'https://example.com/my/webhook/endpoint',
            execute_base_url: 'https://unify.apideck.com/webhook/webhooks/1234/execute',
            events: ['vault.connection.created', 'vault.connection.updated'],
            updated_at: '2020-09-30T07:43:32.000Z',
            created_at: '2020-09-30T07:43:32.000Z'
          }
        ],
        meta: {
          items_on_page: 50,
          cursors: {
            previous: 'em9oby1jcm06OnBhZ2U6OjE=',
            current: 'em9oby1jcm06OnBhZ2U6OjI=',
            next: 'em9oby1jcm06OnBhZ2U6OjM='
          }
        },
        links: {
          previous: 'https://unify.apideck.com/crm/companies?cursor=em9oby1jcm06OnBhZ2U6OjE%3D',
          current: 'https://unify.apideck.com/crm/companies',
          next: 'https://unify.apideck.com/crm/companies?cursor=em9oby1jcm06OnBhZ2U6OjM'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { webhook } = apideck
      const params = {} as any
      const current = await webhook.webhooksAll(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#webhooksDelete', () => {
    const endpoint = '/webhook/webhooks/{id}'

    const config = {
      apiKey: 'REPLACE_WITH_API_KEY',
      appId: 'REPLACE_WITH_APP_ID'
    }
    const apideck = new Apideck({ ...config, basePath: basePath })

    afterEach(() => {
      jest.clearAllMocks()
    })

    it('should call Apideck with expected params', async () => {
      const mockedResponse: Record<string, unknown> = {
        status_code: 200,
        status: 'OK',
        data: {
          id: '1234',
          description: 'A description',
          unified_api: 'crm',
          status: 'enabled',
          disabled_reason: 'retry_limit',
          delivery_url: 'https://example.com/my/webhook/endpoint',
          execute_base_url: 'https://unify.apideck.com/webhook/webhooks/1234/execute',
          events: ['vault.connection.created', 'vault.connection.updated'],
          updated_at: '2020-09-30T07:43:32.000Z',
          created_at: '2020-09-30T07:43:32.000Z'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { webhook } = apideck
      const params = {
        id: 'id_example'
      } as any
      const current = await webhook.webhooksDelete(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#webhooksOne', () => {
    const endpoint = '/webhook/webhooks/{id}'

    const config = {
      apiKey: 'REPLACE_WITH_API_KEY',
      appId: 'REPLACE_WITH_APP_ID'
    }
    const apideck = new Apideck({ ...config, basePath: basePath })

    afterEach(() => {
      jest.clearAllMocks()
    })

    it('should call Apideck with expected params', async () => {
      const mockedResponse: Record<string, unknown> = {
        status_code: 200,
        status: 'OK',
        data: {
          id: '1234',
          description: 'A description',
          unified_api: 'crm',
          status: 'enabled',
          disabled_reason: 'retry_limit',
          delivery_url: 'https://example.com/my/webhook/endpoint',
          execute_base_url: 'https://unify.apideck.com/webhook/webhooks/1234/execute',
          events: ['vault.connection.created', 'vault.connection.updated'],
          updated_at: '2020-09-30T07:43:32.000Z',
          created_at: '2020-09-30T07:43:32.000Z'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { webhook } = apideck
      const params = {
        id: 'id_example'
      } as any
      const current = await webhook.webhooksOne(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#webhooksUpdate', () => {
    const endpoint = '/webhook/webhooks/{id}'

    const config = {
      apiKey: 'REPLACE_WITH_API_KEY',
      appId: 'REPLACE_WITH_APP_ID'
    }
    const apideck = new Apideck({ ...config, basePath: basePath })

    afterEach(() => {
      jest.clearAllMocks()
    })

    it('should call Apideck with expected params', async () => {
      const mockedResponse: Record<string, unknown> = {
        status_code: 200,
        status: 'OK',
        data: {
          id: '1234',
          description: 'A description',
          unified_api: 'crm',
          status: 'enabled',
          disabled_reason: 'retry_limit',
          delivery_url: 'https://example.com/my/webhook/endpoint',
          execute_base_url: 'https://unify.apideck.com/webhook/webhooks/1234/execute',
          events: ['vault.connection.created', 'vault.connection.updated'],
          updated_at: '2020-09-30T07:43:32.000Z',
          created_at: '2020-09-30T07:43:32.000Z'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { webhook } = apideck
      const params = {
        id: 'id_example',
        webhook: {
          description: 'A description',
          status: 'enabled',
          delivery_url: 'https://example.com/my/webhook/endpoint',
          events: ['vault.connection.created', 'vault.connection.updated']
        }
      } as any
      const current = await webhook.webhooksUpdate(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })
})
