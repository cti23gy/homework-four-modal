function route() {
    let hashTag = window.location.hash;
    let pageID = hashTag.replace("#/", "");
    navToPage(pageID);
}

function navToPage(pageName) {
    $.get(`pages/${pageName}/${pageName}.html`, function(data) {
        console.log(data);
        $("#app").html(data);
    });
}

function initListeners() {
    $(window).on("hashchange", route);
    route();
}

function addModalListener() {
    $(".bg-click").click(function(e){
        $('.modal').css("display", "none");
    });
    $(".bg-click2").click(function(e){
        $('.success-modal').css("display", "none");
    });
}

function modalListeners() {
    $("#submit-sign-in").click(function(e) {
        e.preventDefault;

        let user = $("#callout-username").val();
        let pass = $("#callout-password").val();
        gsap.to($(".modal"), {                  
            scale: 0, 
            duration: 0, 
            onComplete: showAlert(user, pass), 
            onCompleteParams: [user, pass]
        }); 

        $('.modal').css("display", "none");
        $('.success-modal').css("display", "flex");
    });

    $("#submit-success").click(function(e) {
        e.preventDefault;
        $('.modal').css("display", "none");
        $('.success-modal').css("display", "none");
        
    });

    $("#showModal").click(function(e){
        $('.modal').css("display", "flex");
        gsap.to($(".modal"), {
                ease: "bounce.out",
                scale: 1,
                duration: 2,
        });
        
        addModalListener();
    });
    

}

function showAlert(info, info2) {
    console.log('User:' + info);
    console.log('Pass:' + info2);
    $("#callout-username").val("");
    $("#callout-password").val("");
}


$(document).ready(function() {
    modalListeners();
    initListeners();
    navToPage("home");
    
});