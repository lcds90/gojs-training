import { provide, ref } from 'vue';

const useActionMenu = (): void => {
  const showActionsMenu = ref(false);
  const toggleViewActions = () => {
    showActionsMenu.value = !showActionsMenu.value;
  };

  provide('showActionsMenu', showActionsMenu);
  provide('toggleViewActions', toggleViewActions);
};

export default useActionMenu;
