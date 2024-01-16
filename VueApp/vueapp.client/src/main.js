// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import Vue3EasyDataTable from 'vue3-easy-data-table';

createApp(App)
.component('EasyDataTable', Vue3EasyDataTable)
.mount('#app')
