/**
 * Created by ty on 18/4/9.
 */
export const ALL_BALL_LIST_DATA = 'ALL_BALL_LIST_DATA';

// 请求地址 --start--
export const GET_BALL_LIST_DATA = 'mockData/ballList.json';
// 请求地址 --end--

export const getUrl = function(urlObj) {
    let url = urlObj.url;

    // 判断如果以json结尾的，则请求本地json,否则则请求服务器

    let actualUrl = `./${url}`;

    return actualUrl;
};