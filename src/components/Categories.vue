<template>
    <div class="categories">
        <ul>
            <li
                v-for="item in categories"
                :key="item"
                :class="isActive === item ? 'active' : ''"
                @click="handleEmits(item)"
            >
                {{ item }}
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex';
const store = useStore()

const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

const isActive = ref('Все')

const handleEmits = (item) => {
    isActive.value = item
    store.commit('setFilteredPizzas', store.getters.getFilteredPizzas(item))
}

</script>

<style scoped>
.categories {
    overflow-x: auto;
    /* min-height: 100%; */
}
</style>