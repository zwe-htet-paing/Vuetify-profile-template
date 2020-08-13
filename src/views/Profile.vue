<template>
  <div class="home">
    <v-container fluid>
      <v-layout column>
        <v-card>
          <v-card-text>
            <v-flex>
              <v-avatar size="96" class="mr-4" >
                <v-img src="https://cdn.vuetifyjs.com/images/lists/2.jpg"></v-img>
              </v-avatar>
              <!-- <v-btn> Change Avatar</v-btn> -->
            </v-flex>
            <v-text-field label="FirstName" v-model="form.firstName"></v-text-field>
            <v-text-field label="LastName" v-model="form.lastName"></v-text-field>
            <v-text-field label="Position" v-model="form.id"></v-text-field>
            <v-text-field label="Email Address" v-model="form.contactEmail"></v-text-field> 
          </v-card-text>

          <v-card-acitons>
            <!-- <v-btn>
              <v-icon></v-icon>
              Save Change
            </v-btn> -->
          </v-card-acitons>
        </v-card>
      </v-layout>
      
    </v-container>
   
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    //HelloWorld
    
  },
  data () {
    return {
        form: {   
                  id: "user",
                  firstName: 'John',
                  lastName: 'Doe',
                  contactEmail: 'john@doe.com',
                  avatar: 'MALE_CAUCASIAN_BLOND_BEARD'
              },
              // [{   
              //     id: "admin",
              //     firstName: 'John',
              //     lastName: 'Doe',
              //     contactEmail: 'john@doe.com',
              //     avatar: 'MALE_CAUCASIAN_BLOND_BEARD'
              // },
              // {
              //     id: "Manager",
              //     firstName: 'John',
              //     lastName: 'Doe',
              //     contactEmail: 'john@doe.com',
              //     avatar: 'MALE_CAUCASIAN_BLOND_BEARD'
              // },]
    }
  } 
}
</script>
