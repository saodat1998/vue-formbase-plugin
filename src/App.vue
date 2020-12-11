<template>
  <v-container id="regular-forms" fluid tag="section" class="mt-3">
    <v-card
        color="success"
        title="Sample"
        class="px-5 py-3 mb-10"
    >
      <form-base
          v-model="formValue"
          :schema="schema"
          :scope="'check-create'"
          :method="method"
          :on-submit="createOrUpdate"
          :on-update="createOrUpdate"
      />
    </v-card>
  </v-container>
</template>

<script>
import FormBase from "@/components/Form/FormBase";
export default {
  name: "DashboardFormsRegularForms",
  components: {
    FormBase,
  },
  data: () => ({
    formValue: {},
    schema: [
      {
        component: 'text',
        name: 'name',
        type: 'text',
        rule: 'required',
        label: 'Name1',
        value: '22222',
        attributes: {
          dense: true,
          class: '12312312312312',
          'open-on-clear': true,
        },
      },
      {
        component: 'textarea',
        name: 'name2',
        type: 'text',
        label: 'Name',
        rule: 'required',
        value: '1',
        attributes: {
          dense: true,
          class: '12312312312312',
          'open-on-clear': true,
        },
      },
      {
        component: 'checkbox',
        label: '1111sdfsdf',
        rule: 'required',
        name: 'name3',
        attributes: {
          dense: true,
          class: '12312312312312',
          'open-on-clear': true,
        },
        value: '1',
        options: [
          {
            id: '1',
            name: '23',
          },
          {
            id: '2',
            name: '2223',
          },
          {
            id: '32',
            name: '1111',
          },
          {
            id: '33',
            name: '1111',
          },
          {
            id: '34',
            name: '1111',
          },
          {
            id: '35',
            name: '1111',
          },
        ],
      },
      {
        component: 'radio',
        label: 'Names22332',
        name: 'name4',
        rule: 'required',
        value: 1,
        attributes: {
          dense: true,
          class: '12312312312312',
          'open-on-clear': true,
        },
        options: [
          {
            id: '1',
            name: '23',
          },
          {
            id: '2',
            name: '2223',
          },
        ],
      },
      {
        component: 'treeselect',
        label: '12awad',
        name: 'name1111',
        rule: 'required',
        value: '1',
        attributes: {
          options: [],
          placeholder: '1221212',
        },
        options: [
          {
            id: '1',
            name: '23',
            children: [
              {
                id: 'm-fries1',
                name: 'French Fries1',
              }, {
                id: 'm-cheeseburger1',
                name: 'Cheeseburger1',
              },
            ],
          },
          {
            id: '2',
            name: '2223',
            children: [
              {
                id: 'm-fries',
                name: 'French Fries',
              }, {
                id: 'm-cheeseburger',
                name: 'Cheeseburger',
              },
            ],
          },
        ],
      },
      {
        component: 'select',
        label: 'Names22111111332',
        attributes: {
          outlined: true,
          class: '12312312312312',
          'open-on-clear': true,
        },
        name: 'name24',
        rule: 'required',
        value: '1',
        options: [
          {
            id: '1',
            name: '23',
          },
          {
            id: '2',
            name: '2223',
          },
        ],
      },
      {
        component: 'file',
        name: 'attachment',
        rule: 'required',
        label: 'Names111  1111',
        attributes: {
          theme: 'list',
        },
      },
    ],
    method: "post",
  }),
  methods: {
    createOrUpdate ({ resolve }) {
      resolve()
    },
  },

};
</script>
