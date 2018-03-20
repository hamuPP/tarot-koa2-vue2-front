// import moto from './view/index.moto.vue'
// import main from './view/index.2.vue'

import Index from '../components/index/index.vue'

const routes = [
    {
        path: '/',
        redirect: '/index'
    },
    // {
    //     path: '/moto',
    //     component: moto,
    //     meta: {title: '旧的首页'}
    // },
    {
        path: '/index',
        component: Index,
        meta: {title: '首页CC'}
    },
];

export default routes
