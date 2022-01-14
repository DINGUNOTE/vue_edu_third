import Vue from 'vue';
import VueRouter from 'vue-router';
import UserView from '../views/UserView.vue';
import ItemView from '../views/ItemView.vue';
import createListView from '../views/CreateListView.js';
import bus from '../utils/bus.js';
import { store } from '../store/index.js';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history', // # 해쉬값 제거
  routes: [
    {
      path: '/', // 첫 페이지 설정
      redirect: '/news',
    },
    {
      // path: url 주소
      path: '/news',
      name: 'news',
      // component: url 주소로 갔을 때 표시 될 컴포넌트
      // component: NewsView,
      component: createListView('NewsView'),
      beforeEnter: (to, from, next) => {
        bus.$emit('start:spinner');
        store.dispatch('FETCH_LIST', to.name)
          .then(() => {
            console.log('fetched');
            bus.$emit('end:spinner');
            next();
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    {
      path: '/ask',
      name: 'ask',
      // component: AskView,
      component: createListView('AskView'),
      beforeEnter: (to, from, next) => {
        bus.$emit('start:spinner');
        store.dispatch('FETCH_LIST', to.name)
          .then(() => {
            console.log('fetched');
            bus.$emit('end:spinner');
            next();
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    {
      path: '/jobs',
      name: 'jobs',
      // component: JobsView,
      component: createListView('JobsView'),
      beforeEnter: (to, from, next) => {
        bus.$emit('start:spinner');
        store.dispatch('FETCH_LIST', to.name)
          .then(() => {
            // bus.$emit('end:spinner');
            next();
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    {
      path: '/user/:id',
      component: UserView,
    },
    {
      path: '/item/:id',
      component: ItemView,
    }
  ]
});