// Filter Kategori (akan diisi nanti)
function filterKategori(item, kategori) {
  document
    .querySelectorAll(".filter-item")
    .forEach((el) => el.classList.remove("active"));
  item.classList.add("active");
}
