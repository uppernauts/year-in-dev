import { getArticles } from './_devto.service';

export async function get(req, res, next) {
    const { username } = req.params;

    try {
        const articles = await getArticles(username, 2019);

        const stats = {
            totalArticles: articles.length,
            user: getUserData(username, articles),
            totalComments: countComments(articles),
            totalReactions: countReactions(articles),
            mostUsedTags: getMostUsedTags(articles),
            mostLikedArticle: getMostLikedArticle(articles),
        };

        const tweetIntent = buildTweet(stats);
        stats.tweetIntent = tweetIntent;

        const metadata = buildMetadata(stats);
        stats.metadata = metadata;

        res.writeHead(200, {
            'Content-Type': 'application/json'
        });

        res.end(JSON.stringify(stats));
    }
    catch (err) {

        res.writeHead(err.statusCode || 500, {
            'Content-Type': 'application/json'
        });

        res.end(JSON.stringify({
            message: err.statusCode ? err.message : `There was an error retrieving the user's articles`
        }));
    }
}

/**
 * Get the user data from the first item article's array.
 * If the user didn't write any articles, return only the username.
 * @param {string} username 
 * @param {any[]} articles 
 */
const getUserData = (username, articles) => {
    if (articles.length == 0) {
        return {
            username: username
        };
    }

    return articles[0].user;
}

/**
 * Count the comments from every article.
 * @param {any[]} articles 
 */
const countComments = (articles) => {
    return articles
        .map(a => a.comments_count)
        .reduce((sum, val) => sum + val, 0);
}

/**
 * Count the reactions from every article.
 * @param {any[]} articles 
 */
const countReactions = (articles) => {
    return articles
        .map(a => a.positive_reactions_count)
        .reduce((sum, val) => sum + val, 0);
}

/**
 * Get the 3 most used tags.
 * @param {any[]} articles 
 */
const getMostUsedTags = (articles) => {
    const mapTags = articles
        .map(a => a.tag_list);

    const mergedTags = [].concat.apply([], mapTags);

    let ocurrences = {};

    for (const key in mergedTags) {
        const tag = mergedTags[key];
        ocurrences[tag] = ocurrences[tag] ? ocurrences[tag] + 1 : 1;
    }

    return Object.keys(ocurrences)
        .map(t => {
            return { tag: t, countTag: ocurrences[t] }
        })
        .sort((tagA, tagB) => tagB.countTag - tagA.countTag)
        .slice(0, 3)
        .map(t => t.tag);
}

/**
 * Get the article with the most positive reactions.
 * @param {any[]} articles 
 */
const getMostLikedArticle = (articles) => {
    if (articles.length == 0)
        return null;

    return articles
        .sort((articleA, articleB) => articleB.positive_reactions_count - articleA.positive_reactions_count)
    [0];
}

/**
 * Generates a tweet intent containing the most important info extracted from the user's stats.
 * @param {any} stats Current user's stats.
 */
const buildTweet = (stats) => {
    const tags = stats.mostUsedTags.map(t => `\#${t}`).join(" ");
    
    const tweetMessage = `My year in DEV:\n\n` + 
    `I wrote ${stats.totalArticles} articles, received ${stats.totalComments} comments and ${stats.totalReactions} reactions.\n\n` +
    `Favorite tags: ${tags}.\n\n`;

    const encodedMessage = encodeURIfix(tweetMessage.replace('\t', ''));

    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodedMessage}&url=https://year-in-dev.cephhi.com/stats/${stats.user.username}&hashtags=MyYearInDev,DEVcommunity`;

    return tweetUrl;
}

/**
 * Builds social metadata customized with user data to use in social media cards.
 * @param {any} stats 
 */
const buildMetadata = (stats) => {
    return {
        title: `@${stats.user.username}'s 2019 stats`,
        description: `Click to see ${stats.user.name}'s DEV.to 2019 highlights and check your own!`
    };
}

/**
 * Encodes string to be able to send it as query param.
 * @param {String} str String to encode
 */
function encodeURIfix (str) {
    return encodeURIComponent(str)
        .replace(/!/g, '%21')
        .replace(/\(/g, '%28')
        .replace(/\)/g, '%29');
}