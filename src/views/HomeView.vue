<template>
  <div class="home">
      <div class="nav">
          <div class="pic">
              <img src="http://localhost:8080/imgs/images/img_02.png" alt="">
          </div>
      </div>
  </div>
</template>

<script lang="ts" setup>
import {home_http} from "@/api/httpHome"
// import { defineComponent ,ref} from "vue";
import {ref} from "vue"

let mount = ref("hello")
home_http().then(res=>console.log("---22---",res));

</script>

<style lang="scss" scoped>
    .home{
      .nav{
        .pic{
          width: 375px;
          height: 296px;
          img{
            width: 100%;
            height: 100%;
          }
        }
      }
    }

</style>