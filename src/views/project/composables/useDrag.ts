import { reactive } from 'vue';

const useDrag = () => {
  const positions = reactive({
    clientX: undefined,
    clientY: undefined,
    movementX: 0,
    movementY: 0,
  });
};

export default useDrag;
