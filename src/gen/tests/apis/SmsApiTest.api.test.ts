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

describe('SmsApi', () => {
  describe('#messagesAdd', () => {
    const endpoint = '/sms/messages'

    const config = {
      apiKey: 'REPLACE_WITH_API_KEY',
      appId: 'REPLACE_WITH_APP_ID',
      consumerId: 'REPLACE_WITH_CONSUMER_ID'
    }
    const apideck = new Apideck({ ...config, basePath: basePath })

    afterEach(() => {
      jest.clearAllMocks()
    })

    it('should call Apideck with expected params', async () => {
      const mockedResponse: Record<string, unknown> = {
        status_code: 200,
        status: 'OK',
        service: 'twilio',
        resource: 'Messages',
        operation: 'add',
        data: {
          id: '12345'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { sms } = apideck
      const params = {
        message: {
          from: '+15017122661',
          to: '+15017122662',
          subject: 'Picture',
          body: 'Hi! How are you doing?',
          type: 'sms',
          scheduled_at: '2020-09-30T07:43:32.000Z',
          webhook_url: 'https://unify.apideck.com/webhook/webhooks/eyz329dkffdl4949/x/sms',
          reference: 'CUST001',
          messaging_service_id: '123456'
        }
      } as any
      const current = await sms.messagesAdd(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#messagesAll', () => {
    const endpoint = '/sms/messages'

    const config = {
      apiKey: 'REPLACE_WITH_API_KEY',
      appId: 'REPLACE_WITH_APP_ID',
      consumerId: 'REPLACE_WITH_CONSUMER_ID'
    }
    const apideck = new Apideck({ ...config, basePath: basePath })

    afterEach(() => {
      jest.clearAllMocks()
    })

    it('should call Apideck with expected params', async () => {
      const mockedResponse: Record<string, unknown> = {
        status_code: 200,
        status: 'OK',
        service: 'twilio',
        resource: 'Messages',
        operation: 'all',
        data: [
          {
            id: '12345',
            from: '+15017122661',
            to: '+15017122662',
            subject: 'Picture',
            body: 'Hi! How are you doing?',
            type: 'sms',
            number_of_units: 1,
            number_of_media_files: 1,
            direction: 'outbound-api',
            status: 'sent',
            scheduled_at: '2020-09-30T07:43:32.000Z',
            sent_at: '2020-09-30T07:43:32.000Z',
            webhook_url: 'https://unify.apideck.com/webhook/webhooks/eyz329dkffdl4949/x/sms',
            reference: 'CUST001',
            price: {
              per_unit: 0.01,
              total_amount: 0.01,
              currency: 'USD'
            },
            error: {
              code: 'X1',
              message: 'Something went wrong'
            },
            messaging_service_id: '123456',
            updated_by: '12345',
            created_by: '12345',
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

      const { sms } = apideck
      const params = {} as any
      const current = await sms.messagesAll(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#messagesDelete', () => {
    const endpoint = '/sms/messages/{id}'

    const config = {
      apiKey: 'REPLACE_WITH_API_KEY',
      appId: 'REPLACE_WITH_APP_ID',
      consumerId: 'REPLACE_WITH_CONSUMER_ID'
    }
    const apideck = new Apideck({ ...config, basePath: basePath })

    afterEach(() => {
      jest.clearAllMocks()
    })

    it('should call Apideck with expected params', async () => {
      const mockedResponse: Record<string, unknown> = {
        status_code: 200,
        status: 'OK',
        service: 'twilio',
        resource: 'Messages',
        operation: 'delete',
        data: {
          id: '12345'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { sms } = apideck
      const params = {
        id: 'id_example'
      } as any
      const current = await sms.messagesDelete(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#messagesOne', () => {
    const endpoint = '/sms/messages/{id}'

    const config = {
      apiKey: 'REPLACE_WITH_API_KEY',
      appId: 'REPLACE_WITH_APP_ID',
      consumerId: 'REPLACE_WITH_CONSUMER_ID'
    }
    const apideck = new Apideck({ ...config, basePath: basePath })

    afterEach(() => {
      jest.clearAllMocks()
    })

    it('should call Apideck with expected params', async () => {
      const mockedResponse: Record<string, unknown> = {
        status_code: 200,
        status: 'OK',
        service: 'twilio',
        resource: 'Messages',
        operation: 'one',
        data: {
          id: '12345',
          from: '+15017122661',
          to: '+15017122662',
          subject: 'Picture',
          body: 'Hi! How are you doing?',
          type: 'sms',
          number_of_units: 1,
          number_of_media_files: 1,
          direction: 'outbound-api',
          status: 'sent',
          scheduled_at: '2020-09-30T07:43:32.000Z',
          sent_at: '2020-09-30T07:43:32.000Z',
          webhook_url: 'https://unify.apideck.com/webhook/webhooks/eyz329dkffdl4949/x/sms',
          reference: 'CUST001',
          price: {
            per_unit: 0.01,
            total_amount: 0.01,
            currency: 'USD'
          },
          error: {
            code: 'X1',
            message: 'Something went wrong'
          },
          messaging_service_id: '123456',
          updated_by: '12345',
          created_by: '12345',
          updated_at: '2020-09-30T07:43:32.000Z',
          created_at: '2020-09-30T07:43:32.000Z'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { sms } = apideck
      const params = {
        id: 'id_example'
      } as any
      const current = await sms.messagesOne(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#messagesUpdate', () => {
    const endpoint = '/sms/messages/{id}'

    const config = {
      apiKey: 'REPLACE_WITH_API_KEY',
      appId: 'REPLACE_WITH_APP_ID',
      consumerId: 'REPLACE_WITH_CONSUMER_ID'
    }
    const apideck = new Apideck({ ...config, basePath: basePath })

    afterEach(() => {
      jest.clearAllMocks()
    })

    it('should call Apideck with expected params', async () => {
      const mockedResponse: Record<string, unknown> = {
        status_code: 200,
        status: 'OK',
        service: 'twilio',
        resource: 'Messages',
        operation: 'update',
        data: {
          id: '12345'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { sms } = apideck
      const params = {
        id: 'id_example',
        message: {
          from: '+15017122661',
          to: '+15017122662',
          subject: 'Picture',
          body: 'Hi! How are you doing?',
          type: 'sms',
          scheduled_at: '2020-09-30T07:43:32.000Z',
          webhook_url: 'https://unify.apideck.com/webhook/webhooks/eyz329dkffdl4949/x/sms',
          reference: 'CUST001',
          messaging_service_id: '123456'
        }
      } as any
      const current = await sms.messagesUpdate(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })
})
