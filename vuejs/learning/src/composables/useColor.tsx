import { ref } from "vue";

export default function useColors() {
  const colors = ref(["purple", "yellow", "orange"]);

  function addColor(color: string) {
    if (!color) return;
    colors.value.push(color);
  }

  return {
    colors,
    addColor,
  };
}