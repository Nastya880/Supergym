import {Tabs} from './tabs';

let tabs;

const initTabs = () => {
  tabs = new Tabs();
  // Используйте в разработке экспортируемую переменную tabs, window сделан для бэкэнда
  window.tabs = tabs;

  const ticketsElement = document.querySelector('[data-tabs="element"');
  ticketsElement.classList.remove('tickets__element--no-js');
};

export {initTabs, tabs};
