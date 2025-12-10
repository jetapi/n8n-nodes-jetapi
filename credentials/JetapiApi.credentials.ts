import {
	IAuthenticateGeneric,
	Icon,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class JetapiApi implements ICredentialType {
	name = 'jetapiApi';
	displayName = 'JetAPI API';
	documentationUrl = 'https://docs.jetapi.io/';
	icon: Icon = 'file:../icons/jetapi.svg';
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

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				Authorization: '=Bearer {{$credentials?.bearerToken}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://api.jetapi.io',
			url: '/api/v1/account',
		},
	};
}
