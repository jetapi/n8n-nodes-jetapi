import {
    ICredentialType,
    INodeProperties,
    ICredentialTestRequest,
} from 'n8n-workflow';

export class JetapiApi implements ICredentialType {
    name = 'jetapiApi';
    displayName = 'JetAPI API';
    documentationUrl = 'https://docs.jetapi.io/';
    properties: INodeProperties[] = [
        {
            displayName: 'Bearer Token',
            name: 'bearerToken',
            type: 'string',
            typeOptions: { password: true },
            default: '',
            required: true,
            description: 'Your JetAPI Bearer Token from dashboard',
        },
    ];

    // Add credential test for n8n verification
    test: ICredentialTestRequest = {
        request: {
            baseURL: 'https://api.jetapi.io/api/v1',
            url: '/delivery',
            method: 'POST',
            headers: {
                'Authorization': 'Bearer {{$credentials.bearerToken}}',
                'Content-Type': 'application/json',
            },
            body: {
                text: 'n8n credential test',
                phone: '+1234567890',
            },
        },
        rules: [
            {
                type: 'responseCode',
                properties: {
                    value: 200,
                    message: 'Invalid JetAPI Bearer Token or API error',
                },
            },
        ],
    };
}
