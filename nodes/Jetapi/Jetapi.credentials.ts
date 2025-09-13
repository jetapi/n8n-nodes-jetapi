import {
    ICredentialType,
    INodeProperties,
} from 'n8n-workflow';

export class Jetapi implements ICredentialType {
    name = 'jetapiApi';
    displayName = 'JetAPI API';
    documentationUrl = 'https://docs.jetapi.io/#ec3ca7b7-2667-4366-adb7-06ca10a35e0f';
    properties: INodeProperties[] = [
        {
            displayName: 'Bearer Token',
            name: 'bearerToken',
            type: 'string',
            typeOptions: { password: true },
            default: '',
            required: true,
            description: 'Your JetAPI Bearer Token. Get it from your <a href="https://jetapi.io/login?referral=n8n&subs_slug=jtp_individ&subs_type=temp" target="_blank">JetAPI Dashboard</a> in Settings → API/Access. 10 free days trial available.',
        },
    ];
}
