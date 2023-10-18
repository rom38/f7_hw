import { createApp, ref } from "vue";

createApp({
    setup() {
        const nSteps = ref(5);
        const inp_mess = ref("Привет АБВ абв");
        return {
            count: ref(0),
            inp_mess,
            nSteps
        };
    }
}).mount("#app");
