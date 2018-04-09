<style scoped lang="less">
    @import '../../assets/css/index.less';
</style>
<template>
    <div class="homepage">
        <div class="big-background-image">
            <!--<div class="modal">顶顶顶顶方法</div>-->
            <div class="modal"></div>
        </div>
        <div class="divine-introduction">
            <!-- 在线占卜 -->
            <Row class="row">
                <i-col :xs="24">
                    <h3 class="divine-introduction-title">牌型介绍/在线占卜</h3>
                    <small class="right-title-info">
                        <span>精选常用款式</span>
                        <a class="see-more" href="/divine">更多牌型 > </a>
                    </small>
                    <div class="content-line-box">
                        <img class="content-line" src="../../assets/images/content_line.png" alt=""/>
                    </div>
                    <div class="ball-nav" ref="recommenNav" @click="ballNavClick">
                        <a v-for="item in ballLists"
                           href="javascript:;" class="item" :class="item.className" :key="item.id" :data-id="item.id" >{{item.title}}</a>
                        <!--<a href="javascript:;" class="item" data-id="money">-->
                            <!--财运-->
                        <!--</a>-->
                        <!--<a href="javascript:;" class="item" data-id="love">-->
                            <!--爱情-->
                        <!--</a>-->
                        <!--<a href="javascript:;" class="item active" data-id="random">-->
                            <!--没想好？随便看看-->
                        <!--</a>-->
                        <!--<a href="javascript:;" class="item" data-id="career">-->
                            <!--工作事业-->
                        <!--</a>-->
                        <!--<a href="javascript:;" class="item" data-id="study">-->
                            <!--学业-->
                        <!--</a>-->
                    </div>
                    <!-- 具体牌型-->
                    <div class="recommend-divine overflow-hide" id="recommendDivine">

                        <!-- 随便看看分类下的-->
                        <div class="content overflow-hide" id="recommendRandom">
                            <div class="col-xs-6 col-sm-4 col-md-2 item">
                                <a class="content" href="/divineDetail?cardsForm=心理自测&defaultPaizu=全78张牌" target="_blank">
                                    <h4>
                                        <i class="fa fa-pagelines fa-inverse" style="color: #00A76F;"></i>
                                        心里自测</h4>
                                    <p>测自我精神状态、当下的情绪好恶</p>
                                </a>
                            </div>
                            <div class="col-xs-6 col-sm-4 col-md-2 item">
                                <a class="content" href="/divineDetail?cardsForm=每日动向&defaultPaizu=全78张牌" target="_blank">
                                    <h4>
                                        <i class="fa fa-pagelines fa-inverse" style="color: #00A76F;"></i>
                                        每日动向</h4>
                                    <p>今日有什么事难以决定，又事关重要？</p>
                                </a>
                            </div>
                            <div class="col-xs-6 col-sm-4 col-md-2 item">
                                <a class="content" href="/divineDetail?cardsForm=是否判断&defaultPaizu=全78张牌" target="_blank">
                                    <h4>
                                        <i class="fa fa-balance-scale fa-inverse" style="color: #00A76F;"></i>
                                        是否判断</h4>
                                    <p>对一个问题进行"是"或"否"的判断</p>
                                </a>
                            </div>
                            <div class="col-xs-6 col-sm-4 col-md-2 item">
                                <a class="content" href="/divineDetail?cardsForm=一周大势&defaultPaizu=全78张牌" target="_blank">
                                    <h4>
                                        <i class="fa fa-smile-o fa-inverse" style="color: #00A76F;"></i>
                                        一周大势</h4>
                                    <p>一周内对你影响重大之事</p>
                                </a>
                            </div>
                            <div class="col-xs-6 col-sm-4 col-md-2 item">
                                <a class="content" href="/divineDetail?cardsForm=今日运程&defaultPaizu=全78张牌" target="_blank">
                                    <h4>
                                        <i class="fa fa-leaf fa-inverse" style="color: #00A76F;"></i>
                                        今日运程</h4>
                                    <p>今日可能发生之事情，及影响</p>
                                </a>
                            </div>
                        </div>

                        <!-- 财运-->
                        <div class="content overflow-hide" id="recommendMoney" style="display: none;">

                            <p>尚未收录</p>



                        </div>

                        <!-- 爱情-->
                        <div class="content overflow-hide" id="recommendLove" style="display: none;">
                            <div class="col-xs-6 col-sm-4 col-md-2 item">
                                <a class="content" href="/divineDetail?cardsForm=V字形(2择1)&defaultPaizu=全78张牌" target="_blank">
                                    <h4>
                                        <i class="fa fa-balance-scale fa-inverse" style="color: #ee4a76;"></i>
                                        V字形(2择1)</h4>
                                    <p>专门用于解决两难的选择</p>
                                </a>
                            </div>
                            <div class="col-xs-6 col-sm-4 col-md-2 item" >
                                <a class="content" href="/divineDetail?cardsForm=爱情前途&defaultPaizu=全78张牌" target="_blank">
                                    <h4>
                                        <i class="fa fa-heart fa-inverse" style="color: #ee4a76;"></i>
                                        爱情前途
                                    </h4>
                                    <p>情侣给你的感觉、爱情的前景</p>
                                </a>
                            </div>
                            <div class="col-xs-6 col-sm-4 col-md-2 item">
                                <a class="content" href="/divineDetail?cardsForm=一生情运&defaultPaizu=全78张牌" target="_blank">
                                    <h4>
                                        <i class="fa fa-intersex fa-inverse" style="color: #ee4a76;"></i>
                                        一生情运</h4>
                                    <p>你一生爱情之路的纵观</p>
                                </a>
                            </div>
                        </div>

                        <!-- 工作-->
                        <div class="content overflow-hide" id="recommendCareer" style="display: none;">

                            <p>尚未收录</p>
                        </div>

                        <!-- 学业-->
                        <div class="content overflow-hide" id="recommendStudy" style="display: none;">
                            <p>尚未收录</p>
                        </div>

                    </div>

                    <!-- 查看所有卡牌意思-->
                    <h3 class="text-center mt50">卡牌含义</h3>
                    <div class="content-line-box">
                        <img class="content-line" src="imgs/content_line.png" alt=""/>
                    </div>

                    <ul class="media-list overflow-hide custom" id="cardsList">

                    </ul>
                    <div class="cards-other-cards mtb15" id="otherCards">
                        <a href="/itemDetail?sItemId=card-5" target="_blank">皇帝</a>
                        <a href="/itemDetail?sItemId=card-6" target="_blank">教主</a>
                        <a href="/itemDetail?sItemId=card-7" target="_blank">情侣</a>
                        <a href="/itemDetail?sItemId=card-8" target="_blank">战车</a>
                        <a href="/itemDetail?sItemId=card-9" target="_blank">力量</a>
                        <a href="javascript:;" id="showMoreCards">↓显示更多</a>
                    </div>
                </i-col>
            </Row>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default{
        computed: mapGetters({
            ballLists: 'ballLists',
        }),
        components: {},

        data() {
            return {
                msg: '傻吊',
            }
        },

        methods: {
            /**
             * 点击中间的圆圈导航，切换选择状态和下方的数据
             */
            ballNavClick(evt) {
                let that = this;

                let e = evt || window.event;
                let target = e.target || e.srcElement;
                console.log(target);
                // 仅当点击的是a标签时，才进行后续操作
                if (target.tagName.toLowerCase() !== 'a') { return; }
                let dataId = target.dataset.id;// career-工作事业;love-爱情;money-财运;study-学业
                console.log(dataId);
            }
        },

        created() {
            let that = this;
            // 获取ballLists的数据，用于显示在页面中间的圆圈导航
            let reqData = {

            };
            that.$store.dispatch('getBallLists', {reqData});
        },

        mounted() {}
    }
</script>