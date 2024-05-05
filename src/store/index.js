import { createStore } from 'vuex'

export default createStore({
    state() {
        return {
            pizzas: [
                {
                    id: 0,
                    name: 'Бургер-пицца',
                    price: 445,
                    imgUrl: 'https://dodopizza-a.akamaihd.net/static/Img/Products/c84a4190f97d4364ad2b614bd0d26297_366x366.webp',
                    category: 'Закрытые',
                },
                {
                    id: 1,
                    name: 'Цыпленок карри',
                    price: 475,
                    imgUrl: 'https://dodopizza-a.akamaihd.net/static/Img/Products/f88f70774bdc4a198379c2f53b42f48f_366x366.webp',
                    category: 'Гриль',
                },
                {
                    id: 2,
                    name: 'Сырная',
                    price: 295,
                    imgUrl: 'https://dodopizza-a.akamaihd.net/static/Img/Products/e2393e247dc64ecbbf23c82243c0a399_366x366.webp',
                    category: 'Вегетарианская',
                },
                {
                    id: 3,
                    name: 'Ветчина и сыр',
                    price: 295,
                    imgUrl: 'https://dodopizza-a.akamaihd.net/static/Img/Products/3fe12c4bb05c470c9cb45fb423b7c049_366x366.webp',
                    category: 'Мясные',
                },
                {
                    id: 4,
                    name: 'Пепперони Фреш',
                    price: 325,
                    imgUrl: 'https://dodopizza-a.akamaihd.net/static/Img/Products/525becd5f6d845ea9f83af0af7e44eea_366x366.webp',
                    category: 'Мясные',
                },
                {
                    id: 5,
                    name: 'Двойной цыпленок',
                    price: 325,
                    imgUrl: 'https://dodopizza-a.akamaihd.net/static/Img/Products/f351d4358f134c31b5bed9093faf38e3_366x366.webp',
                    category: 'Гриль',
                },
                {
                    id: 6,
                    name: 'Ветчина и грибы',
                    price: 445,
                    imgUrl: 'https://dodopizza-a.akamaihd.net/static/Img/Products/be07674c38c54fd78f878a33988a4373_366x366.webp',
                    category: 'Мясные',
                },
                {
                    id: 7,
                    name: 'Маргарита',
                    price: 445,
                    imgUrl: 'https://dodopizza-a.akamaihd.net/static/Img/Products/3f19abd29d2a477a960992ec2f30782c_366x366.webp',
                    category: 'Вегетарианская',
                },
            ],
            filteredPizzas: [],
            cart: []
        }
    },
    getters: {
        getFilteredPizzas: (state) => (data) => {
            if (data === 'Все') {
                return state.pizzas
            } else {
                return state.pizzas.filter(item => item.category === data)
            }
        },
        getSortPizzas: (state) => (data) => {
            if (data === 'цене') {
                return state.pizzas.slice().sort((a, b) => a.price - b.price)
            } else if (data === 'алфавиту') {
                return state.pizzas.slice().sort((a, b) => {
                    const nameA = a.name.toUpperCase()
                    const nameB = b.name.toUpperCase()
                    if (nameA < nameB) {
                        return -1
                    }
                    if (nameA > nameB) {
                        return 1
                    }
                    return 0
                })
            } else {
                return state.pizzas
            }
        },
        getCartPizzasQnty(state) {
            return state.cart.reduce((a,b) => a + b.counter, 0)
        },
        getCartPizzasPrice(state) {
            return state.cart.reduce((a,b) => a + (b.counter * b.price), 0)
        }
    },
    mutations: {
        setPizzas(state) {
            state.filteredPizzas = state.pizzas
        },
        setFilteredPizzas(state, data) {
            state.filteredPizzas = data
        },
        setSortedPizzas(state, data) {
            state.filteredPizzas = data
        },
        setCart(state, data) {
            if(!state.cart.find(item => item.name === data.name)) {
                state.cart.push({...data, counter: 1})
            }
            else {
                state.cart = state.cart.map(item => {
                    if(item.name === data.name) {
                        return {...item, counter: item.counter + 1}
                    }
                    else {
                        return item
                    }
                })
            }
        },
        increasePizzasCounter(state, data) {
            state.cart = state.cart.map(item => {
                if(item.name === data.name) {
                    return {...item, counter: item.counter + 1}
                }
                else {
                    return item
                }
            })
        },
        decreasePizzasCounter(state, data) {
            state.cart = state.cart.map(item => {
                if(item.name === data.name) {
                    return {...item, counter: item.counter - 1}
                }
                else {
                    return item
                }
            })
        },
        removeCartPizza(state, data) {
            state.cart = state.cart.filter(item => item.name !== data.name)
        },
        clearCart(state) {
            state.cart = []
        }
    },
})
