<template>
  <div class="hello">
    

    <p>{{ name }}</p>
    
    <br>
    <p>
    <strong>Button State</strong><br> 
    {{ btnState ? 'Button Disabled' : 'Button Enabled' }}
    <br>
    <button v-on:click="changeName" v-bind:disabled="btnState">Change Name</button>
    </p>


    <p>

    <form @submit.prevent="addSkill">
      <input type="text" class="add-skill" placeholder="Enter a skill you have" v-model="skill" v-validate="'min:5'" name="skill">
      
      <transition name="alert-in" enter-active-class="animated flipInX" leave-active-class="animated flipOutX">
        <p class="alert" v-if="errors.has('skill')">{{ errors.first('skill') }}</p>
      </transition>

    </form>

    <br>
    {{ skill }}
    </p>

    <br><br>
    <strong>For Loop</strong>
    <br><br>



    <div class="holder">
      <ul>
        <transition-group name="list" enter-active-class="animated bounceInUp" leave-active-class="animated bounceOutDown">
          <li v-for="(data, index) in skills" :key='index'>
          {{index}}. {{data.skill}}
          <i class="fa fa-minus-circle" v-on:click="remove(index)"></i>
          </li>
        </transition-group>
      </ul>
    </div>


      <p>
        <strong>If Else</strong>
        <p v-if="skills.length >= 1">You have more than one skills</p>
        <p v-else>You have less than or equal to one skill</p>
      </p>

      <br><br>

    
    


  </div>
</template>

<script>
export default {
  name: 'Skills',
  data(){
    return {
      
      name: 'TechMynd',

      btnState: true,

      changeName : '',

      skill: '',


      skills: [
        {"skill": "Vue.js"},
        {"skill": "Frontend Developer"},
        {"skill": "Javascript Developer"}
      ]
    }
  },
    methods: {
      addSkill(){

        // check validation
        this.$validator.validateAll().then((result) => {
          if(result){
            // validation success
            this.skills.push({skill: this.skill})
            this.skill = '';
          } else {
            // console.log('not valid');
          }
        })
        

      },
      remove(id){
        this.skills.splice(id,1);
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style src="./Skills.css" scoped>

</style>
  