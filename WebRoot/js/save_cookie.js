function add_person_message_into_cookie(idName) {  

    document.cookie =idName+'='+$('#'+idName).val(); 

} 