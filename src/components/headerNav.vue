<style scoped lang="less">
    @import '../assets/css/header.less';
</style>
<template>
    <Col :xs="24">
    <router-link to="/" class="wrapper-header-nav-logo">
        <img class="logo-img" src="http://pic.jusctice.cn/icons/tarot_logo.png">
    </router-link>

    <div class="wrapper-header-nav-list">
        <Menu mode="horizontal" active-name="1">
            <MenuItem name="1">
                AA
            </MenuItem>
            <MenuItem name="2">
                BB
            </MenuItem>
            <MenuItem name="3">
                CC
            </MenuItem>
            <MenuItem name="4">
                DD
            </MenuItem>
        </Menu>
    </div>

    <div class="header-sider-toggle">
        <Icon
                @click.native="collapsedSider"
                :class="rotateIcon"
                :style="{margin: '20px 20px 0'}"
                type="navicon-round"
                size="24"></Icon>
    </div>


    <div class="wrapper-header-nav-search">
        <i-input v-model="searchValue" placeholder="搜索牌意">
            <Button slot="append" icon="ios-search"></Button>
        </i-input>
    </div>

    </Col>
</template>

<script>
    export default{
        data() {
            return {
                isCollapsed: false,
                searchValue: '',
                theme1: 'light'
            }
        },
        components: {},
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

            collapsedSider () {
//                this.$refs.side1.toggleCollapse();
                console.log(333);
            }
        },
        created() {

        },
    }
</script>