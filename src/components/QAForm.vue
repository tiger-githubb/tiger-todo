<template>
  <form ... @submit.prevent="handleSubmit">
    <label v-for="(panelist, index) in panelists" :key="index">
      <input
        type="radio"
        name="panelist"
        @input="(ev) => (form.askPerson = ev.target.value)"
        :value="panelist"
        :checked="form.askPerson === panelist"
      />
      <span>{{ panelist }}</span>
    </label>
    ...
  </form>
</template>
<script>
export default {
  name: "QAForm",
  data() {
    return {
      form: {
        askPerson: "",
      },
    };
  },
  methods: {
    handleSubmit() {
      axios
        .post("/", {})
        .then(() => {
          this.$router.push("thanks");
        })
        .catch(() => {
          this.$router.push("404");
        });
    },
  },
};
</script>
