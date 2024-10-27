export default defineNuxtPlugin((nuxtApp) => {
  
    nuxtApp.hook('vue:error', (error, instance, info) => {
      console.log("========================error caught form vue:error hook")
    })

    nuxtApp.hook('app:error', (error, instance, info) => {
      console.log("========================error caught form app:error hook")
        
    })
  })