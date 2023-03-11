<template>
    <main class="form-signin w-25 m-auto">
        <form>
            <img :src="logo" alt="" style="width: 200px;">
            <h1 class="h2 mb-3 mt-3 fw-normal">Login</h1>

            <ValidationError v-if="validationError" :validationError="validationError"/>

            <Input v-model="email" :label="'Email address'" :type="'email'" :id="'floatingEmail'"/>

            <Input v-model="password" :label="'Password'" :type="'password'" :id="'floatingPassword'"/>

            <Button type="submit" :disabled="isLoading" @click="setLoading">Login</Button>
        </form>
    </main>
</template>

<script>
import {mapState} from 'vuex'
import { logo } from '../constants';
import ValidationError from './ValidationError.vue';
export default{
    data(){
        return {
            logo,
            email: '',
            password: ''
        }
    },
    components: {
        ValidationError
    },
    computed: {
        ...mapState({
            isLoading: state => state.auth.isLoading,
            validationError: state => state.auth.errors
        }),
        // isLoading(){
        //     return this.$store.state.auth.isLoading
        // },
        // validationError(){
        //     return this.$store.state.auth.errors
        // }
    },
    methods: {
        setLoading(e){
            e.preventDefault();
            // Mutations lar commit qilinadi
            // this.$store.commit('setLoading')

            const user = {
                email: this.email,
                password: this.password
            }

            // Actions lar dispatch qilinadi
            this.$store.dispatch('login', user)
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