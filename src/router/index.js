import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Favorites from '../pages/Favorites.vue'
import UserProfile from '../pages/UserProfile.vue'
// import HomeView from '../views/HomeView.vue'
import Signup from '../components/SignUp.vue'
import Signin from '../components/SignIn.vue'

// import Cars from '../views/Cars.vue'
// import { useAuthStore } from '../stores/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/favorites', name: 'Favorites', component: Favorites },
    { path: '/profile', name: 'UserProfile', component: UserProfile },
    // { path: '/', name: 'home', component: HomeView },
    { path: '/signup', name: 'signup', component: Signup, meta: { auth: false } },
    { path: '/signin', name: 'signin', component: Signin, meta: { auth: false } }
    // {
    //   path: '/cars',
    //   name: 'cars',
    //   component: Cars,
    //   meta: {
    //     auth: true
    //   }
    // }
  ]
})

// router.beforeEach((to, from, next) => {
//   const authStore = useAuthStore()

//   if (to.meta.auth && !authStore.userInfo.token) {
//     next('/signin')
//   } else if (!to.meta.auth && authStore.userInfo.token) {
//     next('/cars')
//   } else {
//     next()
//   }
// })

export default router
