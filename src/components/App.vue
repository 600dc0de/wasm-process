<template>
  <div id="app">
    <div class="columns">

      <div class="column">
        <div
            v-for="(code, name) in sources[currentLanguage.name]"
            :key="name"
        >
          <a
              href="#" @click="selectCurrentCode(name)"
          >
            {{ name }}
          </a>
        </div>
      </div>

      <div class="column">
        <div class="language-container">
          <img :src="currentLanguage.logo" width="20" height="20">
          <select v-model="currentLanguage">
            <option v-for="language in languages" :key="language.name" :value="language">
              {{ language.name }}
            </option>
          </select>
        </div>

        <WasmRunner
            v-if="currentCodeName"
          :language="currentLanguage"
          :code-name="currentCodeName"
        />
      </div>

      <div class="column">
        <div class="language-container">
          <img :src="currentLanguage2.logo" width="20" height="20">
          <select v-model="currentLanguage2">
            <option v-for="language in languages" :key="language.name" :value="language">
              {{ language.name }}
            </option>
          </select>
        </div>

        <WasmRunner
            v-if="currentCodeName2"
            :language="currentLanguage2"
            :code-name="currentCodeName2"
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
  {name: Langs.PYTHON, logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg', isSupported: true, isReadonly: false},
  {name: Langs.PHP, logo: 'https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg', isSupported: true, isReadonly: false},
  {name: Langs.GO, logo: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Go_Logo_Blue.svg', isSupported: true, isReadonly: true},
];

export default {
  name: 'CodeExecutor',
  components: {ContentTab, ContentTabs, CodeEditor, WasmRunner},
  data() {
    return {
      languages: languages,
      sources: sources,

      currentLanguage: languages[2],
      currentCodeName: Object.keys(sources[languages[2].name])[0],

      currentLanguage2: languages[2],
      currentCodeName2: Object.keys(sources[languages[2].name])[0],
    };
  },
  methods: {
    selectCurrentCode(codeName) {
      this.currentCodeName = codeName;
      this.currentCodeName2 = codeName;
    },
  },
};
</script>

<style>
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
