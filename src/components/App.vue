<template>
  <div id="app">
    <div class="columns">

      <div class="column">
        <div
            v-for="(code, name) in sources[languages[0].name]"
            :key="name"
        >
          <a
              href="#" @click="selectCurrentCode(name)"
          >
            {{ name }}
          </a>
        </div>
      </div>
      <div class="column" v-for="(runner) in runners">
        <div class="language-container">
          <img :src="require(`@/assets/logo/${runner.language.logo}`)" width="20" height="20">
          <select v-model="runner.language">
            <option v-for="language in languages" :key="language.name" :value="language">
              {{ language.name }}
            </option>
          </select>
        </div>

        <WasmRunner
            v-if="runner.codeName"
            :language="runner.language"
            :code-name="runner.codeName"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import CodeEditor from "@/components/CodeEditor.vue";
  import ContentTab from "@/components/ContentTab.vue";
  import ContentTabs from "@/components/ContentTabs.vue";
  import WasmRunner from "@/components/WasmRunner.vue";
  import sources from "@/sources/sources.json";

  import {Langs} from "@/WasmProcess";

  const languages = [
    {name: Langs.PYTHON, logo: 'python.svg', isSupported: true, isReadonly: false},
    {name: Langs.PHP, logo: 'php.svg', isSupported: true, isReadonly: false},
    {name: Langs.GO, logo: 'go.svg', isSupported: true, isReadonly: true},
  ];

  export default {
    name: 'CodeExecutor',
    components: {ContentTab, ContentTabs, CodeEditor, WasmRunner},
    data() {
      return {
        languages: languages,
        sources: sources,

        runners: [
          { language: languages[0], codeName: Object.keys(sources[languages[0].name])[1]},
          { language: languages[1], codeName: Object.keys(sources[languages[1].name])[1]},
          { language: languages[2], codeName: Object.keys(sources[languages[2].name])[1]},
        ],
      };
    },
    methods: {
      selectCurrentCode(codeName) {
        this.runners.forEach((item) => {
          item.codeName = codeName;
        });
      },
    },
  };
</script>

<style>
@font-face {
  font-family: "Calibri";
  src: url("@/assets/calibri.woff") format("woff");
}

* {
  font-family: 'Calibri', sans-serif;
  font-size: 16px;
}

[v-cloak] {
  display: none;
}

#app {
  width: 200px;
}

.columns {
  display: flex;
  justify-content: start;
  gap: 1em;
}

.column {
  flex: 1;
}

.language-container {
  display: flex;
  align-items: center;
  gap: 5px;
}
</style>
