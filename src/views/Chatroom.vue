<template>
  <div class="chatroom container">
    <NavBar />
    <ChatWindow />
    <NewChatForm />
  </div>
</template>

<script>

import { watch } from 'vue'
import { useRouter } from 'vue-router'
import NavBar from '../components/NavBar'
import getUser from '../composables/getUser'
import NewChatForm from '../components/NewChatForm'
import ChatWindow from '../components/ChatWindow'

export default {
  components: { NavBar, NewChatForm, ChatWindow },
  setup() {
    const router = useRouter()
    const { user } = getUser()

    // if the user value is ever null, redirect to welcome screen
    watch(user, () => {
      if (!user.value) {
        router.push({ name: 'Welcome' })
      }
    })
  }
}
</script>

<style>

</style>