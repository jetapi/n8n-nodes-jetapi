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
    }
}
exports.JetapiApi = JetapiApi;
