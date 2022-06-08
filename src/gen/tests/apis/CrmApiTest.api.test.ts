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

describe('CrmApi', () => {
  describe('#activitiesAdd', () => {
    const endpoint = '/crm/activities'

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
        resource: 'activities',
        operation: 'one',
        data: {
          id: '12345'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { crm } = apideck
      const params = {
        activity: {
          activity_datetime: '2021-05-01T12:00:00.000Z',
          duration_seconds: 1800,
          user_id: '12345',
          account_id: '12345',
          contact_id: '12345',
          company_id: '12345',
          opportunity_id: '12345',
          lead_id: '12345',
          owner_id: '12345',
          campaign_id: '12345',
          case_id: '12345',
          asset_id: '12345',
          contract_id: '12345',
          product_id: '12345',
          solution_id: '12345',
          custom_object_id: '12345',
          type: 'meeting',
          title: 'Meeting',
          description: 'More info about the meeting',
          note: 'An internal note about the meeting',
          location: 'Space',
          location_address: {
            id: '123',
            type: 'primary',
            string: '25 Spring Street, Blackburn, VIC 3130',
            name: 'HQ US',
            line1: 'Main street',
            line2: 'apt #',
            line3: 'Suite #',
            line4: 'delivery instructions',
            street_number: '25',
            city: 'San Francisco',
            state: 'CA',
            postal_code: '94104',
            country: 'US',
            latitude: 40.759211,
            longitude: '-73.984638',
            county: 'Santa Clara',
            contact_name: 'Elon Musk',
            salutation: 'Mr',
            phone_number: '111-111-1111',
            fax: '122-111-1111',
            email: 'elon@musk.com',
            website: 'https://elonmusk.com',
            row_version: '1-12345'
          },
          all_day_event: false,
          private: true,
          group_event: true,
          event_sub_type: 'debrief',
          group_event_type: 'Proposed',
          child: false,
          archived: false,
          deleted: false,
          show_as: 'busy',
          done: false,
          start_datetime: '2021-05-01T12:00:00.000Z',
          end_datetime: '2021-05-01T12:30:00.000Z',
          activity_date: '2021-05-01',
          end_date: '2021-05-01',
          recurrent: false,
          reminder_datetime: '2021-05-01T17:00:00.000Z',
          reminder_set: false,
          video_conference_url: 'https://us02web.zoom.us/j/88120759396',
          video_conference_id: 'zoom:88120759396',
          custom_fields: [
            {
              id: 2389328923893298,
              name: 'employee_level',
              description: 'Employee Level',
              value: 'Uses Salesforce and Marketo'
            }
          ],
          attendees: [
            {
              name: 'Elon Musk',
              first_name: 'Elon',
              middle_name: 'D.',
              last_name: 'Musk',
              prefix: 'Mr.',
              suffix: 'PhD',
              email_address: 'elon@musk.com',
              is_organizer: true,
              status: 'accepted'
            }
          ]
        }
      } as any
      const current = await crm.activitiesAdd(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#activitiesAll', () => {
    const endpoint = '/crm/activities'

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
        resource: 'activities',
        operation: 'one',
        data: [
          {
            id: '12345',
            downstream_id: '12345',
            activity_datetime: '2021-05-01T12:00:00.000Z',
            duration_seconds: 1800,
            user_id: '12345',
            account_id: '12345',
            contact_id: '12345',
            company_id: '12345',
            opportunity_id: '12345',
            lead_id: '12345',
            owner_id: '12345',
            campaign_id: '12345',
            case_id: '12345',
            asset_id: '12345',
            contract_id: '12345',
            product_id: '12345',
            solution_id: '12345',
            custom_object_id: '12345',
            type: 'meeting',
            title: 'Meeting',
            description: 'More info about the meeting',
            note: 'An internal note about the meeting',
            location: 'Space',
            location_address: {
              id: '123',
              type: 'primary',
              string: '25 Spring Street, Blackburn, VIC 3130',
              name: 'HQ US',
              line1: 'Main street',
              line2: 'apt #',
              line3: 'Suite #',
              line4: 'delivery instructions',
              street_number: '25',
              city: 'San Francisco',
              state: 'CA',
              postal_code: '94104',
              country: 'US',
              latitude: 40.759211,
              longitude: '-73.984638',
              county: 'Santa Clara',
              contact_name: 'Elon Musk',
              salutation: 'Mr',
              phone_number: '111-111-1111',
              fax: '122-111-1111',
              email: 'elon@musk.com',
              website: 'https://elonmusk.com',
              row_version: '1-12345'
            },
            all_day_event: false,
            private: true,
            group_event: true,
            event_sub_type: 'debrief',
            group_event_type: 'Proposed',
            child: false,
            archived: false,
            deleted: false,
            show_as: 'busy',
            done: false,
            start_datetime: '2021-05-01T12:00:00.000Z',
            end_datetime: '2021-05-01T12:30:00.000Z',
            duration_minutes: 30,
            activity_date: '2021-05-01',
            end_date: '2021-05-01',
            recurrent: false,
            reminder_datetime: '2021-05-01T17:00:00.000Z',
            reminder_set: false,
            video_conference_url: 'https://us02web.zoom.us/j/88120759396',
            video_conference_id: 'zoom:88120759396',
            custom_fields: [
              {
                id: 2389328923893298,
                name: 'employee_level',
                description: 'Employee Level',
                value: 'Uses Salesforce and Marketo'
              }
            ],
            attendees: [
              {
                id: '12345',
                name: 'Elon Musk',
                first_name: 'Elon',
                middle_name: 'D.',
                last_name: 'Musk',
                prefix: 'Mr.',
                suffix: 'PhD',
                email_address: 'elon@musk.com',
                is_organizer: true,
                status: 'accepted',
                user_id: '12345',
                contact_id: '12345',
                updated_at: '2017-08-12T20:43:21.291Z',
                created_at: '2017-08-12T20:43:21.291Z'
              }
            ],
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

      const { crm } = apideck
      const params = {} as any
      const current = await crm.activitiesAll(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#activitiesDelete', () => {
    const endpoint = '/crm/activities/{id}'

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
        resource: 'activities',
        operation: 'one',
        data: {
          id: '12345'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { crm } = apideck
      const params = {
        id: 'id_example'
      } as any
      const current = await crm.activitiesDelete(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#activitiesOne', () => {
    const endpoint = '/crm/activities/{id}'

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
        resource: 'activities',
        operation: 'one',
        data: {
          id: '12345',
          downstream_id: '12345',
          activity_datetime: '2021-05-01T12:00:00.000Z',
          duration_seconds: 1800,
          user_id: '12345',
          account_id: '12345',
          contact_id: '12345',
          company_id: '12345',
          opportunity_id: '12345',
          lead_id: '12345',
          owner_id: '12345',
          campaign_id: '12345',
          case_id: '12345',
          asset_id: '12345',
          contract_id: '12345',
          product_id: '12345',
          solution_id: '12345',
          custom_object_id: '12345',
          type: 'meeting',
          title: 'Meeting',
          description: 'More info about the meeting',
          note: 'An internal note about the meeting',
          location: 'Space',
          location_address: {
            id: '123',
            type: 'primary',
            string: '25 Spring Street, Blackburn, VIC 3130',
            name: 'HQ US',
            line1: 'Main street',
            line2: 'apt #',
            line3: 'Suite #',
            line4: 'delivery instructions',
            street_number: '25',
            city: 'San Francisco',
            state: 'CA',
            postal_code: '94104',
            country: 'US',
            latitude: 40.759211,
            longitude: '-73.984638',
            county: 'Santa Clara',
            contact_name: 'Elon Musk',
            salutation: 'Mr',
            phone_number: '111-111-1111',
            fax: '122-111-1111',
            email: 'elon@musk.com',
            website: 'https://elonmusk.com',
            row_version: '1-12345'
          },
          all_day_event: false,
          private: true,
          group_event: true,
          event_sub_type: 'debrief',
          group_event_type: 'Proposed',
          child: false,
          archived: false,
          deleted: false,
          show_as: 'busy',
          done: false,
          start_datetime: '2021-05-01T12:00:00.000Z',
          end_datetime: '2021-05-01T12:30:00.000Z',
          duration_minutes: 30,
          activity_date: '2021-05-01',
          end_date: '2021-05-01',
          recurrent: false,
          reminder_datetime: '2021-05-01T17:00:00.000Z',
          reminder_set: false,
          video_conference_url: 'https://us02web.zoom.us/j/88120759396',
          video_conference_id: 'zoom:88120759396',
          custom_fields: [
            {
              id: 2389328923893298,
              name: 'employee_level',
              description: 'Employee Level',
              value: 'Uses Salesforce and Marketo'
            }
          ],
          attendees: [
            {
              id: '12345',
              name: 'Elon Musk',
              first_name: 'Elon',
              middle_name: 'D.',
              last_name: 'Musk',
              prefix: 'Mr.',
              suffix: 'PhD',
              email_address: 'elon@musk.com',
              is_organizer: true,
              status: 'accepted',
              user_id: '12345',
              contact_id: '12345',
              updated_at: '2017-08-12T20:43:21.291Z',
              created_at: '2017-08-12T20:43:21.291Z'
            }
          ],
          updated_by: '12345',
          created_by: '12345',
          updated_at: '2020-09-30T07:43:32.000Z',
          created_at: '2020-09-30T07:43:32.000Z'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { crm } = apideck
      const params = {
        id: 'id_example'
      } as any
      const current = await crm.activitiesOne(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#activitiesUpdate', () => {
    const endpoint = '/crm/activities/{id}'

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
        resource: 'activities',
        operation: 'one',
        data: {
          id: '12345'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { crm } = apideck
      const params = {
        id: 'id_example',
        activity: {
          activity_datetime: '2021-05-01T12:00:00.000Z',
          duration_seconds: 1800,
          user_id: '12345',
          account_id: '12345',
          contact_id: '12345',
          company_id: '12345',
          opportunity_id: '12345',
          lead_id: '12345',
          owner_id: '12345',
          campaign_id: '12345',
          case_id: '12345',
          asset_id: '12345',
          contract_id: '12345',
          product_id: '12345',
          solution_id: '12345',
          custom_object_id: '12345',
          type: 'meeting',
          title: 'Meeting',
          description: 'More info about the meeting',
          note: 'An internal note about the meeting',
          location: 'Space',
          location_address: {
            id: '123',
            type: 'primary',
            string: '25 Spring Street, Blackburn, VIC 3130',
            name: 'HQ US',
            line1: 'Main street',
            line2: 'apt #',
            line3: 'Suite #',
            line4: 'delivery instructions',
            street_number: '25',
            city: 'San Francisco',
            state: 'CA',
            postal_code: '94104',
            country: 'US',
            latitude: 40.759211,
            longitude: '-73.984638',
            county: 'Santa Clara',
            contact_name: 'Elon Musk',
            salutation: 'Mr',
            phone_number: '111-111-1111',
            fax: '122-111-1111',
            email: 'elon@musk.com',
            website: 'https://elonmusk.com',
            row_version: '1-12345'
          },
          all_day_event: false,
          private: true,
          group_event: true,
          event_sub_type: 'debrief',
          group_event_type: 'Proposed',
          child: false,
          archived: false,
          deleted: false,
          show_as: 'busy',
          done: false,
          start_datetime: '2021-05-01T12:00:00.000Z',
          end_datetime: '2021-05-01T12:30:00.000Z',
          activity_date: '2021-05-01',
          end_date: '2021-05-01',
          recurrent: false,
          reminder_datetime: '2021-05-01T17:00:00.000Z',
          reminder_set: false,
          video_conference_url: 'https://us02web.zoom.us/j/88120759396',
          video_conference_id: 'zoom:88120759396',
          custom_fields: [
            {
              id: 2389328923893298,
              name: 'employee_level',
              description: 'Employee Level',
              value: 'Uses Salesforce and Marketo'
            }
          ],
          attendees: [
            {
              name: 'Elon Musk',
              first_name: 'Elon',
              middle_name: 'D.',
              last_name: 'Musk',
              prefix: 'Mr.',
              suffix: 'PhD',
              email_address: 'elon@musk.com',
              is_organizer: true,
              status: 'accepted'
            }
          ]
        }
      } as any
      const current = await crm.activitiesUpdate(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#companiesAdd', () => {
    const endpoint = '/crm/companies'

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

      const { crm } = apideck
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
          first_name: 'Elon',
          last_name: 'Musk',
          bank_accounts: [
            {
              iban: 'CH2989144532982975332',
              bic: 'AUDSCHGGXXX',
              bsb_number: '062-001',
              branch_identifier: '001',
              bank_code: 'BNH',
              account_number: '123465',
              account_name: 'SPACEX LLC',
              account_type: 'credit_card',
              currency: 'USD'
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
              line3: 'Suite #',
              line4: 'delivery instructions',
              street_number: '25',
              city: 'San Francisco',
              state: 'CA',
              postal_code: '94104',
              country: 'US',
              latitude: 40.759211,
              longitude: '-73.984638',
              county: 'Santa Clara',
              contact_name: 'Elon Musk',
              salutation: 'Mr',
              phone_number: '111-111-1111',
              fax: '122-111-1111',
              email: 'elon@musk.com',
              website: 'https://elonmusk.com',
              row_version: '1-12345'
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
              extension: '105',
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
          row_type: {
            id: '12345',
            name: 'Customer Account'
          },
          custom_fields: [
            {
              id: 2389328923893298,
              name: 'employee_level',
              description: 'Employee Level',
              value: 'Uses Salesforce and Marketo'
            }
          ],
          tags: ['New'],
          read_only: false
        }
      } as any
      const current = await crm.companiesAdd(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#companiesAll', () => {
    const endpoint = '/crm/companies'

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
            first_name: 'Elon',
            last_name: 'Musk',
            parent_id: '22345',
            bank_accounts: [
              {
                iban: 'CH2989144532982975332',
                bic: 'AUDSCHGGXXX',
                bsb_number: '062-001',
                branch_identifier: '001',
                bank_code: 'BNH',
                account_number: '123465',
                account_name: 'SPACEX LLC',
                account_type: 'credit_card',
                currency: 'USD'
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
                line3: 'Suite #',
                line4: 'delivery instructions',
                street_number: '25',
                city: 'San Francisco',
                state: 'CA',
                postal_code: '94104',
                country: 'US',
                latitude: 40.759211,
                longitude: '-73.984638',
                county: 'Santa Clara',
                contact_name: 'Elon Musk',
                salutation: 'Mr',
                phone_number: '111-111-1111',
                fax: '122-111-1111',
                email: 'elon@musk.com',
                website: 'https://elonmusk.com',
                row_version: '1-12345'
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
                extension: '105',
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
            row_type: {
              id: '12345',
              name: 'Customer Account'
            },
            custom_fields: [
              {
                id: 2389328923893298,
                name: 'employee_level',
                description: 'Employee Level',
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

      const { crm } = apideck
      const params = {} as any
      const current = await crm.companiesAll(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#companiesDelete', () => {
    const endpoint = '/crm/companies/{id}'

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

      const { crm } = apideck
      const params = {
        id: 'id_example'
      } as any
      const current = await crm.companiesDelete(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#companiesOne', () => {
    const endpoint = '/crm/companies/{id}'

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
          first_name: 'Elon',
          last_name: 'Musk',
          parent_id: '22345',
          bank_accounts: [
            {
              iban: 'CH2989144532982975332',
              bic: 'AUDSCHGGXXX',
              bsb_number: '062-001',
              branch_identifier: '001',
              bank_code: 'BNH',
              account_number: '123465',
              account_name: 'SPACEX LLC',
              account_type: 'credit_card',
              currency: 'USD'
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
              line3: 'Suite #',
              line4: 'delivery instructions',
              street_number: '25',
              city: 'San Francisco',
              state: 'CA',
              postal_code: '94104',
              country: 'US',
              latitude: 40.759211,
              longitude: '-73.984638',
              county: 'Santa Clara',
              contact_name: 'Elon Musk',
              salutation: 'Mr',
              phone_number: '111-111-1111',
              fax: '122-111-1111',
              email: 'elon@musk.com',
              website: 'https://elonmusk.com',
              row_version: '1-12345'
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
              extension: '105',
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
          row_type: {
            id: '12345',
            name: 'Customer Account'
          },
          custom_fields: [
            {
              id: 2389328923893298,
              name: 'employee_level',
              description: 'Employee Level',
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

      const { crm } = apideck
      const params = {
        id: 'id_example'
      } as any
      const current = await crm.companiesOne(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#companiesUpdate', () => {
    const endpoint = '/crm/companies/{id}'

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

      const { crm } = apideck
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
          first_name: 'Elon',
          last_name: 'Musk',
          bank_accounts: [
            {
              iban: 'CH2989144532982975332',
              bic: 'AUDSCHGGXXX',
              bsb_number: '062-001',
              branch_identifier: '001',
              bank_code: 'BNH',
              account_number: '123465',
              account_name: 'SPACEX LLC',
              account_type: 'credit_card',
              currency: 'USD'
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
              line3: 'Suite #',
              line4: 'delivery instructions',
              street_number: '25',
              city: 'San Francisco',
              state: 'CA',
              postal_code: '94104',
              country: 'US',
              latitude: 40.759211,
              longitude: '-73.984638',
              county: 'Santa Clara',
              contact_name: 'Elon Musk',
              salutation: 'Mr',
              phone_number: '111-111-1111',
              fax: '122-111-1111',
              email: 'elon@musk.com',
              website: 'https://elonmusk.com',
              row_version: '1-12345'
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
              extension: '105',
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
          row_type: {
            id: '12345',
            name: 'Customer Account'
          },
          custom_fields: [
            {
              id: 2389328923893298,
              name: 'employee_level',
              description: 'Employee Level',
              value: 'Uses Salesforce and Marketo'
            }
          ],
          tags: ['New'],
          read_only: false
        }
      } as any
      const current = await crm.companiesUpdate(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#contactsAdd', () => {
    const endpoint = '/crm/contacts'

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

      const { crm } = apideck
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
          photo_url: 'https://unavatar.io/elon-musk',
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
              line3: 'Suite #',
              line4: 'delivery instructions',
              street_number: '25',
              city: 'San Francisco',
              state: 'CA',
              postal_code: '94104',
              country: 'US',
              latitude: 40.759211,
              longitude: '-73.984638',
              county: 'Santa Clara',
              contact_name: 'Elon Musk',
              salutation: 'Mr',
              phone_number: '111-111-1111',
              fax: '122-111-1111',
              email: 'elon@musk.com',
              website: 'https://elonmusk.com',
              row_version: '1-12345'
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
              extension: '105',
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
              id: 2389328923893298,
              name: 'employee_level',
              description: 'Employee Level',
              value: 'Uses Salesforce and Marketo'
            }
          ],
          tags: ['New']
        }
      } as any
      const current = await crm.contactsAdd(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#contactsAll', () => {
    const endpoint = '/crm/contacts'

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
            photo_url: 'https://unavatar.io/elon-musk',
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
                line3: 'Suite #',
                line4: 'delivery instructions',
                street_number: '25',
                city: 'San Francisco',
                state: 'CA',
                postal_code: '94104',
                country: 'US',
                latitude: 40.759211,
                longitude: '-73.984638',
                county: 'Santa Clara',
                contact_name: 'Elon Musk',
                salutation: 'Mr',
                phone_number: '111-111-1111',
                fax: '122-111-1111',
                email: 'elon@musk.com',
                website: 'https://elonmusk.com',
                row_version: '1-12345'
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
                extension: '105',
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
                id: 2389328923893298,
                name: 'employee_level',
                description: 'Employee Level',
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

      const { crm } = apideck
      const params = {} as any
      const current = await crm.contactsAll(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#contactsDelete', () => {
    const endpoint = '/crm/contacts/{id}'

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

      const { crm } = apideck
      const params = {
        id: 'id_example'
      } as any
      const current = await crm.contactsDelete(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#contactsOne', () => {
    const endpoint = '/crm/contacts/{id}'

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
          photo_url: 'https://unavatar.io/elon-musk',
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
              line3: 'Suite #',
              line4: 'delivery instructions',
              street_number: '25',
              city: 'San Francisco',
              state: 'CA',
              postal_code: '94104',
              country: 'US',
              latitude: 40.759211,
              longitude: '-73.984638',
              county: 'Santa Clara',
              contact_name: 'Elon Musk',
              salutation: 'Mr',
              phone_number: '111-111-1111',
              fax: '122-111-1111',
              email: 'elon@musk.com',
              website: 'https://elonmusk.com',
              row_version: '1-12345'
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
              extension: '105',
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
              id: 2389328923893298,
              name: 'employee_level',
              description: 'Employee Level',
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

      const { crm } = apideck
      const params = {
        id: 'id_example'
      } as any
      const current = await crm.contactsOne(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#contactsUpdate', () => {
    const endpoint = '/crm/contacts/{id}'

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

      const { crm } = apideck
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
          photo_url: 'https://unavatar.io/elon-musk',
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
              line3: 'Suite #',
              line4: 'delivery instructions',
              street_number: '25',
              city: 'San Francisco',
              state: 'CA',
              postal_code: '94104',
              country: 'US',
              latitude: 40.759211,
              longitude: '-73.984638',
              county: 'Santa Clara',
              contact_name: 'Elon Musk',
              salutation: 'Mr',
              phone_number: '111-111-1111',
              fax: '122-111-1111',
              email: 'elon@musk.com',
              website: 'https://elonmusk.com',
              row_version: '1-12345'
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
              extension: '105',
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
              id: 2389328923893298,
              name: 'employee_level',
              description: 'Employee Level',
              value: 'Uses Salesforce and Marketo'
            }
          ],
          tags: ['New']
        }
      } as any
      const current = await crm.contactsUpdate(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#leadsAdd', () => {
    const endpoint = '/crm/leads'

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

      const { crm } = apideck
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
              line3: 'Suite #',
              line4: 'delivery instructions',
              street_number: '25',
              city: 'San Francisco',
              state: 'CA',
              postal_code: '94104',
              country: 'US',
              latitude: 40.759211,
              longitude: '-73.984638',
              county: 'Santa Clara',
              contact_name: 'Elon Musk',
              salutation: 'Mr',
              phone_number: '111-111-1111',
              fax: '122-111-1111',
              email: 'elon@musk.com',
              website: 'https://elonmusk.com',
              row_version: '1-12345'
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
              extension: '105',
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
              id: 2389328923893298,
              name: 'employee_level',
              description: 'Employee Level',
              value: 'Uses Salesforce and Marketo'
            }
          ],
          tags: ['New']
        }
      } as any
      const current = await crm.leadsAdd(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#leadsAll', () => {
    const endpoint = '/crm/leads'

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
                line3: 'Suite #',
                line4: 'delivery instructions',
                street_number: '25',
                city: 'San Francisco',
                state: 'CA',
                postal_code: '94104',
                country: 'US',
                latitude: 40.759211,
                longitude: '-73.984638',
                county: 'Santa Clara',
                contact_name: 'Elon Musk',
                salutation: 'Mr',
                phone_number: '111-111-1111',
                fax: '122-111-1111',
                email: 'elon@musk.com',
                website: 'https://elonmusk.com',
                row_version: '1-12345'
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
                extension: '105',
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
                id: 2389328923893298,
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

      const { crm } = apideck
      const params = {} as any
      const current = await crm.leadsAll(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#leadsDelete', () => {
    const endpoint = '/crm/leads/{id}'

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

      const { crm } = apideck
      const params = {
        id: 'id_example'
      } as any
      const current = await crm.leadsDelete(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#leadsOne', () => {
    const endpoint = '/crm/leads/{id}'

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
              line3: 'Suite #',
              line4: 'delivery instructions',
              street_number: '25',
              city: 'San Francisco',
              state: 'CA',
              postal_code: '94104',
              country: 'US',
              latitude: 40.759211,
              longitude: '-73.984638',
              county: 'Santa Clara',
              contact_name: 'Elon Musk',
              salutation: 'Mr',
              phone_number: '111-111-1111',
              fax: '122-111-1111',
              email: 'elon@musk.com',
              website: 'https://elonmusk.com',
              row_version: '1-12345'
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
              extension: '105',
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
              id: 2389328923893298,
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

      const { crm } = apideck
      const params = {
        id: 'id_example'
      } as any
      const current = await crm.leadsOne(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#leadsUpdate', () => {
    const endpoint = '/crm/leads/{id}'

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

      const { crm } = apideck
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
              line3: 'Suite #',
              line4: 'delivery instructions',
              street_number: '25',
              city: 'San Francisco',
              state: 'CA',
              postal_code: '94104',
              country: 'US',
              latitude: 40.759211,
              longitude: '-73.984638',
              county: 'Santa Clara',
              contact_name: 'Elon Musk',
              salutation: 'Mr',
              phone_number: '111-111-1111',
              fax: '122-111-1111',
              email: 'elon@musk.com',
              website: 'https://elonmusk.com',
              row_version: '1-12345'
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
              extension: '105',
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
              id: 2389328923893298,
              name: 'employee_level',
              description: 'Employee Level',
              value: 'Uses Salesforce and Marketo'
            }
          ],
          tags: ['New']
        }
      } as any
      const current = await crm.leadsUpdate(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#notesAdd', () => {
    const endpoint = '/crm/notes'

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
        resource: 'notes',
        operation: 'one',
        data: {
          id: '12345'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { crm } = apideck
      const params = {
        note: {
          title: 'Meeting Notes',
          content: 'Office hours are 9AM-6PM',
          owner_id: '12345',
          contact_id: '12345',
          company_id: '12345',
          opportunity_id: '12345',
          lead_id: '12345',
          active: true
        }
      } as any
      const current = await crm.notesAdd(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#notesAll', () => {
    const endpoint = '/crm/notes'

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
        resource: 'notes',
        operation: 'one',
        data: [
          {
            id: '12345',
            title: 'Meeting Notes',
            content: 'Office hours are 9AM-6PM',
            owner_id: '12345',
            contact_id: '12345',
            company_id: '12345',
            opportunity_id: '12345',
            lead_id: '12345',
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

      const { crm } = apideck
      const params = {} as any
      const current = await crm.notesAll(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#notesDelete', () => {
    const endpoint = '/crm/notes/{id}'

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
        resource: 'notes',
        operation: 'one',
        data: {
          id: '12345'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { crm } = apideck
      const params = {
        id: 'id_example'
      } as any
      const current = await crm.notesDelete(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#notesOne', () => {
    const endpoint = '/crm/notes/{id}'

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
        resource: 'notes',
        operation: 'one',
        data: {
          id: '12345',
          title: 'Meeting Notes',
          content: 'Office hours are 9AM-6PM',
          owner_id: '12345',
          contact_id: '12345',
          company_id: '12345',
          opportunity_id: '12345',
          lead_id: '12345',
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

      const { crm } = apideck
      const params = {
        id: 'id_example'
      } as any
      const current = await crm.notesOne(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#notesUpdate', () => {
    const endpoint = '/crm/notes/{id}'

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
        resource: 'notes',
        operation: 'one',
        data: {
          id: '12345'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { crm } = apideck
      const params = {
        id: 'id_example',
        note: {
          title: 'Meeting Notes',
          content: 'Office hours are 9AM-6PM',
          owner_id: '12345',
          contact_id: '12345',
          company_id: '12345',
          opportunity_id: '12345',
          lead_id: '12345',
          active: true
        }
      } as any
      const current = await crm.notesUpdate(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#opportunitiesAdd', () => {
    const endpoint = '/crm/opportunities'

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
        resource: 'opportunities',
        operation: 'one',
        data: {
          id: '12345'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { crm } = apideck
      const params = {
        opportunity: {
          title: 'New Rocket',
          primary_contact_id: '12345',
          description:
            'Opportunities are created for People and Companies that are interested in buying your products or services. Create Opportunities for People and Companies to move them through one of your Pipelines.',
          type: 'Existing Customer - Upgrade',
          monetary_amount: 75000,
          currency: 'USD',
          win_probability: 40,
          close_date: '2020-10-30',
          loss_reason_id: '12345',
          loss_reason: 'No budget',
          won_reason_id: '12345',
          won_reason: 'Best pitch',
          pipeline_id: '12345',
          pipeline_stage_id: '12345',
          source_id: '12345',
          lead_id: '12345',
          lead_source: 'Website',
          contact_id: '12345',
          company_id: '12345',
          company_name: 'Copper',
          owner_id: '12345',
          priority: 'None',
          status: 'Open',
          status_id: '12345',
          tags: ['New'],
          custom_fields: [
            {
              id: 2389328923893298,
              name: 'employee_level',
              description: 'Employee Level',
              value: 'Uses Salesforce and Marketo'
            }
          ],
          stage_last_changed_at: '2020-09-30T07:43:32.000Z'
        }
      } as any
      const current = await crm.opportunitiesAdd(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#opportunitiesAll', () => {
    const endpoint = '/crm/opportunities'

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
        resource: 'opportunities',
        operation: 'one',
        data: [
          {
            id: '12345',
            title: 'New Rocket',
            primary_contact_id: '12345',
            description:
              'Opportunities are created for People and Companies that are interested in buying your products or services. Create Opportunities for People and Companies to move them through one of your Pipelines.',
            type: 'Existing Customer - Upgrade',
            monetary_amount: 75000,
            currency: 'USD',
            win_probability: 40,
            expected_revenue: 75000,
            close_date: '2020-10-30',
            loss_reason_id: '12345',
            loss_reason: 'No budget',
            won_reason_id: '12345',
            won_reason: 'Best pitch',
            pipeline_id: '12345',
            pipeline_stage_id: '12345',
            source_id: '12345',
            lead_id: '12345',
            lead_source: 'Website',
            contact_id: '12345',
            company_id: '12345',
            company_name: 'Copper',
            owner_id: '12345',
            priority: 'None',
            status: 'Open',
            status_id: '12345',
            tags: ['New'],
            interaction_count: 0,
            custom_fields: [
              {
                id: 2389328923893298,
                name: 'employee_level',
                description: 'Employee Level',
                value: 'Uses Salesforce and Marketo'
              }
            ],
            stage_last_changed_at: '2020-09-30T07:43:32.000Z',
            last_activity_at: '2020-09-30T07:43:32.000Z',
            deleted: false,
            date_stage_changed: '2020-09-30T00:00:00.000Z',
            date_last_contacted: '2020-09-30T00:00:00.000Z',
            date_lead_created: '2020-09-30T00:00:00.000Z',
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

      const { crm } = apideck
      const params = {} as any
      const current = await crm.opportunitiesAll(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#opportunitiesDelete', () => {
    const endpoint = '/crm/opportunities/{id}'

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

      const { crm } = apideck
      const params = {
        id: 'id_example'
      } as any
      const current = await crm.opportunitiesDelete(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#opportunitiesOne', () => {
    const endpoint = '/crm/opportunities/{id}'

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
        resource: 'opportunities',
        operation: 'one',
        data: {
          id: '12345',
          title: 'New Rocket',
          primary_contact_id: '12345',
          description:
            'Opportunities are created for People and Companies that are interested in buying your products or services. Create Opportunities for People and Companies to move them through one of your Pipelines.',
          type: 'Existing Customer - Upgrade',
          monetary_amount: 75000,
          currency: 'USD',
          win_probability: 40,
          expected_revenue: 75000,
          close_date: '2020-10-30',
          loss_reason_id: '12345',
          loss_reason: 'No budget',
          won_reason_id: '12345',
          won_reason: 'Best pitch',
          pipeline_id: '12345',
          pipeline_stage_id: '12345',
          source_id: '12345',
          lead_id: '12345',
          lead_source: 'Website',
          contact_id: '12345',
          company_id: '12345',
          company_name: 'Copper',
          owner_id: '12345',
          priority: 'None',
          status: 'Open',
          status_id: '12345',
          tags: ['New'],
          interaction_count: 0,
          custom_fields: [
            {
              id: 2389328923893298,
              name: 'employee_level',
              description: 'Employee Level',
              value: 'Uses Salesforce and Marketo'
            }
          ],
          stage_last_changed_at: '2020-09-30T07:43:32.000Z',
          last_activity_at: '2020-09-30T07:43:32.000Z',
          deleted: false,
          date_stage_changed: '2020-09-30T00:00:00.000Z',
          date_last_contacted: '2020-09-30T00:00:00.000Z',
          date_lead_created: '2020-09-30T00:00:00.000Z',
          updated_by: '12345',
          created_by: '12345',
          updated_at: '2020-09-30T07:43:32.000Z',
          created_at: '2020-09-30T07:43:32.000Z'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { crm } = apideck
      const params = {
        id: 'id_example'
      } as any
      const current = await crm.opportunitiesOne(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#opportunitiesUpdate', () => {
    const endpoint = '/crm/opportunities/{id}'

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

      const { crm } = apideck
      const params = {
        id: 'id_example',
        opportunity: {
          title: 'New Rocket',
          primary_contact_id: '12345',
          description:
            'Opportunities are created for People and Companies that are interested in buying your products or services. Create Opportunities for People and Companies to move them through one of your Pipelines.',
          type: 'Existing Customer - Upgrade',
          monetary_amount: 75000,
          currency: 'USD',
          win_probability: 40,
          close_date: '2020-10-30',
          loss_reason_id: '12345',
          loss_reason: 'No budget',
          won_reason_id: '12345',
          won_reason: 'Best pitch',
          pipeline_id: '12345',
          pipeline_stage_id: '12345',
          source_id: '12345',
          lead_id: '12345',
          lead_source: 'Website',
          contact_id: '12345',
          company_id: '12345',
          company_name: 'Copper',
          owner_id: '12345',
          priority: 'None',
          status: 'Open',
          status_id: '12345',
          tags: ['New'],
          custom_fields: [
            {
              id: 2389328923893298,
              name: 'employee_level',
              description: 'Employee Level',
              value: 'Uses Salesforce and Marketo'
            }
          ],
          stage_last_changed_at: '2020-09-30T07:43:32.000Z'
        }
      } as any
      const current = await crm.opportunitiesUpdate(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#pipelinesAdd', () => {
    const endpoint = '/crm/pipelines'

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
        resource: 'pipelines',
        operation: 'one',
        data: {
          id: '12345'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { crm } = apideck
      const params = {
        pipeline: {
          id: 'default',
          name: 'Sales Pipeline',
          currency: 'USD',
          archived: false,
          display_order: 1,
          stages: [
            {
              name: 'Contract Sent',
              value: 'CONTRACT_SENT',
              win_probability: 50,
              display_order: 1
            }
          ]
        }
      } as any
      const current = await crm.pipelinesAdd(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#pipelinesAll', () => {
    const endpoint = '/crm/pipelines'

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
        resource: 'pipelines',
        operation: 'one',
        data: [
          {
            id: 'default',
            name: 'Sales Pipeline',
            currency: 'USD',
            archived: false,
            display_order: 1,
            stages: [
              {
                id: 'contractsent',
                name: 'Contract Sent',
                value: 'CONTRACT_SENT',
                win_probability: 50,
                display_order: 1
              }
            ],
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

      const { crm } = apideck
      const params = {} as any
      const current = await crm.pipelinesAll(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#pipelinesDelete', () => {
    const endpoint = '/crm/pipelines/{id}'

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

      const { crm } = apideck
      const params = {
        id: 'id_example'
      } as any
      const current = await crm.pipelinesDelete(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#pipelinesOne', () => {
    const endpoint = '/crm/pipelines/{id}'

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
        resource: 'pipelines',
        operation: 'one',
        data: {
          id: 'default',
          name: 'Sales Pipeline',
          currency: 'USD',
          archived: false,
          display_order: 1,
          stages: [
            {
              id: 'contractsent',
              name: 'Contract Sent',
              value: 'CONTRACT_SENT',
              win_probability: 50,
              display_order: 1
            }
          ],
          updated_at: '2020-09-30T07:43:32.000Z',
          created_at: '2020-09-30T07:43:32.000Z'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { crm } = apideck
      const params = {
        id: 'id_example'
      } as any
      const current = await crm.pipelinesOne(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#pipelinesUpdate', () => {
    const endpoint = '/crm/pipelines/{id}'

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
        resource: 'pipelines',
        operation: 'one',
        data: {
          id: '12345'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { crm } = apideck
      const params = {
        id: 'id_example',
        pipeline: {
          id: 'default',
          name: 'Sales Pipeline',
          currency: 'USD',
          archived: false,
          display_order: 1,
          stages: [
            {
              name: 'Contract Sent',
              value: 'CONTRACT_SENT',
              win_probability: 50,
              display_order: 1
            }
          ]
        }
      } as any
      const current = await crm.pipelinesUpdate(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#usersAdd', () => {
    const endpoint = '/crm/users'

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
        resource: 'users',
        operation: 'one',
        data: {
          id: '12345'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { crm } = apideck
      const params = {
        user: {
          parent_id: '54321',
          username: 'masterofcoin',
          first_name: 'Elon',
          last_name: 'Musk',
          title: 'CEO',
          division: 'Europe',
          department: 'R&amp;D',
          company_name: 'SpaceX',
          employee_number: '123456-AB',
          description: 'A description',
          image: 'https://logo.clearbit.com/spacex.com?s=128',
          language: 'EN',
          status: 'active',
          password: 'supersecretpassword',
          addresses: [
            {
              id: '123',
              type: 'primary',
              string: '25 Spring Street, Blackburn, VIC 3130',
              name: 'HQ US',
              line1: 'Main street',
              line2: 'apt #',
              line3: 'Suite #',
              line4: 'delivery instructions',
              street_number: '25',
              city: 'San Francisco',
              state: 'CA',
              postal_code: '94104',
              country: 'US',
              latitude: 40.759211,
              longitude: '-73.984638',
              county: 'Santa Clara',
              contact_name: 'Elon Musk',
              salutation: 'Mr',
              phone_number: '111-111-1111',
              fax: '122-111-1111',
              email: 'elon@musk.com',
              website: 'https://elonmusk.com',
              row_version: '1-12345'
            }
          ],
          phone_numbers: [
            {
              id: '12345',
              country_code: '1',
              area_code: '323',
              number: '111-111-1111',
              extension: '105',
              type: 'primary'
            }
          ],
          emails: [
            {
              id: '123',
              email: 'elon@musk.com',
              type: 'primary'
            }
          ]
        }
      } as any
      const current = await crm.usersAdd(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#usersAll', () => {
    const endpoint = '/crm/users'

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
        resource: 'users',
        operation: 'one',
        data: [
          {
            id: '12345',
            parent_id: '54321',
            username: 'masterofcoin',
            first_name: 'Elon',
            last_name: 'Musk',
            title: 'CEO',
            division: 'Europe',
            department: 'R&amp;D',
            company_name: 'SpaceX',
            employee_number: '123456-AB',
            description: 'A description',
            image: 'https://logo.clearbit.com/spacex.com?s=128',
            language: 'EN',
            status: 'active',
            password: 'supersecretpassword',
            addresses: [
              {
                id: '123',
                type: 'primary',
                string: '25 Spring Street, Blackburn, VIC 3130',
                name: 'HQ US',
                line1: 'Main street',
                line2: 'apt #',
                line3: 'Suite #',
                line4: 'delivery instructions',
                street_number: '25',
                city: 'San Francisco',
                state: 'CA',
                postal_code: '94104',
                country: 'US',
                latitude: 40.759211,
                longitude: '-73.984638',
                county: 'Santa Clara',
                contact_name: 'Elon Musk',
                salutation: 'Mr',
                phone_number: '111-111-1111',
                fax: '122-111-1111',
                email: 'elon@musk.com',
                website: 'https://elonmusk.com',
                row_version: '1-12345'
              }
            ],
            phone_numbers: [
              {
                id: '12345',
                country_code: '1',
                area_code: '323',
                number: '111-111-1111',
                extension: '105',
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

      const { crm } = apideck
      const params = {} as any
      const current = await crm.usersAll(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#usersDelete', () => {
    const endpoint = '/crm/users/{id}'

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
        resource: 'users',
        operation: 'one',
        data: {
          id: '12345'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { crm } = apideck
      const params = {
        id: 'id_example'
      } as any
      const current = await crm.usersDelete(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#usersOne', () => {
    const endpoint = '/crm/users/{id}'

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
          parent_id: '54321',
          username: 'masterofcoin',
          first_name: 'Elon',
          last_name: 'Musk',
          title: 'CEO',
          division: 'Europe',
          department: 'R&amp;D',
          company_name: 'SpaceX',
          employee_number: '123456-AB',
          description: 'A description',
          image: 'https://logo.clearbit.com/spacex.com?s=128',
          language: 'EN',
          status: 'active',
          password: 'supersecretpassword',
          addresses: [
            {
              id: '123',
              type: 'primary',
              string: '25 Spring Street, Blackburn, VIC 3130',
              name: 'HQ US',
              line1: 'Main street',
              line2: 'apt #',
              line3: 'Suite #',
              line4: 'delivery instructions',
              street_number: '25',
              city: 'San Francisco',
              state: 'CA',
              postal_code: '94104',
              country: 'US',
              latitude: 40.759211,
              longitude: '-73.984638',
              county: 'Santa Clara',
              contact_name: 'Elon Musk',
              salutation: 'Mr',
              phone_number: '111-111-1111',
              fax: '122-111-1111',
              email: 'elon@musk.com',
              website: 'https://elonmusk.com',
              row_version: '1-12345'
            }
          ],
          phone_numbers: [
            {
              id: '12345',
              country_code: '1',
              area_code: '323',
              number: '111-111-1111',
              extension: '105',
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
          updated_at: '2017-08-12T20:43:21.291Z',
          created_at: '2017-08-12T20:43:21.291Z'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { crm } = apideck
      const params = {
        id: 'id_example'
      } as any
      const current = await crm.usersOne(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#usersUpdate', () => {
    const endpoint = '/crm/users/{id}'

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

      const { crm } = apideck
      const params = {
        id: 'id_example',
        user: {
          parent_id: '54321',
          username: 'masterofcoin',
          first_name: 'Elon',
          last_name: 'Musk',
          title: 'CEO',
          division: 'Europe',
          department: 'R&amp;D',
          company_name: 'SpaceX',
          employee_number: '123456-AB',
          description: 'A description',
          image: 'https://logo.clearbit.com/spacex.com?s=128',
          language: 'EN',
          status: 'active',
          password: 'supersecretpassword',
          addresses: [
            {
              id: '123',
              type: 'primary',
              string: '25 Spring Street, Blackburn, VIC 3130',
              name: 'HQ US',
              line1: 'Main street',
              line2: 'apt #',
              line3: 'Suite #',
              line4: 'delivery instructions',
              street_number: '25',
              city: 'San Francisco',
              state: 'CA',
              postal_code: '94104',
              country: 'US',
              latitude: 40.759211,
              longitude: '-73.984638',
              county: 'Santa Clara',
              contact_name: 'Elon Musk',
              salutation: 'Mr',
              phone_number: '111-111-1111',
              fax: '122-111-1111',
              email: 'elon@musk.com',
              website: 'https://elonmusk.com',
              row_version: '1-12345'
            }
          ],
          phone_numbers: [
            {
              id: '12345',
              country_code: '1',
              area_code: '323',
              number: '111-111-1111',
              extension: '105',
              type: 'primary'
            }
          ],
          emails: [
            {
              id: '123',
              email: 'elon@musk.com',
              type: 'primary'
            }
          ]
        }
      } as any
      const current = await crm.usersUpdate(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })
})
