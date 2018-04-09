<style scoped lang="less">
    /*@import './assets/css/'*/
    .menu-icon{
        transition: all .3s;
    }
    .rotate-icon{
        transform: rotate(-90deg);
    }
    .menu-item span{
        display: inline-block;
        overflow: hidden;
        width: 69px;
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: bottom;
        transition: width .2s ease .2s;
    }
    .menu-item i{
        transform: translateX(0px);
        transition: font-size .2s ease, transform .2s ease;
        vertical-align: middle;
        font-size: 16px;
    }
    .collapsed-menu span{
        width: 0px;
        transition: width .2s ease;
    }
    .collapsed-menu i{
        transform: translateX(5px);
        transition: font-size .2s ease .2s, transform .2s ease .2s;
        vertical-align: middle;
        font-size: 22px;
    }
</style>
<template>
    <div class="main-wrapper">
        <Layout>
            <Row class="main-header" type="flex" justify="center">
                <HeaderNav></HeaderNav>
            </Row>
            <!--<Header class="main-header">-->
                <!--<HeaderNav></HeaderNav>-->
            <!--</Header>-->

            <Layout>
                <Content class="main-content">
                    <router-view></router-view>
                </Content>

                <!--<Sider-->
                        <!--ref="side1"-->
                       <!--hide-trigger-->
                       <!--collapsible-->
                       <!--:collapsed-width="0"-->
                       <!--v-model="isCollapsed">-->

                    <!--<Menu active-name="1-2" theme="dark" width="auto" :class="menuitemClasses">-->
                        <!--<MenuItem name="1-1">-->
                            <!--<Icon type="ios-navigate"></Icon>-->
                            <!--<span>Option 1</span>-->
                        <!--</MenuItem>-->
                        <!--<MenuItem name="1-2">-->
                            <!--<Icon type="search"></Icon>-->
                            <!--<span>Option 2</span>-->
                        <!--</MenuItem>-->
                        <!--<MenuItem name="1-3">-->
                            <!--<Icon type="settings"></Icon>-->
                            <!--<span>Option 3</span>-->
                        <!--</MenuItem>-->
                    <!--</Menu>-->
                <!--</Sider>-->
            </Layout>

            <Footer class="main-footer">Footer</Footer>
        </Layout>
    </div>
</template>

<script>
    import HeaderNav from './components/headerNav.vue'

    export default{
        data() {
            return {
                isCollapsed: false
            }
        },
        components: {
            HeaderNav
        },
        computed: {
            rotateIcon () {
                return [
                    'menu-icon',
                    this.isCollapsed ? 'rotate-icon' : ''
                ];
            },
            menuitemClasses () {
                return [
                    'menu-item',
                    this.isCollapsed ? 'collapsed-menu' : ''
                ]
            }
        },
        methods: {

        },
        created() {

        },
    }
</script>
