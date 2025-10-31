const container = document.getElementById('report-list');
const reports = JSON.parse(localStorage.getItem('reports')) || [];


function renderReports() {
  container.innerHTML = '';
  if (reports.length === 0) {
    container.innerHTML = '<p class="text-muted">Belum ada laporan.</p>';
    return;
  }


 reports.forEach(r => {
  container.innerHTML += `
    <div class="col-md-4">
      <div class="card shadow-sm">
        ${r.image ? `<img src="${r.image}" class="card-img-top" alt="Foto Fasilitas">` : ''}
        <div class="card-body">
          <h5 class="card-title">${r.name}</h5>
          <p class="card-text text-truncate">${r.description}</p>
          <span class="badge bg-${r.status === 'Selesai' ? 'success' : r.status === 'Diproses' ? 'warning' : 'secondary'}">
            ${r.status}
          </span>
          <div class="mt-3 d-flex justify-content-between">
            <a href="report-detail.html?id=${r.id}" class="btn btn-sm btn-primary">Detail</a>
            <button class="btn btn-sm btn-danger" onclick="deleteReport(${r.id})">Hapus</button>
          </div>
        </div>
      </div>
    </div>
  `;
});
}


function deleteReport(id) {
  const confirmDelete = confirm('Yakin ingin menghapus laporan ini?');
  if (confirmDelete) {
    const index = reports.findIndex(r => r.id === id);
    if (index !== -1) {
      reports.splice(index, 1);
 localStorage.setItem('reports', JSON.stringify(reports));
      renderReports();
    }
  }
}


renderReports();





