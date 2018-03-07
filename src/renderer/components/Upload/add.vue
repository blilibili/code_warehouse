<template>
    <div class="form-upload">
        <el-form :label-position="labelPosition" label-width="120px" :model="code">
            <el-form-item label="代码包名称">
                <el-input v-model="code.name"></el-input>
            </el-form-item>
            <el-form-item label="代码简介">
                <el-input v-model="code.introduction"></el-input>
            </el-form-item>
            <el-form-item label="语言类型">
                <template>
                    <el-radio v-model="code.type" label="vue">vue</el-radio>
                    <el-radio v-model="code.type" label="react">react</el-radio>
                    <el-radio v-model="code.type" label="java">java</el-radio>
                    <el-radio v-model="code.type" label="php">php</el-radio>
                    <el-radio v-model="code.type" label="node">node</el-radio>
                </template>
            </el-form-item>
            <el-form-item label="上传代码包">
                <el-upload
                        class="upload-demo"
                        drag
                        action="http://119.29.224.86:3002/code/upload"
                        :on-success="uploadSuccess"
                        multiple>
                    <i class="el-icon-upload"></i>
                    <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                    <div class="el-upload__tip" slot="tip">只能上传zip文件，且不超过500kb</div>
                </el-upload>
            </el-form-item>
            <el-form-item label="">
                <el-button type="primary" @click="submitHandler()">提交</el-button>
                <el-button>重置</el-button>
            </el-form-item>

        </el-form>
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
    import {requestCodeAdd} from '../../../api/Code/codeAdd'
    import Bus from '../../assets/bus'
    export default {
        data() {
            return {
                labelPosition: 'left',
                code: {
                    name: '',
                    introduction: '',
                    type: 'vue',
                    code_src:''
                }
            }
        },
        components: {},
        methods: {
            submitHandler(){
                requestCodeAdd(this.code , this).then((res) => {
                    if(res.data.ret_code == 0){
                        this.$message({
                            message: '提交成功',
                            type: 'success'
                        });
                        this.$router.replace("/code/uploadIndex");
                    }else{
                        this.$message.error('提交出错,请检查服务器');
                    }
                })
            },
            uploadSuccess(response, file, fileList){
                if(response.ret_code == 0){
                    this.$message({
                        message: '上传文件成功',
                        type: 'success'
                    });
                    this.code.code_src = response.path
                }else{
                    this.$message.error('上传出错,请检查服务器');
                }
            }
        },
        mounted(){
            //发送轮滚条置顶
            Bus.$emit('next');
        }
    }
</script>