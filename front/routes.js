import moto from './view/index.moto.vue'
import main from './view/index.2.vue'

const routes = [
    {
        path: '/moto',
        component: moto,
        meta: {title: '旧的首页'}
    },
    {
        path: '/',
        component: main,
        meta: {title: '首页'}
    },
];

export default routes
