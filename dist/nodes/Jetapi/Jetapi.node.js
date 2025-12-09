"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Jetapi = void 0;
class Jetapi {
    constructor() {
        this.description = {
            displayName: 'JetAPI',
            name: 'jetapi',
            icon: 'file:nodes/Jetapi/jetapi.png',
            group: ['communication'],
            version: 6,
            subtitle: '={{$parameter["operation"]}}',
            description: 'Integrate with JetAPI for Telegram and WhatsApp messaging',
            defaults: { name: 'JetAPI' },
            inputs: ["main" /* NodeConnectionType.Main */],
            outputs: ["main" /* NodeConnectionType.Main */],
            credentials: [{ name: 'jetapiApi', required: true }],
            properties: [
                {
                    displayName: 'Operation',
                    name: 'operation',
                    type: 'options',
                    noDataExpression: true,
                    options: [
                        {
                            name: 'Send Text Message',
                            value: 'sendText',
                            action: 'Send a text message',
                        },
                    ],
                    default: 'sendText',
                },
                {
                    displayName: 'Channel',
                    name: 'channel',
                    type: 'options',
                    displayOptions: {
                        show: {
                            operation: ['sendText'],
                        },
                    },
                    options: [
                        {
                            name: 'WhatsApp',
                            value: 'whatsapp',
                            description: 'Send via WhatsApp',
                        },
                        {
                            name: 'Telegram',
                            value: 'telegram',
                            description: 'Send via Telegram',
                        },
                        {
                            name: 'Cascade',
                            value: 'cascade',
                            description: 'Auto-select channel based on your account settings and channel priority configured in JetAPI dashboard',
                        },
                    ],
                    default: 'whatsapp',
                    required: true,
                    description: 'Select delivery channel',
                },
                {
                    displayName: 'Recipient Type',
                    name: 'recipientType',
                    type: 'options',
                    displayOptions: {
                        show: {
                            operation: ['sendText'],
                            channel: ['telegram'],
                        },
                    },
                    options: [
                        {
                            name: 'Phone Number',
                            value: 'phone',
                        },
                        {
                            name: 'Telegram Username',
                            value: 'username',
                        },
                        {
                            name: 'Telegram User or Group ID',
                            value: 'tdlib_user_id',
                        },
                    ],
                    default: 'phone',
                    required: true,
                    description: 'How to identify the Telegram recipient',
                },
                {
                    displayName: 'Phone Number',
                    name: 'phone',
                    type: 'string',
                    displayOptions: {
                        show: {
                            operation: ['sendText'],
                            channel: ['whatsapp', 'cascade'],
                        },
                    },
                    default: '',
                    required: true,
                    placeholder: '+12345678900',
                    description: 'Phone number in international format',
                },
                {
                    displayName: 'Phone Number',
                    name: 'phoneForTelegram',
                    type: 'string',
                    displayOptions: {
                        show: {
                            operation: ['sendText'],
                            channel: ['telegram'],
                            recipientType: ['phone'],
                        },
                    },
                    default: '',
                    required: true,
                    placeholder: '+12345678900',
                    description: 'Phone number in international format',
                },
                {
                    displayName: 'Username',
                    name: 'username',
                    type: 'string',
                    displayOptions: {
                        show: {
                            operation: ['sendText'],
                            channel: ['telegram'],
                            recipientType: ['username'],
                        },
                    },
                    default: '',
                    required: true,
                    placeholder: 'username',
                    description: 'Telegram username (without @ symbol)',
                },
                {
                    displayName: 'Telegram User or Group ID',
                    name: 'tdlib_user_id',
                    type: 'string',
                    displayOptions: {
                        show: {
                            operation: ['sendText'],
                            channel: ['telegram'],
                            recipientType: ['tdlib_user_id'],
                        },
                    },
                    default: '',
                    required: true,
                    placeholder: '123456789 or -123456789',
                    description: 'Telegram user ID (positive for private chat, negative for group chat)',
                },
                {
                    displayName: 'Message Text',
                    name: 'text',
                    type: 'string',
                    typeOptions: {
                        rows: 4,
                    },
                    displayOptions: {
                        show: {
                            operation: ['sendText'],
                        },
                    },
                    default: '',
                    required: true,
                    description: 'Message text (3500 chars for messengers, 160 for SMS). See <a href="https://docs.jetapi.io/#ea49fe72-5621-405c-ba99-8450050a35ff" target="_blank">documentation</a> for more details.',
                },
                {
                    displayName: 'Additional Options',
                    name: 'additionalFields',
                    type: 'collection',
                    placeholder: 'Add Field',
                    default: {},
                    displayOptions: {
                        show: {
                            operation: ['sendText'],
                        },
                    },
                    options: [
                        {
                            displayName: 'UTM Mark',
                            name: 'utm_mark',
                            type: 'string',
                            default: '',
                            description: 'Label for marking shipments',
                        },
                        {
                            displayName: 'Callback URL',
                            name: 'callback_url',
                            type: 'string',
                            default: '',
                            description: 'URL for delivery status updates',
                        },
                        {
                            displayName: 'External ID',
                            name: 'external_id',
                            type: 'string',
                            default: '',
                            description: 'Client-side message ID for idempotence',
                        },
                        {
                            displayName: 'Scheduled At',
                            name: 'scheduled_at',
                            type: 'string',
                            default: '',
                            placeholder: '2023-11-21 20:30:00',
                            description: 'Delayed dispatch date (UTC+0, YYYY-MM-DD HH:MM:SS)',
                        },
                        {
                            displayName: 'Priority',
                            name: 'priority',
                            type: 'options',
                            options: [
                                {
                                    name: 'High',
                                    value: 'high',
                                },
                                {
                                    name: 'Medium',
                                    value: 'medium',
                                },
                                {
                                    name: 'Low',
                                    value: 'low',
                                },
                            ],
                            default: 'medium',
                            description: 'Message priority',
                        },
                        {
                            displayName: 'Reply to Message ID',
                            name: 'reply_to_message_id',
                            type: 'string',
                            default: '',
                            description: 'Message ID to reply to (from webhook)',
                        },
                        {
                            displayName: 'Simulate Typing',
                            name: 'simulate_typing',
                            type: 'boolean',
                            default: true,
                            description: 'Simulate typing in WhatsApp (default: true)',
                        },
                    ],
                },
            ],
        };
    }
    async execute() {
        const items = this.getInputData();
        const returnData = [];
        const credentials = await this.getCredentials('jetapiApi');
        for (let i = 0; i < items.length; i++) {
            try {
                const operation = this.getNodeParameter('operation', i);
                if (operation === 'sendText') {
                    const channel = this.getNodeParameter('channel', i);
                    const text = this.getNodeParameter('text', i);
                    const additionalFields = this.getNodeParameter('additionalFields', i, {});
                    const requestBody = { text };
                    if (channel === 'whatsapp') {
                        requestBody.phone = this.getNodeParameter('phone', i);
                        requestBody.dispatch_routing = ['whatsapp'];
                    }
                    else if (channel === 'telegram') {
                        const recipientType = this.getNodeParameter('recipientType', i);
                        if (recipientType === 'phone') {
                            requestBody.phone = this.getNodeParameter('phoneForTelegram', i);
                        }
                        else if (recipientType === 'username') {
                            requestBody.username = this.getNodeParameter('username', i);
                        }
                        else if (recipientType === 'tdlib_user_id') {
                            requestBody.tdlib_user_id = this.getNodeParameter('tdlib_user_id', i);
                        }
                        requestBody.dispatch_routing = ['tdlib'];
                    }
                    else if (channel === 'cascade') {
                        requestBody.phone = this.getNodeParameter('phone', i);
                    }
                    Object.keys(additionalFields).forEach(key => {
                        if (additionalFields[key] !== '') {
                            requestBody[key] = additionalFields[key];
                        }
                    });
                    // @ts-ignore - TypeScript compatibility issue with n8n types
                    const responseData = await this.helpers.httpRequestWithAuthentication('jetapiApi', {
                        method: 'POST',
                        url: 'https://api.jetapi.io/api/v1/delivery',
                        body: requestBody,
                        json: true,
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    });
                    const executionData = this.helpers.constructExecutionMetaData(this.helpers.returnJsonArray(responseData), { itemData: { item: i } });
                    returnData.push(...executionData);
                }
            }
            catch (error) {
                if (this.continueOnFail()) {
                    const executionData = this.helpers.constructExecutionMetaData(this.helpers.returnJsonArray({ error: error.message }), { itemData: { item: i } });
                    returnData.push(...executionData);
                    continue;
                }
                throw error;
            }
        }
        return [returnData];
    }
}
exports.Jetapi = Jetapi;
