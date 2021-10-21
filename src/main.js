import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// add primevue library components 
import "primevue/resources/themes/saga-blue/theme.css"    
import "primevue/resources/primevue.min.css"              
import "primeicons/primeicons.css"
import InputText from "primevue/inputtext"
import Button from "primevue/button"
import Password from "primevue/password"
import Dialog from 'primevue/dialog';
import PrimeVue from 'primevue/config';
import Toaster from '@meforma/vue-toaster';

createApp(App)
.use(store)
.use(router)
.use(PrimeVue)
.use(Toaster)
.component("InputText", InputText)
.component("Button", Button)
.component("Password", Password)
.component('Dialog', Dialog)
.mount("#app");
