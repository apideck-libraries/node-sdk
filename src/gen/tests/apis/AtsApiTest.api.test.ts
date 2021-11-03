import fetch from 'node-fetch'
import { Apideck } from '../../../'
const { Response } = jest.requireActual('node-fetch')

jest.mock('node-fetch', () => jest.fn())

const basePath = 'https://example.com'

const methodResponse = {
  All: {
    status: 'OK',
    data: []
  }
}

describe('AtsApi', () => {
  describe('#applicantsAdd', () => {
    const endpoint = '/ats/applicants'

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
        service: 'zoho-crm',
        resource: 'Applicants',
        operation: 'one',
        data: {
          id: '12345'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { ats } = apideck
      const params = {
        applicant: {
          name: 'Elon Musk',
          first_name: 'Elon',
          last_name: 'Musk',
          emails: [
            {
              id: '123',
              email: 'elon@musk.com',
              type: 'primary'
            }
          ],
          phone_numbers: [
            {
              id: '12345',
              country_code: '1',
              area_code: '323',
              number: '111-111-1111',
              type: 'primary'
            }
          ]
        }
      } as any
      const current = await ats.applicantsAdd(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#applicantsAll', () => {
    const endpoint = '/ats/applicants'

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
        service: 'zoho-crm',
        resource: 'Applicants',
        operation: 'one',
        data: [
          {
            id: '12345',
            name: 'Elon Musk',
            first_name: 'Elon',
            last_name: 'Musk',
            emails: [
              {
                id: '123',
                email: 'elon@musk.com',
                type: 'primary'
              }
            ],
            phone_numbers: [
              {
                id: '12345',
                country_code: '1',
                area_code: '323',
                number: '111-111-1111',
                type: 'primary'
              }
            ],
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

      const { ats } = apideck
      const params = {} as any
      const current = await ats.applicantsAll(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#applicantsOne', () => {
    const endpoint = '/ats/applicants/{id}'

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
        service: 'zoho-crm',
        resource: 'Applicants',
        operation: 'one',
        data: {
          id: '12345',
          name: 'Elon Musk',
          first_name: 'Elon',
          last_name: 'Musk',
          emails: [
            {
              id: '123',
              email: 'elon@musk.com',
              type: 'primary'
            }
          ],
          phone_numbers: [
            {
              id: '12345',
              country_code: '1',
              area_code: '323',
              number: '111-111-1111',
              type: 'primary'
            }
          ],
          created_at: '2020-09-30T07:43:32.000Z'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { ats } = apideck
      const params = {
        id: 'id_example'
      } as any
      const current = await ats.applicantsOne(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#jobsAll', () => {
    const endpoint = '/ats/jobs'

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
        service: 'lever',
        resource: 'Jobs',
        operation: 'one',
        data: [
          {
            id: '12345',
            title: 'CEO',
            description: 'A description',
            code: '123-OC',
            status: 'completed',
            url: 'https://downstreamconnector.com/job?id=123',
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

      const { ats } = apideck
      const params = {} as any
      const current = await ats.jobsAll(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#jobsOne', () => {
    const endpoint = '/ats/jobs/{id}'

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
        service: 'lever',
        resource: 'Jobs',
        operation: 'one',
        data: {
          id: '12345',
          title: 'CEO',
          description: 'A description',
          code: '123-OC',
          status: 'completed',
          url: 'https://downstreamconnector.com/job?id=123',
          created_at: '2020-09-30T07:43:32.000Z'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { ats } = apideck
      const params = {
        id: 'id_example'
      } as any
      const current = await ats.jobsOne(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })
})
