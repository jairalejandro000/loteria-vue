import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'
import { Button, InputNumber, RadioButton, RadioButtonGroup, Card, Dialog, } from 'primevue'


const app = createApp(App)
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
})
app.component('Button', Button)
app.component('InputNumber', InputNumber)
app.component('RadioButton', RadioButton)
app.component('RadioButtonGroup', RadioButtonGroup)
app.component('Card', Card)
app.component('Dialog', Dialog)
app.mount('#app')
