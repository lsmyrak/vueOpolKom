<template>
    <h1>Vue 3 and Fetch test</h1>

    <template>
        <ul v-if="!loading && data && data.length">
            {console.log(data.length)}
            <li v-for="user in data" :key="user.firstName">
                <p><strong>user</strong></p>
                <h1>{data}</h1>
                <p></p>
            </li>
        </ul>

        <p v-if="loading">
            Still loading..
        </p>
        <p v-if="error">
        </p>
    </template>
</template>
<script>
import { ref, onMounted } from "vue"
export default {
    name: 'UserList',
    props: {

    },
    setup() {
        const data = ref(null);
        const loading = ref(true);
        const error = ref(null);

        function getData() {
            fetch('http://lsmyrak.duckdns.org:8080/api/Admin/get-all-user', {
                headers: { 'Content-type': 'application/json' },
            }).then(res => res.json()).then((response) => {
                data.value = {response};         
            }).catch((error) => {
                console.log('Looks like there was a problem: \n', error);
            });
        }

        onMounted(() => {
            getData();
        });
        return {
            data,
            loading,
            error
        };
    }
}
</script>