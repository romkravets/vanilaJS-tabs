const ACTIVE_CONTROL_CLASS_NAME = 'tabs__control_active'
const ACTIVE_CONTENT_CLASS_NAME = 'tabs__content-item_active'

export function tabs(rootElement, tabsContent) {
   let controls = {};
   let contentItems = {};
   let selectedItemIndex = 0;

 function clickHandler() {
   const currentElementIndex = this.getAttribute('data-control-for');
   const selectedContentItem = contentItems[currentElementIndex];

   controls[selectedItemIndex].classList.remove(ACTIVE_CONTROL_CLASS_NAME);
   contentItems[selectedItemIndex].classList.remove(ACTIVE_CONTENT_CLASS_NAME);

   selectedContentItem.classList.add(ACTIVE_CONTENT_CLASS_NAME);
   this.classList.add(ACTIVE_CONTROL_CLASS_NAME );
   selectedItemIndex = currentElementIndex;

 }

 function render() {
   const tabsControlsElement = document.createElement('nav');
   const tabsContentElement = document.createElement('div');

    tabsContent.forEach((tabContent, i) => {
      const control = document.createElement('button');
      const contentItem = document.createElement('div');

      control.classList.add('tabs__control');
      control.innerHTML = tabContent.title;

      control.setAttribute('data-control-for', i);
      control.setAttribute('data-content-name', i);

      contentItem.classList.add('tabs__content-item', i);
      contentItem.innerHTML = tabContent.content;

      control.addEventListener('click', clickHandler);

      controls[i] = control;
      contentItems[i] = contentItem;

      tabsControlsElement.appendChild(control);
      tabsContentElement.appendChild(contentItem);

      if (i === selectedItemIndex) {
         control.classList.add(ACTIVE_CONTROL_CLASS_NAME);
         contentItem.classList.add(ACTIVE_CONTENT_CLASS_NAME);
      }
    });

    rootElement.classList.add('tabs');
    rootElement.appendChild(tabsControlsElement);
    rootElement.appendChild(tabsContentElement);
 }

 render();
}