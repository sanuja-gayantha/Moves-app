$(document).ready(() => {
    $('#searchForm').on('submit', (e) => {
        e.preventDefault();
        let searchText = $('#searchText').val();
        console.log(searchText);
    })
})