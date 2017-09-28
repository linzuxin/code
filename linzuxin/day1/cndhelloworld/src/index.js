import App from './pages/app/app.vue'
import router from './router'
import store from './stores'
new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
})