import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { 
    faEnvelope,
    faFileArrowDown,
    faCircleInfo,
    faGlobe,
    faBook,
    faNoteSticky,
    faScaleBalanced,
    faTv,
    faUserTie,
    faMapLocationDot,
    faClose,
} from '@fortawesome/free-solid-svg-icons'

import { 
    faGithub,
    faLinkedin,
    faVuejs,
    faLaravel,
} from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(
    faEnvelope,
    faGithub,
    faLinkedin,
    faFileArrowDown,
    faCircleInfo,
    faGlobe,
    faBook,
    faNoteSticky,
    faScaleBalanced,
    faTv,
    faUserTie,
    faMapLocationDot,
    faClose,
    faVuejs,
    faLaravel
)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
