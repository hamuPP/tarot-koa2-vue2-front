/**
 * Created by ty on 18/4/9.
 */

import * as common from '../CommonConst'
import axios from 'axios'
import json from '../../mockData/ballList.json';

const state = {
    ballLists: []
};
const getters = {
    ballLists: state => state.ballLists
};
const actions = {
    /**
     * 获取搜索消息数据
     * @param commit
     */
    getBallLists({commit}, {reqData}) {
        // // console.log(common);
        // let url = common.getUrl({url: common.GET_BALL_LIST_DATA});
        // // console.log(url);
        // reqData.url = url;
        // // let reqData = {};
        // axios(reqData)
        //     .then(res => {
        //         console.log(res)
        //         debugger;
        //     })
        //     .catch(e => {
        //         console.log(e)
        //         debugger;
        //     })
        console.log(json);
        commit(common.ALL_BALL_LIST_DATA, { data: json.data });
    },
};
const mutations = {
    [common.ALL_BALL_LIST_DATA](state, {data}) {
        debugger;
        state.ballLists = data;
    }
};
export default {
    state,
    getters,
    actions,
    mutations
};