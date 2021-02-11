<template>
  <nav v-if="user">
    <div>
      <p>Hey there <span class="name">{{ user.displayName }}</span></p>
      <p class="email">Currently logged in as {{ user.email }}</p>
    </div>
    <button @click="handleLogout">Logout</button>
  </nav>
</template>

<script>
import useLogout from '../composables/useLogout'
import getUser from '../composables/getUser'
import { useRouter } from 'vue-router'

export default {
  setup () {
    const { logout, error } = useLogout()
    const { user } = getUser()

    const handleLogout = async () => {
      await logout()
    }

    return { handleLogout, user }
  }
}
</script>

<style>
nav {
    padding: 20px;
    border-bottom: 1px solid #18191a;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  nav p {
    margin: 2px auto;
    font-size: 20px;
    color: #ffff;
  }
  nav p.email {
    font-size: 16px;
    color: #bfbfbf;
  }
  span.name{
    font-weight: bold;
  }
</style>