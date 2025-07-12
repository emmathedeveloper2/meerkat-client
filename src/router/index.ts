import { createRouter, createWebHistory } from 'vue-router'
import { routes, handleHotUpdate } from 'vue-router/auto-routes'
import { LaunchParamsRetrieveError, retrieveLaunchParams } from '@telegram-apps/sdk'
import { useAuthStore } from '@/stores/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  // Example of a global navigation guard
  const { tgWebAppData } = retrieveLaunchParams()

  const auth = useAuthStore()

  const goingToMainPage = to.fullPath.startsWith('/main')

  if(goingToMainPage) auth.user = tgWebAppData?.user
  
  if(!auth.isAuthorized && goingToMainPage){
      return next('/connect')
  }

  next()
})

router.onError((error , to , from) => {
  
  if (error instanceof LaunchParamsRetrieveError && to.fullPath !== '/connect') {
    console.error('Failed to retrieve launch parameters:', error)
    return
  }
})

export default router

if (import.meta.hot) { 
  handleHotUpdate(router) 
} 