<template>
    <v-app>
        <v-app-bar app>
            <v-toolbar-title class="headline text-uppercase">
                <span>VueJS</span>
                <span class="font-weight-light"></span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn text
                   href="https://github.com/vuetifyjs/vuetify/releases/latest"
                   target="_blank">
                <span class="mr-2">Sample Test</span>
            </v-btn>
        </v-app-bar>

        <v-content>
            <!--<HelloWorld />-->
            <router-view />
        </v-content>
        <v-footer :fixed="fixed" app>
            <span>Anil Vaghasiya - VueJS Sample Test &copy; 2019</span>
        </v-footer>
    </v-app>
</template>

<script>
    //import HelloWorld from './components/HelloWorld';

    export default {
        name: 'App',
        //components: {
        //  HelloWorld,
        //},
        data: () => {
            return ({
                clipped: true,
                fixed: true,
                drawer: false,
                miniVariant: false
            })
        },
        methods: {
            gotoOption(route) {
                this.$router.push(route)
            }
        },
    };
</script>
