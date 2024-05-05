<template>
    <ul>
        <li v-for="item in items" :key="item" :class="isActive === item ? 'active' : ''" @click="isActive = item">
            {{ item }}
        </li>
    </ul>
</template>

<script setup>
import { ref } from "vue"

const items = [
    'тонкое',
    'традиционное'
]

const isActive = ref('тонкое')

</script>

<style></style>
