// src/main.js
import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router'; // Import the router

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* import specific icons */
import { 
    faBook,
    faCircleInfo,
    faClose,
    faEnvelope,
    faFileArrowDown,
    faGlobe,
    faList,
    faLock,
    faMapLocationDot,
    faNoteSticky,
    faRobot,
    faScaleBalanced,
    faComment,
    faTv,
    faUserTie,
} from '@fortawesome/free-solid-svg-icons';

import { 
    faGithub,
    faLaravel,
    faLinkedin,
    faNode,
    faReact,
    faVuejs,
} from '@fortawesome/free-brands-svg-icons';

/* add icons to the library */
library.add(
    faBook,
    faCircleInfo,
    faClose,
    faEnvelope,
    faFileArrowDown,
    faGithub,
    faGlobe,
    faLaravel,
    faLinkedin,
    faList,
    faLock,
    faMapLocationDot,
    faNode,
    faNoteSticky,
    faReact,
    faRobot,
    faScaleBalanced,
    faComment,
    faTv,
    faUserTie,
    faVuejs,
);

createApp(App)
    .use(router)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app');
