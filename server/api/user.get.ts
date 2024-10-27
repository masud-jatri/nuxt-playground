export default defineEventHandler( async (event) => {

    const photos = await $fetch('https://jsonplaceholder.typicode.com/photos' )
    return {
       photos
    }
  })