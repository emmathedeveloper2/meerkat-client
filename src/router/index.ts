import { createRouter, createWebHistory } from 'vue-router'
import { routes, handleHotUpdate } from 'vue-router/auto-routes'
import { LaunchParamsRetrieveError, retrieveLaunchParams } from '@telegram-apps/sdk'
import { useAuthStore } from '@/stores/auth'
import MeerkatAPIBridge from '@/lib/meerkat-api-bridge'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach(async (to, from, next) => {
  // Example of a global navigation guard

  const { tgWebAppData } = retrieveLaunchParams()

  if(from.fullPath == '/' && tgWebAppData?.start_param && tgWebAppData.user) {
    
    const data = tgWebAppData.start_param.split("_")

    if(data[0] == "ref" && data[1]){
      console.log("fetching")
      await MeerkatAPIBridge.giveReferralBonus(tgWebAppData.user.id.toString() , data[1])
    }
  }

  const auth = useAuthStore()

  const onWelcomePage = from.fullPath.startsWith('/')

  if (onWelcomePage) auth.user = tgWebAppData?.user

  if (!auth.isAuthorized && to.fullPath.startsWith('/main')) {
    return next('/connect')
  }

  next()
})

// router.afterEach((to, from) => {
//   const toDepth = to.path.split('/').length;
//   const fromDepth = from.path.split('/').length;
//   to.meta.transition = toDepth < fromDepth ? 'slide-right' : 'slide-left';
// })

router.onError((error, to, from) => {

  if (error instanceof LaunchParamsRetrieveError && to.fullPath !== '/connect') {
    console.error('Failed to retrieve launch parameters:', error)
    return
  }
})

export default router

if (import.meta.hot) {
  handleHotUpdate(router)
} 