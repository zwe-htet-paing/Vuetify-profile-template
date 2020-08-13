<template>   
    <div>
        <!-- Add navigation bar-->
        <v-app-bar>
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>Profile Managment</v-toolbar-title>

            <v-spacer></v-spacer>
        <!-- Add avater image to nav bar-->
            <v-avatar>
                <v-img src="https://cdn.vuetifyjs.com/images/lists/2.jpg"></v-img>
            </v-avatar>

        <!--Add menu to nav bar -->
            <v-menu>
                <template v-slot:activator="{on, attrs}">
                    <v-btn icon v-bind="attrs" v-on="on">
                        <v-icon color="">mdi-menu-down</v-icon>
                    </v-btn>
                </template>

                <v-list>
                    <v-list-item v-for="item in items" :key="item.title">
                        <v-list-item-title> {{ item.title }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-app-bar>

        


        <!-- Add navigation drawer -->
        <v-navigation-drawer v-model="drawer" absolute fixed temporary> 
            <v-list>
                <v-list-item-group>
                    <v-list-item v-for="link in links" :key="link.title" router :to="link.route">
                        <v-list-item-icon>
                            <v-icon>{{link.icon}}</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>{{ link.title }}</v-list-item-title>
                    </v-list-item>

                    
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
    </div>
        
</template>

<script>
export default {
    data () {
        return {
            drawer: false,
            items: [
                {title: 'Change password'},
                {title: 'Logout'},
            ],
            links: [
                {icon: "mdi-home", title:"Login", route:"/login"},
                {icon: "mdi-account", title:"Account", route:"/profile"},
                {icon: "mdi-home", title:"Work Progress", route:"/workprogress"},
                {icon: "mdi-home", title:"Daily Calendar", route:"/dailycalendar"},
                {icon: "mdi-home", title: "About", route: "/about"},
                {icon: "mdi-home", title:"Chart", route:"/chart"},

            ]
        }
    }
}
</script>