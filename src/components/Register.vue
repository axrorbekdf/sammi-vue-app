<template>
    <main class="form-signin w-25 m-auto">
        <form>
            <img :src="logo" alt="" style="width: 200px;">
            <h1 class="h2 mb-3 mt-3 fw-normal">Register</h1>
            
            <Input :label="'Name'" :type="'text'" :id="'floatingName'"/>

            <Input :label="'Email address'" :type="'email'" :id="'floatingEmail'"/>

            <Input :label="'Password'" :type="'password'" :id="'floatingPassword'"/>

            <Button type="submit" :disabled="isLoading" @click="setLoading">Register</Button>
        </form>
    </main>
</template>

<script>
import { logo } from '../constants';
export default{
    data(){
        return {
            logo
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
            // Mutations commit qilinadi
            // this.$store.commit('setLoading')

            // Actions dispatch qilinadi
            this.$store.dispatch('register')
        }
    }
}
</script>

<style>
</style>