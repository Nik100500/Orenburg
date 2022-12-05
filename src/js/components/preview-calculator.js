var exporterCheckbox = document.getElementById('exporter');

if (exporterCheckbox !== null) {
  var exporterInput = document.getElementById('exporter-input'),
          resultsRF = document.getElementById('results-rf'),
         resultsOEZ = document.getElementById('results-oez'),
             input1 = document.getElementById('range1'),
             input2 = document.getElementById('range2'),
             input3 = document.getElementById('range3'),
             input4 = document.getElementById('range4'),
             input5 = document.getElementById('range5'),
                 RF = 0,
                OEZ = 0;
  exporterCheckbox.addEventListener('click', ()=> {
    exporterCheckbox.checked ? (exporterInput.classList.add('active'), formMath()) : (exporterInput.classList.remove('active'), formMath())
  })
  function input1Math() {
    RF = RF + (49 * input1.value * 0.2)     
    OEZ = OEZ + (5 * input1.value * 0.02 + 5 * input1.value * 0.07 + 39 * input1.value * 0.155)
    console.log(input1.value)
  }
  function input2Math() {
    RF = RF + (input2.value * 0.022 * 49)     
    OEZ = OEZ + (input2.value * 0.022 * 39)
  }
  function input3Math() {
    RF = RF     
    OEZ = OEZ
  }
  function input4Math() {
    RF = RF + (input4.value * 0.015 * 49)
    OEZ = OEZ + (input4.value * 0.015 * 39)
  }
  function input5Math() {
    if (exporterCheckbox.checked) {
      RF = RF + (input5.value * 0.2)
      OEZ = OEZ
    }
  }
  function formMath() {
    RF = 0
    OEZ = 0
    input1Math()
    input2Math()
    input3Math()
    input4Math()
    input5Math()
    RF = Math.round(RF)
    OEZ = Math.round(OEZ)
    resultsRF.querySelector('.rf-count').innerHTML = RF
    resultsOEZ.querySelector('.oez-count').innerHTML = OEZ
    resultsRF.querySelector('.rf-graph').style.height = RF/50+"px"
    resultsOEZ.querySelector('.oez-graph').style.height = OEZ/50+"px"
  }
  document.onload = formMath()
  input1.addEventListener('change', ()=> formMath())
  input2.addEventListener('change', ()=> formMath())
  input3.addEventListener('change', ()=> formMath())
  input4.addEventListener('change', ()=> formMath())
  input5.addEventListener('change', ()=> formMath())
}