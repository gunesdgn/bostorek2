import 'bootstrap/dist/css/bootstrap.min.css';
import '@/assets/styles.css';
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'


/* add icons to the library */
library.add(faArrowLeft,faThumbsUp)



import {createApp} from "vue";
import App from "@/App.vue";
import router from "@/router/index.js";


const app=createApp(App);
app.use(router).component('font-awesome-icon', FontAwesomeIcon).mount("#app");