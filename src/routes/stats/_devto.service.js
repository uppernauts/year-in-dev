const request = require("request-promise");

/**
 * Get the articles written by a DEV user during the specified year.
 * @param {string} username 
 * @param {number} year 
 */
export const getArticles = async (username, year) => {

    const apiURL = `https://dev.to/api/articles?username=${username}&state=all`;

    try {
        const articles = await request.get(apiURL);

        return JSON.parse(articles)
            .filter((a) => {
                const createdAt = new Date(a.created_at);
                return createdAt.getFullYear() == year;
            });
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
