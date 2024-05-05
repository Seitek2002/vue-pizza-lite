<script setup>
import PizzaBlock from '@/components/PizzaBlock.vue'
import Categories from '@/components/Categories.vue'
import Sort from '@/components/Sort.vue'
import { onMounted, ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const filteredPizzas = ref(store.state.filteredPizzas)

onMounted(() => {
    store.commit('setPizzas')
})
</script>

<template>
    <div class="content">
        <div class="container">
            <div class="content__top">
                <Categories />
                <Sort />
            </div>
            <h2 class="content__title">Все пиццы</h2>
            <div class="content__items">
                <PizzaBlock v-for="item in store.state.filteredPizzas" :key="item.id" :item="item" />
            </div>
        </div>
    </div>
</template>
