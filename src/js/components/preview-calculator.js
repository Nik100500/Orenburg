var exporterCheckbox = document.getElementById('exporter');
var exporterInput = document.getElementById('exporter-input');
exporterCheckbox !== null ? exporterCheckbox.addEventListener('click', function () {
  exporterCheckbox.checked ? exporterInput.classList.add('active') : exporterInput.classList.remove('active')
}) : ''