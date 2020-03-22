<template>
  <div class="about">
      <h1>{{id ? '编辑':'新建'}}文章</h1>
      <el-form lable-width='120px' @submit.native.prevent="save">
        <el-form-item label="所属分类">
            <el-select v-model="model.categories" multiple>
                <el-option
                    v-for="item in categories"
                    :key="item._id"
                    :label="item.name"
                    :value="item._id">
                    </el-option>
            </el-select>
        </el-form-item>  
        <el-form-item label="标题">
            <el-input v-model="model.title"></el-input>
        </el-form-item>

        <el-form-item label="详情">
            <el-input v-model="model.body"></el-input>
        </el-form-item>

        <el-form-item>
            <el-button type="primary" native-type="submit">保存</el-button>
        </el-form-item>
      </el-form>
  </div>
</template>

<script>
export default {
    props:{
        id:{}
    },
    data(){
        return {
            model:{},
            categories:[],
        }
    },
    methods:{
        afterUpload(res){
            // this.model.icon = res.url
            this.$set(this.model,'icon',res.url);//显示赋值
        },
        async save(){
            if(this.id){
                await this.$http.put(`rest/articles/${this.id}`,this.model)  
            }else{
                await this.$http.post("rest/articles",this.model)  
            }
            
            this.$router.push('/articles/list')
            this.$message({
                type:'success',
                message:'保存成功'
            })
        },
        async fetch(){
            const res = await this.$http.get(`rest/articles/${this.id}`)
            this.model = res.data;
        },
        async fetchCategories(){
            const res = await this.$http.get(`rest/categories`)
            this.categories = res.data;
        }
    },
    created(){
        this.fetchCategories();
        this.id&&this.fetch()
    }
}
</script>

<style>
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>