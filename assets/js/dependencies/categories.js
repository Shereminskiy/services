$(function() {
    $('#add_new_category').on('submit', function(e){
        e.stopPropagation();
        e.preventDefault();
        $.post("/admin/categories/create", $(this).serialize(), function(data){
            console.log(data)
        });
    })
});
