<template>
    <ul>
        <li v-for="item in items" :key="item" :class="isActive === item ? 'active' : ''" @click="isActive = item">
            {{ item }} см.
        </li>
    </ul>
</template>

<script setup>
import { ref } from 'vue'

const items = ['26', '30', '40']

const isActive = ref('26')
</script>

<style></style>
