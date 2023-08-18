import MicroModal from 'micromodal'; 
MicroModal.init();


const needDomainInput = document.getElementById("need-domain");
const needDesigneInput = document.getElementById("need-designe");
const domainField = document.getElementById("form-domain-name");
const designeDescField = document.getElementById("form-designe-desc");

if (needDomainInput) {
   const toogleNeedDomain = () => {
      domainField.disabled = needDomainInput.checked ? false : true;
   };
   needDomainInput.addEventListener("change", toogleNeedDomain);
}

if (needDesigneInput) {
   const toogleNeedDomain = () => {
      designeDescField.disabled = needDesigneInput.checked ? false : true;
   };
   needDesigneInput.addEventListener("change", toogleNeedDomain);
}


// const formOrder = document.getElementById('form-order');


// const sendForm = (e) => {
//    e.preventDefault();
//    MicroModal.show('modal-send-form'); 
//    formOrder.reset()
// }

// formOrder.addEventListener('submit', sendForm);
