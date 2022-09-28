<template>
    <div>
        <!-- 主体 -->
        <router-view></router-view>
        <TabBar></TabBar>
    </div>
</template>

<script lang="ts" setup>
import TabBar from "@/components/tabbar/TabBar.vue"
</script>