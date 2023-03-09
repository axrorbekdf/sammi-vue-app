<template>
    <main class="form-signin w-25 m-auto">
        <form>
            <img :src="logo" alt="" style="width: 200px;">
            <h1 class="h2 mb-3 mt-3 fw-normal">Login</h1>

            <Input :label="'Email address'" :type="'email'" :id="'floatingEmail'"/>

            <Input :label="'Password'" :type="'password'" :id="'floatingPassword'"/>

            <Button type="submit">Login</Button>
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
    }
}
</script>

<style>
</style>