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

describe('LeadApi', () => {
  describe('#leadsAdd', () => {
    const endpoint = '/lead/leads'

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
        resource: 'companies',
        operation: 'one',
        data: {
          id: '12345'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { lead } = apideck
      const params = {
        lead: {
          name: 'Elon Musk',
          company_name: 'Spacex',
          owner_id: '54321',
          company_id: '2',
          contact_id: '2',
          lead_source: 'Cold Call',
          first_name: 'Elon',
          last_name: 'Musk',
          description: 'A thinker',
          prefix: 'Sir',
          title: 'CEO',
          language: 'EN',
          status: 'New',
          monetary_amount: 75000,
          currency: 'USD',
          fax: '+12129876543',
          websites: [
            {
              id: '12345',
              url: 'http://example.com',
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
              city: 'San Francisco',
              state: 'CA',
              postal_code: '94104',
              country: 'US',
              latitude: '40.759211',
              longitude: '-73.984638',
              contact_name: '111-111-1111',
              salutation: '111-111-1111',
              phone_number: '111-111-1111',
              fax: '111-111-1111',
              email: '111-111-1111',
              website: '111-111-1111'
            }
          ],
          social_links: [
            {
              id: '12345',
              url: 'https://www.twitter.com/apideck-io',
              type: 'twitter'
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
          emails: [
            {
              id: '123',
              email: 'elon@musk.com',
              type: 'primary'
            }
          ],
          custom_fields: [
            {
              id: '2389328923893298',
              name: 'employee_level',
              description: 'Employee Level',
              value: 'Uses Salesforce and Marketo'
            }
          ],
          tags: ['New']
        }
      } as any
      const current = await lead.leadsAdd(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#leadsAll', () => {
    const endpoint = '/lead/leads'

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
        resource: 'companies',
        operation: 'one',
        data: [
          {
            id: '12345',
            name: 'Elon Musk',
            company_name: 'Spacex',
            owner_id: '54321',
            company_id: '2',
            contact_id: '2',
            lead_source: 'Cold Call',
            first_name: 'Elon',
            last_name: 'Musk',
            description: 'A thinker',
            prefix: 'Sir',
            title: 'CEO',
            language: 'EN',
            status: 'New',
            monetary_amount: 75000,
            currency: 'USD',
            fax: '+12129876543',
            websites: [
              {
                id: '12345',
                url: 'http://example.com',
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
                city: 'San Francisco',
                state: 'CA',
                postal_code: '94104',
                country: 'US',
                latitude: '40.759211',
                longitude: '-73.984638',
                contact_name: '111-111-1111',
                salutation: '111-111-1111',
                phone_number: '111-111-1111',
                fax: '111-111-1111',
                email: '111-111-1111',
                website: '111-111-1111'
              }
            ],
            social_links: [
              {
                id: '12345',
                url: 'https://www.twitter.com/apideck-io',
                type: 'twitter'
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
            emails: [
              {
                id: '123',
                email: 'elon@musk.com',
                type: 'primary'
              }
            ],
            custom_fields: [
              {
                id: '2389328923893298',
                name: 'employee_level',
                description: 'Employee Level',
                value: 'Uses Salesforce and Marketo'
              }
            ],
            tags: ['New'],
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

      const { lead } = apideck
      const params = {} as any
      const current = await lead.leadsAll(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#leadsDelete', () => {
    const endpoint = '/lead/leads/{id}'

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
        resource: 'companies',
        operation: 'one',
        data: {
          id: '12345'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { lead } = apideck
      const params = {
        id: 'id_example'
      } as any
      const current = await lead.leadsDelete(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#leadsOne', () => {
    const endpoint = '/lead/leads/{id}'

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
        resource: 'companies',
        operation: 'one',
        data: {
          id: '12345',
          name: 'Elon Musk',
          company_name: 'Spacex',
          owner_id: '54321',
          company_id: '2',
          contact_id: '2',
          lead_source: 'Cold Call',
          first_name: 'Elon',
          last_name: 'Musk',
          description: 'A thinker',
          prefix: 'Sir',
          title: 'CEO',
          language: 'EN',
          status: 'New',
          monetary_amount: 75000,
          currency: 'USD',
          fax: '+12129876543',
          websites: [
            {
              id: '12345',
              url: 'http://example.com',
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
              city: 'San Francisco',
              state: 'CA',
              postal_code: '94104',
              country: 'US',
              latitude: '40.759211',
              longitude: '-73.984638',
              contact_name: '111-111-1111',
              salutation: '111-111-1111',
              phone_number: '111-111-1111',
              fax: '111-111-1111',
              email: '111-111-1111',
              website: '111-111-1111'
            }
          ],
          social_links: [
            {
              id: '12345',
              url: 'https://www.twitter.com/apideck-io',
              type: 'twitter'
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
          emails: [
            {
              id: '123',
              email: 'elon@musk.com',
              type: 'primary'
            }
          ],
          custom_fields: [
            {
              id: '2389328923893298',
              name: 'employee_level',
              description: 'Employee Level',
              value: 'Uses Salesforce and Marketo'
            }
          ],
          tags: ['New'],
          updated_at: '2020-09-30T07:43:32.000Z',
          created_at: '2020-09-30T07:43:32.000Z'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { lead } = apideck
      const params = {
        id: 'id_example'
      } as any
      const current = await lead.leadsOne(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#leadsUpdate', () => {
    const endpoint = '/lead/leads/{id}'

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
        resource: 'companies',
        operation: 'one',
        data: {
          id: '12345'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { lead } = apideck
      const params = {
        id: 'id_example',
        lead: {
          name: 'Elon Musk',
          company_name: 'Spacex',
          owner_id: '54321',
          company_id: '2',
          contact_id: '2',
          lead_source: 'Cold Call',
          first_name: 'Elon',
          last_name: 'Musk',
          description: 'A thinker',
          prefix: 'Sir',
          title: 'CEO',
          language: 'EN',
          status: 'New',
          monetary_amount: 75000,
          currency: 'USD',
          fax: '+12129876543',
          websites: [
            {
              id: '12345',
              url: 'http://example.com',
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
              city: 'San Francisco',
              state: 'CA',
              postal_code: '94104',
              country: 'US',
              latitude: '40.759211',
              longitude: '-73.984638',
              contact_name: '111-111-1111',
              salutation: '111-111-1111',
              phone_number: '111-111-1111',
              fax: '111-111-1111',
              email: '111-111-1111',
              website: '111-111-1111'
            }
          ],
          social_links: [
            {
              id: '12345',
              url: 'https://www.twitter.com/apideck-io',
              type: 'twitter'
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
          emails: [
            {
              id: '123',
              email: 'elon@musk.com',
              type: 'primary'
            }
          ],
          custom_fields: [
            {
              id: '2389328923893298',
              name: 'employee_level',
              description: 'Employee Level',
              value: 'Uses Salesforce and Marketo'
            }
          ],
          tags: ['New']
        }
      } as any
      const current = await lead.leadsUpdate(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })
})
