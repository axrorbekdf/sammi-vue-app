<template>
    <main class="form-signin w-25 m-auto">
        <form>
            <img :src="logo" alt="" style="width: 200px;">
            <h1 class="h2 mb-3 mt-3 fw-normal">Register</h1>
            
            <Input 
                :label="'Name'" 
                :type="'text'" 
                :id="'floatingName'"
                :error="errors.username"
            />

            <Input 
                :label="'Email address'" 
                :type="'email'" 
                :id="'floatingEmail'"
                :error="errors.email"
            />

            <Input 
                :label="'Password'" 
                :type="'password'" 
                :id="'floatingPassword'"
                :error="errors.password"
            />

            <Button type="submit" :disabled="isLoading" @click="setLoading">Register</Button>
        </form>
    </main>
</template>

<script>
import { logo } from '../constants';
export default{
    data(){
        return {
            logo,
            email:'',
            password:'',
            username: '',
            errors: {
                email: null,
                username: null,
                password: null,
            },
        }
    },
    computed: {
        isLoading(){
            return this.$store.state.auth.isLoading
        }
    },
    methods: {
        setLoading(e){
            e.preventDefault();
            // Mutations lar commit qilinadi
            // this.$store.commit('setLoading')

            const user = {
                username: 'testkiasdasd546',
                email: 'testkasdasdi546@ki.ki',
                password: '12345678'
            }

            // Actions lar dispatch qilinadi
            this.$store.dispatch('register', user)
            .then(user => console.log("USER: ", user))
            .catch(error => {
                console.log("ERROR: ",error.username[0])  
            })
        }
    }
}
</script>

<style>
</style>