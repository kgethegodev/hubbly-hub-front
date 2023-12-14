<script setup>
import {useUserStore} from "~/store/userStore.js";
import {storeToRefs} from "pinia";
const { authenticateUser  } = useUserStore();
const { authenticated } = storeToRefs(useUserStore())
const email = ref('')
const password = ref('')
const loginError = ref([])

const router = useRouter()
const login = async () => {
  loginError.value = []

  try{
    await authenticateUser(email.value,password.value)
    if(authenticated){
      router.push('/')
    }
  }
  catch (error){
    loginError.value = error.value.data.data
  }
}
</script>

<template>
  <div class="login-wrapper">
    <div class="login-form">
      <div class="form-container">
        <h1>Welcome to
        <span>the Hub</span>
        </h1>

        <div class="error-block" v-if="loginError.length > 0">
          <h2>Oooops! <br>Something went wrong.</h2>
          <ul>
            <li v-for="error in loginError">{{error}}</li>
          </ul>
        </div>

      <form action="">
        <div class="form-row">
          <hub-input type="email" name="email" :required="true" v-model="email"/>
          <hub-input type="password" name="password" :required="true" v-model="password" />
        </div>
        <button type="submit" @click.prevent="login" class="form-button">Login</button>
      </form>
    </div>
    </div>
    <div class="login-hero">
    </div>
  </div>
</template>

<style lang="scss">
.login-wrapper{
  display: flex;
  align-items: center;

  .login-form{
    width: 40%;
     .form-container{
       margin: 0 4rem;

       h1 {
         color: var(--color-accent)
       }

       .form-row{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 2rem;
        margin-bottom: 2rem;

        input {
          width: 100%;
        }
       }

       .form-button{
         display: block;
         width: 100%;
         border: none;
         background: none;
         box-shadow: none;
         background: var(--color-accent);
         padding: 1rem;
         border-radius: 1rem;
         @include font(1.8,null,black);
       }
     }
  }
  .login-hero{
    min-height: 100vh;
    width: 60%;
    background: url("/images/login/hero.jpg") center center;
    background-size: cover;
    border-radius: 4rem 0 0 4rem;
  }

  @include break-point('tablet-portrait'){
    flex-direction: column-reverse;

    .login-hero{
      width: calc(100% - 2rem);
      border-radius: 2.4rem;
      min-height: 20rem;
      background: url("/images/login/hero.jpg") top center;
      background-size: cover;
      margin-bottom: 4rem;
    }

    .login-form{
      width: 100%;
    }
  }
}

.error-block {
  margin-bottom: 4rem;

  *{
    color: var(--color-red);
  }

  ul {

    li {
      padding-left: 0;
      margin-left: 0;

      &:before{
        display: none;
      }
    }
  }
}
</style>
