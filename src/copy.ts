interface Actions {
  success: Function;
  error: Function;
}

export const copyText = (
  text: string,
  actions: Actions = { success: () => {}, error: (err:any) => {} }
) => {
  try {
    const tempInput = document.createElement("input");
    tempInput.setAttribute("type", "text");
    tempInput.setAttribute("value", "default");
    tempInput.value = text;
    tempInput.select();
    tempInput.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(tempInput.value);
    actions.success();
  } catch (err: any) {
    actions.error(err);
  }
};
