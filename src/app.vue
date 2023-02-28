<template>
    <div class="container">Hello Word!</div>
    <el-button>按钮</el-button>
    <van-uploader :after-read="afterRead"></van-uploader>
</template>

<script>
import * as imageConversion from 'image-conversion';

export default {
    setup() {
        //把图片文件作为参数传递到方法中
        const afterRead = (file) => {
            console.log(file)
            
            const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
                const isLt2M = file.size / 1024 / 1024 < 2;
                // if (!isJpgOrPng) {
                //     return false;
                // }
                // if (!isLt2M) {
                //     return false;
                // }
                return new Promise((resolve) => {
                    // 压缩到100KB,这里的100就是要压缩的大小,可自定义
                    imageConversion.compressAccurately(file.file, 180).then(res => {
                        console.log(res)
                        getBase64(res).then((res)=>{
                            console.log(res)
                        })
                        console.log(getBase64(res))
                        resolve(res);
                    });
                    //compressAccurately有多个参数时传入对象
                    //imageConversion.compressAccurately(file, {
                        // size: 1024, //图片大小压缩到1024kb
                        // width:1280 //宽度压缩到1280
                    //}).then(res => {
                            //resolve(res)
                    //})
                })
            }

            const getBase64 = (blob)=>{

                return new Promise((resolve, reject) => {

                const reader = new FileReader();
                const loj =  new File([blob], 'cover.png', { type: 'image/jpeg' })
                console.log(loj)
                reader.readAsDataURL(loj);
                reader.onload = () => resolve(console.log('@',reader.result));
                reader.onerror = error => reject(error);

                });
            }
            return{
                afterRead,
                getBase64
            }
    }
}
</script>

<style lang="less">
div{
    color: pink;
}
</style>