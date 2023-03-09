<template>
    <div class="d-flex flex-column flex-md-row align-items-center py-3 pb-3 mb-4 border-bottom">
        <a class="d-flex align-items-center text-dark text-decoration-none">
            <img :src="logo" alt="logo" style="width: 150px; cursor: pointer;" @click="toHomeEventHandle" />
        </a>

        <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
            <RouterLink :to="{name:'login'}" class="me-3 h5 py-2 text-dark text-decoration-none">
                Login
            </RouterLink>
            <RouterLink :to="{name:'register'}" class="me-3 h5 py-2 text-dark text-decoration-none">
                Register
            </RouterLink>
        </nav>
    </div>
</template>

<script>
import {logo} from '../constants'

export default {
    name: 'Navbar',
    data(){
        return {
            logo,
        }
    },
    methods: {
        toHomeEventHandle(){
            return this.$router.push({name:'home'})
        }
    }
}
</script>