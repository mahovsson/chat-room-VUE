import { ref } from 'vue'
import { projectAuth } from '../firebase/config'

// refs
const error = ref(null);

//logout function
const logout = async () => {
  error.value = null

  try {
    await projectAuth.signOut()
  }
  catch(err) {
    console.log(err.message)
    error.value = err.value
  }
}

const useLogout = () => {
  return { logout, error }
}

export default useLogout

