<template>
    <div class="main-content-wrapper">
        <Row class="header">
            <Col span="24">
            <i-button>Default</i-button>
            <Button type="primary">Primary</Button>
            <Button type="ghost">Ghost</Button>
            <Button type="dashed">Dashed</Button>
            <Button type="text">Text</Button>
            <br><br>
            <Button type="info">Info</Button>
            <Button type="success">Success</Button>
            <Button type="warning">Warning</Button>
            <Button type="error">Error</Button>
            </Col>
        </Row>
        <router-view></router-view>
        <div class="footer"></div>
    </div>
</template>

<script>
    export default{
        created() {
            debugger
        },
    }
</script>
