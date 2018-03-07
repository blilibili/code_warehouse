<template>
    <div class="form-upload">
        <el-table
                :data="codeData"
                border
                style="width: 100%">
            <el-table-column
                    prop="code_name"
                    label="代码名称"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="code_introce"
                    label="代码简介"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="type"
                    label="代码类型">
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button
                            type="primary"
                            size="mini"
                            @click="handleDownload(scope.$index, scope.row)">下载</el-button>
                    <el-button
                            size="mini"
                            type="danger"
                            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<style scoped>
    .form-upload{
        width: 50%;
        margin: 0 auto;
    }
    @media (max-width: 1200px) {
        .form-upload{
            width: 90%;
            margin: 0 auto;
        }
    }
</style>
<script>
    import {config} from '../../../api/globalConfig'
    import {requestCodeDel} from '../../../api/Code/codeDel'
    import {requestCodeGetAll} from '../../../api/Code/codeGetAll'
    import Bus from '../../assets/bus'
    export default {
        data() {
            return {
                codeData:[]
            }
        },
        mounted(){
            //发送轮滚条置顶
            Bus.$emit('next');
            requestCodeGetAll({} , this).then((res) => {
                this.codeData = res.data;
            })
        },
        components: {},
        methods: {
            handleDownload(index, row) {
                let filename = row.code_src.split('/')[1];
                let download_src = config.website + 'download/' + filename;
                window.location.href = download_src;
            },
            handleDelete(index, row) {
                let filename = row.code_src.split('/')[1];
                let data = {
                    id:row.id,
                    filename:filename
                };
                requestCodeDel(data , this).then((res) => {
                    config.returnResult(this , res.data.ret_code , "删除成功" , "删除失败,请检查服务器" , "/code/reload")
                })
            }
        }
    }
</script>