export const URL = 'https://www.webpagetest.org/runtest.php?'

export const CONFIG = {
    runs: 9,
    mobile: 1,
    mobileDevice: 'iPhoneX',
    location: 'ec2-us-east-1.Chrome.3G',
    f: 'json',
    lighthouse: 1,
    k: '663033c9-772f-48c5-aed5-202b24f0cfc4'
}

export const triggerWPTAudit = async (data, setLoading, setStatus) => {
    setLoading(true);
    const urlsAsArray = Object.values(data);

    const requests = urlsAsArray.filter(url => url !== '').map(url => {
        const configuration = {...CONFIG, url}
        const params = new URLSearchParams(configuration);
        return fetch(`${URL}${params}`);
    });

    Promise.all(requests)
        .then(responses => responses.forEach(
            response => response.json().then(
                json => {
                    const { statusCode } = json;
                    if (statusCode === 200) {
                        setLoading(false);
                        setStatus(`WebPageTest has started running your tests. Please wait a few minutes. Your test id is: ${json.data.testId}`);
                        postToSlack(`Hey, <@dainemawer>! Your test with ID ${json.data.testId
} has finished.`);
                    }
                }
            )
    ));
}

export const postToSlack = async (message = '') => {
    const response = await fetch('http://localhost:3000/api/slack', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
    });

    const json = await response.json();
    return json;
}