const ACTIVE_CONTROL_CLASS_NAME = 'tabs__control_active'
const ACTIVE_CONTENT_CLASS_NAME = 'tabs__content-item_active'

export function tabs() {

 const controls = Array.from(document.querySelectorAll('.tabs__control'));
 const contentItems = Array.from(document.querySelectorAll('.tabs__content-item'));
 let selectedItem = {
    control: document.querySelector(`.${ACTIVE_CONTROL_CLASS_NAME}`),
    content: document.querySelector(`.${ACTIVE_CONTENT_CLASS_NAME}`),
 }

 function clickHandler() {
   const selectedContentItem = contentItems.filter((contentItem) => {
      return contentItem.getAttribute('data-content-name') === this.getAttribute('data-control-for');
   })[0];
   console.log(selectedContentItem);
   selectedItem.control.classList.remove(ACTIVE_CONTROL_CLASS_NAME);
   selectedItem.content.classList.remove(ACTIVE_CONTENT_CLASS_NAME);

   selectedContentItem.classList.add(ACTIVE_CONTENT_CLASS_NAME);
   this.classList.add(ACTIVE_CONTROL_CLASS_NAME );
   selectedItem = {
      control: this,
      content: selectedContentItem,
   };
 }
   for (const control of controls) {
      control.addEventListener('click', clickHandler);
   }
}