"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JetapiApi = void 0;
class JetapiApi {
    constructor() {
        this.name = 'jetapiApi';
        this.displayName = 'JetAPI API';
        this.documentationUrl = 'https://docs.jetapi.io/';
        this.properties = [
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
        // Добавляем credential test для n8n верификации
        this.test = {
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
}
exports.JetapiApi = JetapiApi;
