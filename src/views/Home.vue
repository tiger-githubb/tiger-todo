<template>
  <div class="Home">
    <h1>Bienvenue sur Tiger To Do List</h1>

    <v-text-field
      v-model="newTodo"
      id="fil"
      v-if="ad != ' '"
      outlined
      clearable
      label="Ajouter une tâche"
      @click:append="addTodo"
      @keyup.enter="addTodo"
      append-icon="mdi-plus"
    ></v-text-field>

    <v-list subheader flat>
      <v-subheader>Les Taches du jour </v-subheader>

      <div v-for="task in tasks" :key="task.id">
        <v-list-item
          @click="donetask(task.id)"
          :class="{ 'purple lighten-5': task.done }"
        >
          <template v-slot:default>
            <v-list-item-action>
              <v-checkbox :input-value="task.done" color="primary"> </v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-id></v-list-item-id>
              <v-list-item-title :class="{ 'text-decoration-line-through': task.done }"
                >{{ task.id }} - {{ task.title }}
              </v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-btn @click.stop="deletetask(task.id)" icon>
                <v-icon color="error">mdi-delete</v-icon>
              </v-btn>
            </v-list-item-action>
          </template>
        </v-list-item>
        <v-divider inset></v-divider>
      </div>
    </v-list>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      tasks: [
        // {
        //   id: 1,
        //   title: "Wake up",
        //   done: false
        // }
      ],
    };
  },
  methods: {
    addTodo() {
      this.tasks.push({
        id: this.tasks.length + 1,
        title: this.newTodo,
        done: false,
      });
      // Reset the input field

      this.newTodo = " ";
    },

    donetask(id) {
      let task = this.tasks.filter((task) => task.id === id)[0];
      task.done = !task.done;
    },
    deletetask(id) {
      let task = this.tasks.filter((task) => task.id === id)[0];
      this.tasks.splice(this.tasks.indexOf(task), 1);
    },
  },
};
</script>

<style>
#fil {
  padding: 20px;
}

.Home {
  padding: 30px;
}
</style>
