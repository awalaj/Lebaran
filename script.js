const Next = $('.next');
const Text = $('#text');
const Image = $('#image-gif');

$(Next).click(function(e){
    Next.attr('value', parseInt(Next.attr('value')) + 1)
    Text.removeClass('text-animate');

    if(Next.attr('value') == 1){
        Text.removeClass('text-animate');
        void Text.width();
        Text.html("Halo ini saya awal");
        Text.addClass('text-animate');
    }else if(Next.attr('value') == 2) {
        Text.removeClass('text-animate');
        void Text.width();
        Text.html("Saya mohon maaf jika ada salah");
        Image.attr("src", "https://c.tenor.com/uygoMR-ATWgAAAAj/happy-ied-mubarak-ied-mubarak.gif")
        Text.addClass('text-animate');
    }else if(Next.attr('value') == 3){
        Text.removeClass('text-animate');
        void Text.width();
        Text.html("Berbuat khilaf adalah sifat");
        Text.addClass('text-animate');
    }else if(Next.attr('value') == 4){
        Text.removeClass('text-animate');
        void Text.width();
        Text.html("Meminta maaf adalah kewajiban");
        Text.addClass('text-animate');
    }else if(Next.attr('value') == 5){
        Text.removeClass('text-animate');
        void Text.width();
        Text.html("Dan kembalinya fitrah adalah tujuan");
        Text.addClass('text-animate');
    }else if(Next.attr('value') == 6){
        Text.removeClass('text-animate');
        void Text.width();
        Text.html("Di hari fitri ini mohon maaf lahir dan batin");
        Text.addClass('text-animate');
    }else if(Next.attr('value') == 7){
        Text.removeClass('text-animate');
        Image.attr("src", "https://c.tenor.com/T_16HTs34x4AAAAj/taqabbal-allahu-minna-wa-minkum-accept-god-with-us-and-you.gif");
        void Text.width();
        Text.html("تَقَبَّلَ اللَّهُ مِنَّا وَمِنْكُمْ وَ تَقَبَّلْ ياَ كَرِيْمُ <br> Taqabbalallahu Minna Wa Minkum");
        Text.addClass('text-animate');
    }else if(Next.attr('value') == 8){
        Text.removeClass('text-animate');
        Image.attr("src", "https://c.tenor.com/57JSPYRo0k8AAAAj/lebaran-selamat-lebaran.gif");
        void Text.width();
        Text.html("Selamat hari raya Idul Fitri 1443 Hijriah");
        Text.addClass('text-animate');
    }else{
        alert("udeh gitu aje, keluar sono!!!😂")
    }
})


// const Next = document.querySelector(".next");
// const Text = document.getElementById("text");
// const Image = document.querySelector("#image-gif");