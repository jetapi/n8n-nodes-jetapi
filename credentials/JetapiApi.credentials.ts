import {
    ICredentialType,
    INodeProperties,
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
}