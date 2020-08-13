<template>
<div class="login">
    <v-app id="inspire">
        <v-main>
            <v-container class="fill-height" fluid>
                <v-row align="center" justify="center">
                    <v-col cols="12" sm="8" md="4">
                        <v-card class="elevation-12">
                            <v-toolbar color="primary" flat dark>
                                <v-toolbar-title>Login Form</v-toolbar-title>
                                <v-spacer></v-spacer>
                            </v-toolbar>
                        </v-card>

                        <v-card-text>
                            <v-form ref="form">
                                <v-text-field label="Login" name="login" 
                                prepend-icon="mdi-account" type="text" v-model="email" ></v-text-field>
                                <v-text-field label="Password" id="password" name="password" 
                                prepend-icon="mdi-lock" v-model="password"></v-text-field>
                            </v-form>
                        </v-card-text>

                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="primary" @click="submit">Login</v-btn>
                        </v-card-actions>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
    </div>
</template>

<script>
export default {
    data() {
        return {
            //fname: "",
            //lname: "",
            email: "",
            //id: "",
            password: ""
        };
    },
    methods: {
        submit() {
            //name: this.fname
            //email: this.email
            //id: this.id
            //password: this.password
        
        }
    }
}
</script>