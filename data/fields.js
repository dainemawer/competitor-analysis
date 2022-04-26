export const fields = [
    {
        key: 'current-site',
        id: 'current-site',
        label: 'Client Site',
        type: 'url',
        placeholder: 'https://10up-client.com',
        required: 'This field is required',
    },
    {
        key: 'competitor-1',
        id: 'competitor-1',
        label: 'Competitor 1',
        type: 'url',
        placeholder: 'https://apple.com',
        required: 'This field is required',
    },
    {
        key: 'competitor-2',
        id: 'competitor-2',
        label: 'Competitor 2',
        type: 'url',
        placeholder: 'https://microsoft.com',
        required: 'This field is required',
    },
    {
        key: 'competitor-3',
        id: 'competitor-3',
        label: 'Competitor 3',
        type: 'url',
        placeholder: 'https://ibm.com',
        required: 'This field is required',
    },
    {
        key: 'competitor-4',
        id: 'competitor-4',
        label: 'Competitor 4',
        type: 'url',
        placeholder: 'https://dell.com',
        required: 'This field is required',
    }
]

export const pattern = {
    value: '[Hh][Tt][Tt][Pp][Ss]?:\/\/(?:(?:[a-zA-Z\u00a1-\uffff0-9]+-?)*[a-zA-Z\u00a1-\uffff0-9]+)(?:\.(?:[a-zA-Z\u00a1-\uffff0-9]+-?)*[a-zA-Z\u00a1-\uffff0-9]+)*(?:\.(?:[a-zA-Z\u00a1-\uffff]{2,}))(?::\d{2,5})?(?:\/[^\s]*)?',
    message: 'Not a URL'
}