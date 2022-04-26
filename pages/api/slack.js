export default async function handler(req, res) {
    const URL = 'https://slack.com/api/chat.postMessage';

    const body = {
        channel: '#competitor-analysis',
        text: req.body.message,
    }

    const response = await fetch(URL, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            "Content-Length": body.length,
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_SLACK_TOKEN}`,
            Accept: 'application/json',
        },
        body: JSON.stringify(body),
        mode: 'no-cors'
    })

    const data = await response.json()
    res.status(200).json(data)
}