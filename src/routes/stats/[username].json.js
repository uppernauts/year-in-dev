import { getArticles } from './_devto.service';

export async function get(req, res, next) {
    const { username } = req.params;

    try {
        const articles = await getArticles(username);

        const stats = {
            totalArticles: articles.length,
            user: getUserData(username, articles),
            totalComments: countComments(articles),
            totalReactions: countReactions(articles),
            mostUsedTags: getMostUsedTags(articles)
        }

        console.log(stats);

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

const getUserData = (username, articles) => {
    if (articles.length == 0) {
        return {
            username: username
        };
    }

    return articles[0].user;
}

const countComments = (articles) => {
    return articles
        .map(a => a.comments_count)
        .reduce((sum, val) => sum + val, 0);
}

const countReactions = (articles) => {
    return articles
        .map(a => a.positive_reactions_count)
        .reduce((sum, val) => sum + val, 0);
}

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