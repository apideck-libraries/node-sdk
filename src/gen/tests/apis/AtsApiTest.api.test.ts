import fetch from 'node-fetch-commonjs'
import { Apideck } from '../../../'
const { Response } = jest.requireActual('node-fetch-commonjs')

jest.mock('node-fetch-commonjs', () => jest.fn())

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
        service: 'lever',
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
          position_id: '123',
          name: 'Elon Musk',
          first_name: 'Elon',
          last_name: 'Musk',
          headline: 'PepsiCo, Inc, Central Perk',
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
          addresses: [
            {
              id: '123',
              type: 'primary',
              string: '25 Spring Street, Blackburn, VIC 3130',
              name: 'HQ US',
              line1: 'Main street',
              line2: 'apt #',
              street_number: '25',
              city: 'San Francisco',
              state: 'CA',
              postal_code: '94104',
              country: 'US',
              latitude: '40.759211',
              longitude: '-73.984638',
              county: 'Santa Clara',
              contact_name: 'Elon Musk',
              salutation: 'Mr',
              phone_number: '111-111-1111',
              fax: '122-111-1111',
              email: 'elon@musk.com',
              website: 'https://elonmusk.com'
            }
          ],
          applications: [
            'a0d636c6-43b3-4bde-8c70-85b707d992f4',
            'a98lfd96-43b3-4bde-8c70-85b707d992e6'
          ],
          followers: [
            'a0d636c6-43b3-4bde-8c70-85b707d992f4',
            'a98lfd96-43b3-4bde-8c70-85b707d992e6'
          ],
          sources: ['Job site'],
          confidential: false,
          anonymized: 'true',
          tags: ['New'],
          archived: false,
          owner_id: '54321'
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
        service: 'lever',
        resource: 'Applicants',
        operation: 'one',
        data: [
          {
            id: '12345',
            position_id: '123',
            name: 'Elon Musk',
            first_name: 'Elon',
            last_name: 'Musk',
            headline: 'PepsiCo, Inc, Central Perk',
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
            addresses: [
              {
                id: '123',
                type: 'primary',
                string: '25 Spring Street, Blackburn, VIC 3130',
                name: 'HQ US',
                line1: 'Main street',
                line2: 'apt #',
                street_number: '25',
                city: 'San Francisco',
                state: 'CA',
                postal_code: '94104',
                country: 'US',
                latitude: '40.759211',
                longitude: '-73.984638',
                county: 'Santa Clara',
                contact_name: 'Elon Musk',
                salutation: 'Mr',
                phone_number: '111-111-1111',
                fax: '122-111-1111',
                email: 'elon@musk.com',
                website: 'https://elonmusk.com'
              }
            ],
            stage_id: '12345',
            applications: [
              'a0d636c6-43b3-4bde-8c70-85b707d992f4',
              'a98lfd96-43b3-4bde-8c70-85b707d992e6'
            ],
            followers: [
              'a0d636c6-43b3-4bde-8c70-85b707d992f4',
              'a98lfd96-43b3-4bde-8c70-85b707d992e6'
            ],
            sources: ['Job site'],
            confidential: false,
            anonymized: 'true',
            tags: ['New'],
            archived: false,
            last_interaction_at: '2020-09-30T07:43:32.000Z',
            owner_id: '54321',
            sourced_by: '12345',
            deleted_by: '12345',
            deleted_at: '2020-09-30T07:43:32.000Z',
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
        service: 'lever',
        resource: 'Applicants',
        operation: 'one',
        data: {
          id: '12345',
          position_id: '123',
          name: 'Elon Musk',
          first_name: 'Elon',
          last_name: 'Musk',
          headline: 'PepsiCo, Inc, Central Perk',
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
          addresses: [
            {
              id: '123',
              type: 'primary',
              string: '25 Spring Street, Blackburn, VIC 3130',
              name: 'HQ US',
              line1: 'Main street',
              line2: 'apt #',
              street_number: '25',
              city: 'San Francisco',
              state: 'CA',
              postal_code: '94104',
              country: 'US',
              latitude: '40.759211',
              longitude: '-73.984638',
              county: 'Santa Clara',
              contact_name: 'Elon Musk',
              salutation: 'Mr',
              phone_number: '111-111-1111',
              fax: '122-111-1111',
              email: 'elon@musk.com',
              website: 'https://elonmusk.com'
            }
          ],
          stage_id: '12345',
          applications: [
            'a0d636c6-43b3-4bde-8c70-85b707d992f4',
            'a98lfd96-43b3-4bde-8c70-85b707d992e6'
          ],
          followers: [
            'a0d636c6-43b3-4bde-8c70-85b707d992f4',
            'a98lfd96-43b3-4bde-8c70-85b707d992e6'
          ],
          sources: ['Job site'],
          confidential: false,
          anonymized: 'true',
          tags: ['New'],
          archived: false,
          last_interaction_at: '2020-09-30T07:43:32.000Z',
          owner_id: '54321',
          sourced_by: '12345',
          deleted_by: '12345',
          deleted_at: '2020-09-30T07:43:32.000Z',
          updated_at: '2020-09-30T07:43:32.000Z',
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
            visibility: ['public'],
            status: 'completed',
            code: '123-OC',
            requisition_id: 'abc123',
            hiring_managers: ['123456'],
            description: 'A description',
            description_html: 'string',
            blocks: [
              {
                title: 'string',
                content: 'string'
              }
            ],
            closing: 'The closing section of the job description',
            closing_html: 'string',
            url: 'string',
            job_portal_url: 'string',
            confidential: false,
            tags: ['New'],
            owner_id: '54321',
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
          visibility: ['public'],
          status: 'completed',
          code: '123-OC',
          requisition_id: 'abc123',
          hiring_managers: ['123456'],
          description: 'A description',
          description_html: 'string',
          blocks: [
            {
              title: 'string',
              content: 'string'
            }
          ],
          closing: 'The closing section of the job description',
          closing_html: 'string',
          url: 'string',
          job_portal_url: 'string',
          confidential: false,
          tags: ['New'],
          owner_id: '54321',
          updated_by: '12345',
          created_by: '12345',
          updated_at: '2020-09-30T07:43:32.000Z',
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
