import { Directive } from "vue";
import { copyText } from "./copy";

export const copyDirective = (app: any) => {
  app.config.globalProperties.$copyText = copyText;

  app.directive("copy", (el, binding) => {
    let callback = {
      success: () => {},
      error: () => {},
    };

    if (el.hasAttribute("copy:success"))
      callback.success = el.getAttribute("copy:success");
    if (el.hasAttribute("copy:error"))
      callback.error = el.getAttribute("copy:error");

    copyText(binding.value, callback);
  });
};
