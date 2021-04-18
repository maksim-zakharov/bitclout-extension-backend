var language;

export function getLanguage() {
    (localStorage.getItem('language') == null) ? setLanguage('en') : false;
    if(localStorage.getItem('language')==='en'){
        language = langEN;
    }
    else{
        language = langAr;
    }
}

export function changeText(){
    $('.lan_text').text(language.selectYourLanguage);
    $('.start_lan').text(language.start);
    $('#registrationPage').text(language.registrationPage);
    $('#hotelDetails').text(language.hotelDetails);
    $('#hotelName').text(language.hotelName);
    $('#hotelNameArabic').text(language.hotelNameArabic);
    $('#gov').text(language.gov);
    $('#cities').text(language.cities);
    $('#stars').text(language.stars);
    $('#description').text(language.description);
    $('#descriptionArabic').text(language.descriptionArabic);
    $('#roomDetails').text(language.roomDetails);
    $('.roomType').text(language.roomType);
    $('.roomTypeArabic').text(language.roomTypeArabic);
    $('.beds').text(language.beds);
    $('.rooms').text(language.rooms);
    $('.price').text(language.price);
    $('.roomDescription').text(language.roomDescription);
    $('#roomDescriptionArabic').text(language.roomDescriptionAr);
    $('.addNew').text(language.addNew);
    $('.cov19Title').text(language.cov19Title);
    $('#selectStars').text(language.selectStars);
    $('#register').text(language.register);
    $('#tq').text(language.thankYou);
    $('#name').text(language.name);
    $('#email').text(language.email);
    $('#phone').text(language.phone);
    $('#contactDetails').html(language.contact);
    $('#tq_text_1').text(language.tq_text_1);
    $('#tq_text_2').text(language.tq_text_2);
    $('#tq_text_3').text(language.tq_text_3);
    $('#tq_text_4').text(language.tq_text_4);
    $('#tq_text_5').text(language.tq_text_5);
    $('#tq_text_6').text(language.tq_text_6);
    $('#bank').text(language.bank);
    $('#website').text(language.website);

    if(localStorage.getItem('language')==='en'){
        $('.mainTextDir').css('direction','ltr');
    }else{
        $('.mainTextDir').css('direction','rtl');
    }

}

export function setLanguage(lang) {
    localStorage.setItem('language', lang);
    getLanguage();
    changeText();
    // location.reload();
}

$(document).ready(function(){
    getLanguage();
    changeText();
});
