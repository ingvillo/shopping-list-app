/* Adds item to list */
function addListItem() {
    
     var write = $('#newItem').val();
     var list = $('#itemList');
     var item = $('<li><button class="checkbox">&#x2713;</button><span class="list">' + write + '</span><button class="delete">X</button></li>');
     var newItem = $("#newItem");

     if (write.length === 0  || write.length > 33) {
        return false;
    }
    
    list.append(item);
    $(newItem).val('');
}

/* Deletes list item */
function deleteItem() {

    $(this).parent().remove();
}

/* Ticks off list item */
function tickItem() {

    $(this).parent().toggleClass('tick');
}


/* Clears all items on list */
$(document).on("click", "#reset-button", function(){
    $("#itemList").empty();
    submissions = 0;
});

