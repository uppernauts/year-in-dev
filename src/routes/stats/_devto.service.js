const request = require("request-promise");

export const getArticles = async (username) => {

    const apiURL = `https://dev.to/api/articles?username=${username}&state=all`;

    try {
        const articles = await request.get(apiURL);

        return JSON.parse(articles);
    }
    catch (err) {
        let handledErr = new Error();

        if (err.statusCode == 404) {
            handledErr.message = 'User not found';
            handledErr.statusCode = 404;
        }
        else {
            handledErr.message = `There was an issue getting ${username} articles`;
            handledErr.statusCode = 500;
        }

        handledErr.inner = err;

        throw handledErr;
    }
}