<template>
    <div>
        <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
            <el-radio-button :label="false">展开</el-radio-button>
            <el-radio-button :label="true">收起</el-radio-button>
        </el-radio-group>
        <el-menu router class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-menu"></i>
                    <span slot="title">代码操作</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="/code/upload"><i class="el-icon-upload2"></i><span>上传代码</span></el-menu-item>
                    <el-menu-item index="/code/uploadIndex"><i class="el-icon-view"></i><span>查看代码</span></el-menu-item>
                </el-menu-item-group>
            </el-submenu>
        </el-menu>
    </div>
</template>
<style>
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        min-height: 500px;
    }
</style>

<script>
    export default {
        data() {
            return {
                isCollapse: true
            };
        },
        methods: {
            handleOpen(key, keyPath) {

            },
            handleClose(key, keyPath) {

            }
        }
    }
</script>