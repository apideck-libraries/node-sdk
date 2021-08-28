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

describe('AccountingApi', () => {
  describe('#companiesAdd', () => {
    const endpoint = '/accounting/companies'

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

      const { accounting } = apideck
      const params = {
        company: {
          name: 'SpaceX',
          owner_id: '12345',
          image: 'https://www.spacex.com/static/images/share.jpg',
          description:
            'Space Exploration Technologies Corp. is an American aerospace manufacturer, space transportation services and communications company headquartered in Hawthorne, California.',
          vat_number: 'BE0689615164',
          currency: 'USD',
          status: 'Open',
          fax: '+12129876543',
          annual_revenue: '+$35m',
          number_of_employees: '500-1000',
          industry: 'Apparel',
          ownership: 'Public',
          sales_tax_number: '12456EN',
          payee_number: '78932EN',
          abn_or_tfn: '46 115 614 695',
          abn_branch: '123',
          acn: 'XXX XXX XXX',
          bank_accounts: [
            {
              iban: 'CH2989144532982975332',
              bic: 'AUDSCHGGXXX',
              bsb_number: '062-001',
              bank_code: 'BNH',
              account_number: '123456789',
              account_name: 'SPACEX LLC'
            }
          ],
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
              longitude: '-73.984638'
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
              id: 'custom_technologies',
              value: 'Uses Salesforce and Marketo'
            }
          ],
          tags: ['New'],
          read_only: false
        }
      } as any
      const current = await accounting.companiesAdd(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#companiesAll', () => {
    const endpoint = '/accounting/companies'

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
            name: 'SpaceX',
            interaction_count: 1,
            owner_id: '12345',
            image: 'https://www.spacex.com/static/images/share.jpg',
            description:
              'Space Exploration Technologies Corp. is an American aerospace manufacturer, space transportation services and communications company headquartered in Hawthorne, California.',
            vat_number: 'BE0689615164',
            currency: 'USD',
            status: 'Open',
            fax: '+12129876543',
            annual_revenue: '+$35m',
            number_of_employees: '500-1000',
            industry: 'Apparel',
            ownership: 'Public',
            sales_tax_number: '12456EN',
            payee_number: '78932EN',
            abn_or_tfn: '46 115 614 695',
            abn_branch: '123',
            acn: 'XXX XXX XXX',
            parent_id: '22345',
            bank_accounts: [
              {
                iban: 'CH2989144532982975332',
                bic: 'AUDSCHGGXXX',
                bsb_number: '062-001',
                bank_code: 'BNH',
                account_number: '123456789',
                account_name: 'SPACEX LLC'
              }
            ],
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
                longitude: '-73.984638'
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
                id: 'custom_technologies',
                value: 'Uses Salesforce and Marketo'
              }
            ],
            tags: ['New'],
            read_only: false,
            last_activity_at: '2020-09-30T07:43:32.000Z',
            deleted: false,
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

      const { accounting } = apideck
      const params = {} as any
      const current = await accounting.companiesAll(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#companiesDelete', () => {
    const endpoint = '/accounting/companies/{id}'

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

      const { accounting } = apideck
      const params = {
        id: 'id_example'
      } as any
      const current = await accounting.companiesDelete(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#companiesOne', () => {
    const endpoint = '/accounting/companies/{id}'

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
          name: 'SpaceX',
          interaction_count: 1,
          owner_id: '12345',
          image: 'https://www.spacex.com/static/images/share.jpg',
          description:
            'Space Exploration Technologies Corp. is an American aerospace manufacturer, space transportation services and communications company headquartered in Hawthorne, California.',
          vat_number: 'BE0689615164',
          currency: 'USD',
          status: 'Open',
          fax: '+12129876543',
          annual_revenue: '+$35m',
          number_of_employees: '500-1000',
          industry: 'Apparel',
          ownership: 'Public',
          sales_tax_number: '12456EN',
          payee_number: '78932EN',
          abn_or_tfn: '46 115 614 695',
          abn_branch: '123',
          acn: 'XXX XXX XXX',
          parent_id: '22345',
          bank_accounts: [
            {
              iban: 'CH2989144532982975332',
              bic: 'AUDSCHGGXXX',
              bsb_number: '062-001',
              bank_code: 'BNH',
              account_number: '123456789',
              account_name: 'SPACEX LLC'
            }
          ],
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
              longitude: '-73.984638'
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
              id: 'custom_technologies',
              value: 'Uses Salesforce and Marketo'
            }
          ],
          tags: ['New'],
          read_only: false,
          last_activity_at: '2020-09-30T07:43:32.000Z',
          deleted: false,
          updated_by: '12345',
          created_by: '12345',
          updated_at: '2020-09-30T07:43:32.000Z',
          created_at: '2020-09-30T07:43:32.000Z'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { accounting } = apideck
      const params = {
        id: 'id_example'
      } as any
      const current = await accounting.companiesOne(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#companiesUpdate', () => {
    const endpoint = '/accounting/companies/{id}'

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

      const { accounting } = apideck
      const params = {
        id: 'id_example',
        company: {
          name: 'SpaceX',
          owner_id: '12345',
          image: 'https://www.spacex.com/static/images/share.jpg',
          description:
            'Space Exploration Technologies Corp. is an American aerospace manufacturer, space transportation services and communications company headquartered in Hawthorne, California.',
          vat_number: 'BE0689615164',
          currency: 'USD',
          status: 'Open',
          fax: '+12129876543',
          annual_revenue: '+$35m',
          number_of_employees: '500-1000',
          industry: 'Apparel',
          ownership: 'Public',
          sales_tax_number: '12456EN',
          payee_number: '78932EN',
          abn_or_tfn: '46 115 614 695',
          abn_branch: '123',
          acn: 'XXX XXX XXX',
          bank_accounts: [
            {
              iban: 'CH2989144532982975332',
              bic: 'AUDSCHGGXXX',
              bsb_number: '062-001',
              bank_code: 'BNH',
              account_number: '123456789',
              account_name: 'SPACEX LLC'
            }
          ],
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
              longitude: '-73.984638'
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
              id: 'custom_technologies',
              value: 'Uses Salesforce and Marketo'
            }
          ],
          tags: ['New'],
          read_only: false
        }
      } as any
      const current = await accounting.companiesUpdate(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#contactsAdd', () => {
    const endpoint = '/accounting/contacts'

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

      const { accounting } = apideck
      const params = {
        contact: {
          name: 'Elon Musk',
          owner_id: '54321',
          type: 'personal',
          company_id: '23456',
          company_name: '23456',
          lead_id: '34567',
          first_name: 'Elon',
          middle_name: 'D.',
          last_name: 'Musk',
          prefix: 'Mr.',
          suffix: 'PhD',
          title: 'CEO',
          department: 'Engineering',
          language: 'EN',
          gender: 'female',
          birthday: '2000-08-12',
          image: 'https://unavatar.io/elon-musk',
          lead_source: 'Cold Call',
          fax: '+12129876543',
          description: 'Internal champion',
          current_balance: 10.5,
          status: 'open',
          active: true,
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
              longitude: '-73.984638'
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
              id: 'custom_technologies',
              value: 'Uses Salesforce and Marketo'
            }
          ],
          tags: ['New']
        }
      } as any
      const current = await accounting.contactsAdd(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#contactsAll', () => {
    const endpoint = '/accounting/contacts'

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
            owner_id: '54321',
            type: 'personal',
            company_id: '23456',
            company_name: '23456',
            lead_id: '34567',
            first_name: 'Elon',
            middle_name: 'D.',
            last_name: 'Musk',
            prefix: 'Mr.',
            suffix: 'PhD',
            title: 'CEO',
            department: 'Engineering',
            language: 'EN',
            gender: 'female',
            birthday: '2000-08-12',
            image: 'https://unavatar.io/elon-musk',
            lead_source: 'Cold Call',
            fax: '+12129876543',
            description: 'Internal champion',
            current_balance: 10.5,
            status: 'open',
            active: true,
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
                longitude: '-73.984638'
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
                id: 'custom_technologies',
                value: 'Uses Salesforce and Marketo'
              }
            ],
            tags: ['New'],
            first_call_at: '2020-09-30T07:43:32.000Z',
            first_email_at: '2020-09-30T07:43:32.000Z',
            last_activity_at: '2020-09-30T07:43:32.000Z',
            updated_at: '2017-08-12T20:43:21.291Z',
            created_at: '2017-08-12T20:43:21.291Z'
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

      const { accounting } = apideck
      const params = {} as any
      const current = await accounting.contactsAll(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#contactsDelete', () => {
    const endpoint = '/accounting/contacts/{id}'

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

      const { accounting } = apideck
      const params = {
        id: 'id_example'
      } as any
      const current = await accounting.contactsDelete(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#contactsOne', () => {
    const endpoint = '/accounting/contacts/{id}'

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
          owner_id: '54321',
          type: 'personal',
          company_id: '23456',
          company_name: '23456',
          lead_id: '34567',
          first_name: 'Elon',
          middle_name: 'D.',
          last_name: 'Musk',
          prefix: 'Mr.',
          suffix: 'PhD',
          title: 'CEO',
          department: 'Engineering',
          language: 'EN',
          gender: 'female',
          birthday: '2000-08-12',
          image: 'https://unavatar.io/elon-musk',
          lead_source: 'Cold Call',
          fax: '+12129876543',
          description: 'Internal champion',
          current_balance: 10.5,
          status: 'open',
          active: true,
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
              longitude: '-73.984638'
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
              id: 'custom_technologies',
              value: 'Uses Salesforce and Marketo'
            }
          ],
          tags: ['New'],
          first_call_at: '2020-09-30T07:43:32.000Z',
          first_email_at: '2020-09-30T07:43:32.000Z',
          last_activity_at: '2020-09-30T07:43:32.000Z',
          updated_at: '2017-08-12T20:43:21.291Z',
          created_at: '2017-08-12T20:43:21.291Z'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { accounting } = apideck
      const params = {
        id: 'id_example'
      } as any
      const current = await accounting.contactsOne(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#contactsUpdate', () => {
    const endpoint = '/accounting/contacts/{id}'

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

      const { accounting } = apideck
      const params = {
        id: 'id_example',
        contact: {
          name: 'Elon Musk',
          owner_id: '54321',
          type: 'personal',
          company_id: '23456',
          company_name: '23456',
          lead_id: '34567',
          first_name: 'Elon',
          middle_name: 'D.',
          last_name: 'Musk',
          prefix: 'Mr.',
          suffix: 'PhD',
          title: 'CEO',
          department: 'Engineering',
          language: 'EN',
          gender: 'female',
          birthday: '2000-08-12',
          image: 'https://unavatar.io/elon-musk',
          lead_source: 'Cold Call',
          fax: '+12129876543',
          description: 'Internal champion',
          current_balance: 10.5,
          status: 'open',
          active: true,
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
              longitude: '-73.984638'
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
              id: 'custom_technologies',
              value: 'Uses Salesforce and Marketo'
            }
          ],
          tags: ['New']
        }
      } as any
      const current = await accounting.contactsUpdate(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#invoicesAdd', () => {
    const endpoint = '/accounting/invoices'

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
        resource: 'Invoices',
        operation: 'one',
        data: {
          id: '12345'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { accounting } = apideck
      const params = {
        invoice: {
          type: 'Service',
          number: 'OIT00546',
          customer: {
            company_name: 'The boring company'
          },
          date: '2020-09-30',
          due_date: '2020-10-30',
          po_number: '90000117',
          status: 'paid',
          currency: 'USD',
          sub_total: 27500,
          total_tax: 1000,
          total: 28500,
          balance: 26500,
          deposit: 2000,
          customer_memo: 'Thank you for your business and have a great day!',
          line_items: [
            {
              line_number: 1,
              description: 'Rock Fountain',
              type: 'Transaction',
              tax_amount: 27500,
              total_amount: 27500,
              quantity: 2,
              unit_price: 27500,
              discount_percentage: 15,
              item_id: 12344,
              tax_rate: {
                code: 'N-T'
              },
              general_ledger_account: {
                name: 'Bank account'
              }
            }
          ],
          billing_address: {
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
            longitude: '-73.984638'
          },
          shipping_address: {
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
            longitude: '-73.984638'
          }
        }
      } as any
      const current = await accounting.invoicesAdd(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#invoicesAll', () => {
    const endpoint = '/accounting/invoices'

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
        resource: 'Invoices',
        operation: 'one',
        data: [
          {
            id: '12345',
            type: 'Service',
            number: 'OIT00546',
            customer: {
              id: '12345',
              company_name: 'The boring company'
            },
            date: '2020-09-30',
            due_date: '2020-10-30',
            po_number: '90000117',
            status: 'paid',
            currency: 'USD',
            sub_total: 27500,
            total_tax: 1000,
            total: 28500,
            balance: 26500,
            deposit: 2000,
            customer_memo: 'Thank you for your business and have a great day!',
            line_items: [
              {
                id: '12345',
                line_number: 1,
                description: 'Rock Fountain',
                type: 'Transaction',
                tax_amount: 27500,
                total_amount: 27500,
                quantity: 2,
                unit_price: 27500,
                discount_percentage: 15,
                item_id: 12344,
                tax_rate: {
                  id: '12345',
                  code: 'N-T'
                },
                general_ledger_account: {
                  id: '12345',
                  name: 'Bank account'
                }
              }
            ],
            billing_address: {
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
              longitude: '-73.984638'
            },
            shipping_address: {
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
              longitude: '-73.984638'
            },
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

      const { accounting } = apideck
      const params = {} as any
      const current = await accounting.invoicesAll(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#invoicesDelete', () => {
    const endpoint = '/accounting/invoices/{id}'

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
        resource: 'Invoices',
        operation: 'one',
        data: {
          id: '12345'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { accounting } = apideck
      const params = {
        id: 'id_example'
      } as any
      const current = await accounting.invoicesDelete(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#invoicesOne', () => {
    const endpoint = '/accounting/invoices/{id}'

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
        resource: 'Invoices',
        operation: 'one',
        data: {
          id: '12345',
          type: 'Service',
          number: 'OIT00546',
          customer: {
            id: '12345',
            company_name: 'The boring company'
          },
          date: '2020-09-30',
          due_date: '2020-10-30',
          po_number: '90000117',
          status: 'paid',
          currency: 'USD',
          sub_total: 27500,
          total_tax: 1000,
          total: 28500,
          balance: 26500,
          deposit: 2000,
          customer_memo: 'Thank you for your business and have a great day!',
          line_items: [
            {
              id: '12345',
              line_number: 1,
              description: 'Rock Fountain',
              type: 'Transaction',
              tax_amount: 27500,
              total_amount: 27500,
              quantity: 2,
              unit_price: 27500,
              discount_percentage: 15,
              item_id: 12344,
              tax_rate: {
                id: '12345',
                code: 'N-T'
              },
              general_ledger_account: {
                id: '12345',
                name: 'Bank account'
              }
            }
          ],
          billing_address: {
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
            longitude: '-73.984638'
          },
          shipping_address: {
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
            longitude: '-73.984638'
          },
          updated_by: '12345',
          created_by: '12345',
          updated_at: '2020-09-30T07:43:32.000Z',
          created_at: '2020-09-30T07:43:32.000Z'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { accounting } = apideck
      const params = {
        id: 'id_example'
      } as any
      const current = await accounting.invoicesOne(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#invoicesUpdate', () => {
    const endpoint = '/accounting/invoices/{id}'

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
        resource: 'Invoices',
        operation: 'one',
        data: {
          id: '12345'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { accounting } = apideck
      const params = {
        id: 'id_example',
        invoice: {
          type: 'Service',
          number: 'OIT00546',
          customer: {
            company_name: 'The boring company'
          },
          date: '2020-09-30',
          due_date: '2020-10-30',
          po_number: '90000117',
          status: 'paid',
          currency: 'USD',
          sub_total: 27500,
          total_tax: 1000,
          total: 28500,
          balance: 26500,
          deposit: 2000,
          customer_memo: 'Thank you for your business and have a great day!',
          line_items: [
            {
              line_number: 1,
              description: 'Rock Fountain',
              type: 'Transaction',
              tax_amount: 27500,
              total_amount: 27500,
              quantity: 2,
              unit_price: 27500,
              discount_percentage: 15,
              item_id: 12344,
              tax_rate: {
                code: 'N-T'
              },
              general_ledger_account: {
                name: 'Bank account'
              }
            }
          ],
          billing_address: {
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
            longitude: '-73.984638'
          },
          shipping_address: {
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
            longitude: '-73.984638'
          }
        }
      } as any
      const current = await accounting.invoicesUpdate(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#ledgerAccountsAdd', () => {
    const endpoint = '/accounting/ledger-accounts'

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
        resource: 'LedgerAccounts',
        operation: 'one',
        data: {
          id: '12345'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { accounting } = apideck
      const params = {
        ledgerAccount: {
          nominal_code: '091',
          classification: 'asset',
          type: 'bank',
          sub_type: 'CHECKING_ACCOUNT',
          name: 'Bank account',
          fully_qualified_name: 'Asset.Bank.Checking_Account',
          description: 'Main checking account',
          opening_balance: 75000,
          current_balance: 20000,
          currency: 'USD',
          tax_type: 'USD',
          tax_rate: {
            code: 'N-T'
          },
          level: 2,
          active: true,
          header: true,
          bank_account: {
            iban: 'CH2989144532982975332',
            bic: 'AUDSCHGGXXX',
            bsb_number: '062-001',
            bank_code: 'BNH',
            account_number: '123456789',
            account_name: 'SPACEX LLC'
          },
          sub_account: true
        }
      } as any
      const current = await accounting.ledgerAccountsAdd(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#ledgerAccountsAll', () => {
    const endpoint = '/accounting/ledger-accounts'

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
        resource: 'LedgerAccounts',
        operation: 'one',
        data: [
          {
            id: '12345',
            display_id: '1-12345',
            nominal_code: '091',
            classification: 'asset',
            type: 'bank',
            sub_type: 'CHECKING_ACCOUNT',
            name: 'Bank account',
            fully_qualified_name: 'Asset.Bank.Checking_Account',
            description: 'Main checking account',
            opening_balance: 75000,
            current_balance: 20000,
            currency: 'USD',
            tax_type: 'USD',
            tax_rate: {
              id: '12345',
              code: 'N-T'
            },
            level: 2,
            active: true,
            header: true,
            bank_account: {
              iban: 'CH2989144532982975332',
              bic: 'AUDSCHGGXXX',
              bsb_number: '062-001',
              bank_code: 'BNH',
              account_number: '123456789',
              account_name: 'SPACEX LLC'
            },
            parent_account: {
              id: '12345',
              name: 'Bank Accounts',
              display_id: '1-1100'
            },
            sub_account: true,
            sub_accounts: [
              {
                id: '12345',
                account_sub_name: 'Petty Cash'
              }
            ],
            last_reconciliation_date: '2020-09-30',
            row_version: '1-12345',
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

      const { accounting } = apideck
      const params = {} as any
      const current = await accounting.ledgerAccountsAll(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#ledgerAccountsDelete', () => {
    const endpoint = '/accounting/ledger-accounts/{id}'

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
        resource: 'LedgerAccounts',
        operation: 'one',
        data: {
          id: '12345'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { accounting } = apideck
      const params = {
        id: 'id_example'
      } as any
      const current = await accounting.ledgerAccountsDelete(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#ledgerAccountsOne', () => {
    const endpoint = '/accounting/ledger-accounts/{id}'

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
        resource: 'LedgerAccounts',
        operation: 'one',
        data: {
          id: '12345',
          display_id: '1-12345',
          nominal_code: '091',
          classification: 'asset',
          type: 'bank',
          sub_type: 'CHECKING_ACCOUNT',
          name: 'Bank account',
          fully_qualified_name: 'Asset.Bank.Checking_Account',
          description: 'Main checking account',
          opening_balance: 75000,
          current_balance: 20000,
          currency: 'USD',
          tax_type: 'USD',
          tax_rate: {
            id: '12345',
            code: 'N-T'
          },
          level: 2,
          active: true,
          header: true,
          bank_account: {
            iban: 'CH2989144532982975332',
            bic: 'AUDSCHGGXXX',
            bsb_number: '062-001',
            bank_code: 'BNH',
            account_number: '123456789',
            account_name: 'SPACEX LLC'
          },
          parent_account: {
            id: '12345',
            name: 'Bank Accounts',
            display_id: '1-1100'
          },
          sub_account: true,
          sub_accounts: [
            {
              id: '12345',
              account_sub_name: 'Petty Cash'
            }
          ],
          last_reconciliation_date: '2020-09-30',
          row_version: '1-12345',
          updated_by: '12345',
          created_by: '12345',
          updated_at: '2020-09-30T07:43:32.000Z',
          created_at: '2020-09-30T07:43:32.000Z'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { accounting } = apideck
      const params = {
        id: 'id_example'
      } as any
      const current = await accounting.ledgerAccountsOne(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#ledgerAccountsUpdate', () => {
    const endpoint = '/accounting/ledger-accounts/{id}'

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
        resource: 'LedgerAccounts',
        operation: 'one',
        data: {
          id: '12345'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { accounting } = apideck
      const params = {
        id: 'id_example',
        ledgerAccount: {
          nominal_code: '091',
          classification: 'asset',
          type: 'bank',
          sub_type: 'CHECKING_ACCOUNT',
          name: 'Bank account',
          fully_qualified_name: 'Asset.Bank.Checking_Account',
          description: 'Main checking account',
          opening_balance: 75000,
          current_balance: 20000,
          currency: 'USD',
          tax_type: 'USD',
          tax_rate: {
            code: 'N-T'
          },
          level: 2,
          active: true,
          header: true,
          bank_account: {
            iban: 'CH2989144532982975332',
            bic: 'AUDSCHGGXXX',
            bsb_number: '062-001',
            bank_code: 'BNH',
            account_number: '123456789',
            account_name: 'SPACEX LLC'
          },
          sub_account: true
        }
      } as any
      const current = await accounting.ledgerAccountsUpdate(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#taxRatesAdd', () => {
    const endpoint = '/accounting/tax-rates'

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
        resource: 'TaxRates',
        operation: 'one',
        data: {
          id: '12345'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { accounting } = apideck
      const params = {
        taxRate: {
          name: '15% GST on Expenses',
          code: 'ABN',
          description: 'No ABN Withholding',
          effective_tax_rate: 10,
          total_tax_rate: 10,
          components: [
            {
              name: 'City tax',
              rate: 10,
              compound: true
            }
          ],
          special_tax_type: 'NONE',
          original_tax_rate_id: '12345',
          active: true
        }
      } as any
      const current = await accounting.taxRatesAdd(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#taxRatesAll', () => {
    const endpoint = '/accounting/tax-rates'

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
        resource: 'TaxRates',
        operation: 'one',
        data: [
          {
            id: '12345',
            name: '15% GST on Expenses',
            code: 'ABN',
            description: 'No ABN Withholding',
            effective_tax_rate: 10,
            total_tax_rate: 10,
            components: [
              {
                name: 'City tax',
                rate: 10,
                compound: true
              }
            ],
            special_tax_type: 'NONE',
            original_tax_rate_id: '12345',
            active: true,
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

      const { accounting } = apideck
      const params = {} as any
      const current = await accounting.taxRatesAll(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#taxRatesDelete', () => {
    const endpoint = '/accounting/tax-rates/{id}'

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
        resource: 'TaxRates',
        operation: 'one',
        data: {
          id: '12345'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { accounting } = apideck
      const params = {
        id: 'id_example'
      } as any
      const current = await accounting.taxRatesDelete(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#taxRatesOne', () => {
    const endpoint = '/accounting/tax-rates/{id}'

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
        resource: 'TaxRates',
        operation: 'one',
        data: {
          id: '12345',
          name: '15% GST on Expenses',
          code: 'ABN',
          description: 'No ABN Withholding',
          effective_tax_rate: 10,
          total_tax_rate: 10,
          components: [
            {
              name: 'City tax',
              rate: 10,
              compound: true
            }
          ],
          special_tax_type: 'NONE',
          original_tax_rate_id: '12345',
          active: true,
          updated_by: '12345',
          created_by: '12345',
          updated_at: '2020-09-30T07:43:32.000Z',
          created_at: '2020-09-30T07:43:32.000Z'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { accounting } = apideck
      const params = {
        id: 'id_example'
      } as any
      const current = await accounting.taxRatesOne(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#taxRatesUpdate', () => {
    const endpoint = '/accounting/tax-rates/{id}'

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
        resource: 'TaxRates',
        operation: 'one',
        data: {
          id: '12345'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { accounting } = apideck
      const params = {
        id: 'id_example',
        taxRate: {
          name: '15% GST on Expenses',
          code: 'ABN',
          description: 'No ABN Withholding',
          effective_tax_rate: 10,
          total_tax_rate: 10,
          components: [
            {
              name: 'City tax',
              rate: 10,
              compound: true
            }
          ],
          special_tax_type: 'NONE',
          original_tax_rate_id: '12345',
          active: true
        }
      } as any
      const current = await accounting.taxRatesUpdate(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })
})
