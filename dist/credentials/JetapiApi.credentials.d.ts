import { ICredentialType, INodeProperties, ICredentialTestRequest } from 'n8n-workflow';
export declare class JetapiApi implements ICredentialType {
    name: string;
    displayName: string;
    documentationUrl: string;
    properties: INodeProperties[];
    test: ICredentialTestRequest;
}
