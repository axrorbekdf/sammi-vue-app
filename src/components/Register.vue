<template>
    <main class="form-signin w-25 m-auto">
        <form>
            <img :src="logo" alt="" style="width: 200px;">
            <h1 class="h2 mb-3 mt-3 fw-normal">Register</h1>
            
            <ValidationError v-if="validationError" :validationError="validationError" />

            <Input 
                :label="'Name'" 
                :type="'text'" 
                :id="'floatingName'"
                v-model="username"
            />

            <Input 
                :label="'Email address'" 
                :type="'email'" 
                :id="'floatingEmail'"
                v-model="email"
            />

            <Input 
                :label="'Password'" 
                :type="'password'" 
                :id="'floatingPassword'"
                v-model="password"
            />

            <Button type="submit" :disabled="isLoading" @click="setLoading">Register</Button>
        </form>
    </main>
</template>

<script>
import { logo } from '../constants';
import ValidationError from './ValidationError.vue';

export default{
    data(){
        return {
            logo,
            email:'',
            password:'',
            username: '',
        }
    },
    components:{
        ValidationError
    },
    computed: {
        isLoading(){
            return this.$store.state.auth.isLoading
        },
        validationError(){
            return this.$store.state.auth.errors;
        }
    },
    methods: {
        setLoading(e){
            e.preventDefault();
            // Mutations lar commit qilinadi
            // this.$store.commit('setLoading')

            const user = {
                username: this.username,
                email: this.email,
                password: this.password
            }

            // Actions lar dispatch qilinadi
            this.$store.dispatch('register', user)
            .then(user => {
                this.$router.push({name:'home'})
            })
            .catch(error => console.log("ERROR: ", error))
        }
    }
}
</script>

<style>
</style>