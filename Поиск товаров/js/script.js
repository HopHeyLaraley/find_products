//let mydata = JSON.parse(data);

/*function nextPage(){
    mydata = JSON.parse(data2);
    document.getElementById('script_prod_block').innerHTML = "";
    prodBlockGenerate();
}*/

function prodBlockGenerate(){
    
    for(let i=0;i<30;i++){
    document.getElementById('script_prod_block').innerHTML += '<div class="area_block prod">' +
                        '<div class="block_container">' +
                            '<div class="block_head">' +
                                    '<img src="img/prod_plug.png"></br>' +
                                    'bruh' +
                            '</div>' +
                            '<div class="block_body">' +
                                '<div class="block_options">' +
                                    '<div class="buttons">' +
                                    '</div>' +
                                '</div>' +
                                '<div class="block_select">' +
                                    '<button onclick="showProdInfo()">Выбрать</button>' +
                                '</div>' +
                            '</div>' +
                        '</div>' +
                    '</div>'; 
    }
}


function searchListShow(){
    document.getElementById("search_list").style.display = "block";
}

function searchListHide(){
    document.getElementById("search_list").style.display = "none";
}


function showProdInfo(){
    
    document.getElementById("prod_info_id").style.display = "block";
}

function closeProdInfo(){
    
    document.getElementById("prod_info_id").style.display = "none";
}


/*document.getElementsByClassName("hidden").onfocus = document.getElementById("main_page_frame").style.display = "none";*/

function hideMain(){
    document.getElementById("main_page_frame").style.display = "none";
}