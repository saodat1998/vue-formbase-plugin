import Vue from "vue";
import FormBase from "./FormBase.vue";
import DefaultForm from "./DefaultForm.vue";

// export FormBase from "./FormBase.vue";
// export DefaultForm from "./DefaultForm.vue";

const Components = {
  FormBase,
  DefaultForm,
};

Object.keys(Components).forEach((name) => {
  Vue.component(name, Components[name]);
});

export default Components;
