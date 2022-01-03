import Vue from "vue";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

Vue.use(Toast, {
  transition: "Vue-Toastification__bounce",
  maxToasts: 20,
  newestOnTop: true
});

const options = {
  position: "top-right",
  timeout: 5000,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: true,
  draggable: true,
  draggablePercent: 0.6,
  showCloseButtonOnHover: false,
  hideProgressBar: true,
  closeButton: "button",
  icon: true,
  rtl: false
}

export default {
  install(vue) {
    vue.prototype.$message = (text) => {
      vue.$toast(text, options);
    },
    vue.prototype.$error = (text) => {
      vue.$toast.error(text, options);
    },
    vue.prototype.$success = (text) => {
      vue.$toast.success(text, options);
    }
  }
}
