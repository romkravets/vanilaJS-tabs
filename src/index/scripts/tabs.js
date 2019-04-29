const ACTIVE_CONTROL_CLASS_NAME = 'tabs__control_active'
const ACTIVE_CONTENT_CLASS_NAME = 'tabs__content-item_active'

export function tabs() {
 const controls = Array.from(document.querySelectorAll('.tabs__control')).reduce((obj, control) => {
   obj[control.getAttribute('data-control-for')] = control;
   return obj;
 }, {});
 const contentItems = Array.from(document.querySelectorAll('.tabs__content-item')).reduce((obj, contentItem) => {
   obj[contentItem.getAttribute('data-content-name')] = contentItem;
   return obj;
 }, {});
 console.log(contentItems);

 let selectedItemName = document
   .querySelector(`.${ACTIVE_CONTROL_CLASS_NAME}`)
   .getAttribute('data-control-for');

 function clickHandler() {
   const currentElementName = this.getAttribute('data-control-for');
   const selectedContentItem = contentItems[currentElementName];

   controls[selectedItemName].classList.remove(ACTIVE_CONTROL_CLASS_NAME);
   contentItems[selectedItemName].classList.remove(ACTIVE_CONTENT_CLASS_NAME);

   selectedContentItem.classList.add(ACTIVE_CONTENT_CLASS_NAME);
   this.classList.add(ACTIVE_CONTROL_CLASS_NAME );
   selectedItemName = currentElementName

 }
   for (const key in controls) {
      controls[key].addEventListener('click', clickHandler);
   }
}