<template>
  <CodeEditor
      v-model="code"
      :language="language.name"
      :readonly="language.isReadonly"
  />

  <br>

  <button @click="runCode">Выполнить</button>
  <!-- TODO: инфа по import/export, memory, tables -->
  <button @click="switchDebug">wasm debug</button>
  <span class="loader" v-if="isLoading"></span>

  <br><br>

  <ContentTabs activeTab="stdout">
    <ContentTab name="args & envs" label="args & envs">
      <input v-model="args" type="text">
      <br>
      <textarea v-model="envs" type="text"></textarea>
    </ContentTab>
    <ContentTab name="stdout" label="stdout">
      <template v-if="isHTML(stdout)">
        <div v-html="stdout"></div>
      </template>
      <pre v-else>{{ stdout }}</pre>
    </ContentTab>
    <ContentTab name="stderr" label="stderr">
      <pre>{{ stderr }}</pre>
    </ContentTab>
    <ContentTab name="result" label="result">
      <pre>{{ result }}</pre>
    </ContentTab>
  </ContentTabs>
</template>

<script>

import ContentTab from "@/components/ContentTab.vue";
import CodeEditor from "@/components/CodeEditor.vue";
import ContentTabs from "@/components/ContentTabs.vue";
import sources from "@/sources/sources.json";
import {WasmProcess} from "@/WasmProcess";
import {watch} from "vue";

export default {
  name: 'WasmRunner',
  props: {
    language: {
      type: Object,
    },
    codeName: {
      type: String,
    },
  },
  components: {ContentTab, ContentTabs, CodeEditor},

  data() {
    return {
      code: '',
      isLoading: false,
      isDebug: false,

      args: 'qwe asd zxc',
      envs: 'TEST=123\nTEST2=456',
      stdin: '',
      stdout: '',
      stderr: '',
      result: '',
    };
  },
  mounted() {
    this.init();

    watch(
        () => this.language,
        () => this.init()
    );
    watch(
        () => this.codeName,
        () => this.init()
    );
  },
  beforeUnmount() {
    if (this.wrapper) {
      this.wrapper.terminate();
    }
  },
  methods: {
    switchDebug() {
      this.isDebug = !this.isDebug;
    },
    isHTML(str) {
      const parser = new DOMParser();
      const doc = parser.parseFromString(str, "text/html");
      return Array.from(doc.body.childNodes).some(node => node.nodeType === 1);
    },
    init() {
      this.code = sources[this.language.name][this.codeName];

      this.wrapper = new WasmProcess(this.language.name);

      this.wrapper.onOutput((out) => {
        this.stdout = out;
      });

      this.wrapper.onError((error) => {
        this.stderr = error;
      });

      this.wrapper.onResult((result) => {
        this.result = result;
        this.isLoading = false;
      });
    },
    runCode() {
      this.result = '';
      this.stdout = '';
      this.stderr = '';

      if (this.wrapper) {
        this.isLoading = true;

        let envsJson = {};
        this.envs.split('\n').forEach(line => {
          let [key, value] = line.split('=');
          envsJson[key] = value;
        });

        this.wrapper.sendCode(
            this.code,
            this.codeName,
            envsJson,
            this.args.split(' '),
        );
      }
    },
  },
}
</script>

<style scoped>
pre {
  margin: 0;
  font-family: 'Calibri', sans-serif;
  background-color: #f5f5f5;
  padding: 1em;
}

textarea, input {
  border: 1px solid #ccc;
  border-radius: 4px;
  overflow: hidden;
  width: 400px;
  padding: .5em;
  margin-bottom: 1em;

  outline: none;
  white-space: pre;
  background-color: #f5f5f5;
}

.loader {
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 4px solid rgba(0, 0, 0, 0.2);
  border-top-color: rgba(0, 0, 0, 0.8);
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
  vertical-align: middle;
  margin-left: 5px;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>