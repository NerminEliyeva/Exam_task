//passwordun yoxlanisi
const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#id_password');
togglePassword.addEventListener('click', function (e) {
  const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
  password.setAttribute('type', type);
  this.classList.toggle('fa-eye-slash');
});

//sign up hissesinden kecmek
$(".btnsign").click(function () {
  if ($("#id_password").val() == "123") {
    $(".divsign").hide()
    $(".divimtahan").show()
    $(".firstName span").html($(".ad").val())
    $(".lastName span").html($(".soyad").val())
  } else {
    $(".signup p").show()
  }
})
var myInterval;
var deqiqe
//startta basmaq saniyenin baslamasi
$(".btnstart").click(function () {
  doldur()
  myInterval = setInterval(function () {
    $(".divblur").hide()
    if ($(".san").html() == 0) {
      $(".san").html(60)
      $(".deq").html($(".deq").html() - 1)
    }
    if ($(".san").html() > 0) {
      $(".san").html($(".san").html() - 1)
    }
    if ($(".deq").html() == 0) {
      result()
    }
    console.log($(".deq").html()-1);
    // console.log($(".deq").html()--);
    // alert($(".deq").html($(".deq").html() - 1))
  }, 1000);
})

//suallar ucun array 
var suallar = [
  {
    sual: "Hansı verilənlər bazası modeli deyil?",
    a: "İyerarxik", b: "Şəbəkə", c: "Cədvəl", d: "Obyektyönlü", duz: "Cədvəl",
  },
  {
    sual: "Aşağıdakılardan hansı rastrlı qrafik redaktora aiddir?",
    a: "Photoshop", b: "CorelDraw", c: "AutoCad", d: "CorelIllustrator", duz: "Photoshop",
  },
  {
    sual: "Kompüterin yaddaşı hansı ölçü vahidi ilə ölçülür?",
    a: "Bit", b: "Piksel", c: "Düym", d: "Bayt", duz: "Bayt",
  },
  {
    sual: "Elektron cədvəl faylı hansı ad genişlənməsinə malik olur? (2010)",
    a: ".exel", b: ".exlm", c: ".xlsx", d: ".xslm", duz: ".xlsx",
  },
  {
    sual: "Windows Explorer pəncərəsində obyektlərin sayı hansı paneldə əks olunur? (Windows 7)",
    a: "Menyu", b: "Alətlər", c: "Vəziyyət", d: "Ünvan", duz: "Vəziyyət",
  },
  {
    sual: "Təqdimatı hansı reimdə çap etmək olmaz? (PowerPoint 2010)",
    a: "Normal", b: "NotesPage", c: "Slide Sorter", d: "Slide Show", duz: "Slide Show",
  },
  {
    sual: "Lokal şəbəkələrdə kompüterlərin birləşdirilməsinin ümumi sxemi necə adlanır?",
    a: "Arxitektura", b: "Host", c: "Protokol", d: "Topologiya", duz: "Topologiya",
  },
  {
    sual: "Aşağıdakılardan hansı alqoritmin xassəsi hesab edilmir?",
    a: "Diskretlik", b: "Kütləvilik", c: "Müəyyənlik", d: "Xəttilik", duz: "Xəttilik",
  },
  {
    sual: "Aşağıdakılardan hansı giriş qurğusu deyil?",
    a: "Monitor", b: "Klaviatura", c: "Maus", d: "Skaner", duz: "Monitor",
  },
  {
    sual: "Aşağıdakılardan hansı əməliyyat sistemi deyil?",
    a: "MS DOS", b: "LİNUX", c: "UNIX", d: "NC", duz: "NC",
  },
]

//suallari arrayden getirme
var sualsira = 0;
function doldur() {
  $(".divsual").html(sualsira + 1 + ")" + suallar[sualsira].sual)
  $("#a span").html(suallar[sualsira].a)
  $("#b span").html(suallar[sualsira].b)
  $("#c span").html(suallar[sualsira].c)
  $("#d span").html(suallar[sualsira].d)
}

//nomreye klikledikde sualin acilmasi
$(".nomre").eq(0).addClass("nomreactive")

$(".nomre").click(function () {
  $(".nomre").removeClass("nomreactive")
  $(this).addClass("nomreactive")
  sualsira = $(this).html() - 1
  doldur()
  duzsehvSay()
})

//oxlarla idareetme
$(".fa-caret-left").click(function () {
  if (sualsira == 0) {
    sualsira = 9
  } else {
    sualsira--
  }
  $(".nomre").removeClass("nomreactive")
  $(".nomre").eq(sualsira).addClass("nomreactive")
  doldur()
  duzsehvSay()
})

$(".fa-caret-right").click(function () {
  if (sualsira == 9) {
    sualsira = 0
  } else {
    sualsira++
  }
  $(".nomre").removeClass("nomreactive")
  $(".nomre").eq(sualsira).addClass("nomreactive")
  doldur()
  duzsehvSay()
})


//duz sehv cavablari saymaq
var duzCvb = 0;
var sehvCvb = 0;
var duzarr = []
var sehvarr = []


function duzsehvSay() {
  $(".variant").css("background-color", "white")

  $(".variant").click(function () {
    if ($(this).children().html() == suallar[sualsira].duz) {
      $(this).css("background-color", "#5e9a74")
      duzarr.push($(this).children().html())
      duzCvb++
      $(".nomre").eq(sualsira).css("background-color", "#5e9a74")
    }
    else {
      $(this).css("background-color", "#872440")
      sehvarr.push($(this).children().html())
      $(".variant").each(function () {
        if ($(this).children().html() == suallar[sualsira].duz) {
          $(this).css("background-color", "#5e9a74")
          duzarr.push($(this).children().html())
        }
      })
      sehvCvb++
        $(".nomre").eq(sualsira).css("background-color", "#872440")
    }
    $(".variant").off('click');
  })

  //duz olanlari yasil saxlasin
  duzarr.forEach(x => {
    $(".variant").each(function () {
      if (x == $(this).children().html()) {
        $(this).css("background-color", "#5e9a74")
      }
    })
  })

  //sehv olanlari qirmizi saxlasin
  sehvarr.forEach(x => {
    $(".variant").each(function () {
      if (x == $(this).children().html()) {
        $(this).css("background-color", "#872440")
      }
    })
  })

  //yazilan suala geri qayitdiqda basqa variant secmek olmasin
  $(".variant").each(function () {
    if ($(this).css("background-color") == "rgb(94, 154, 116)") {
      $(".variant").off('click');
    }
  })

}
duzsehvSay()


//finise klikledikde result penceresinin acilmasi
$(".btnfinish").click(function () {
  result()
})
function result() {
  $(".divimtahan").hide()
  $(".divresult").show()

  $(".divpass span").html($(".ad").val() + " " + $(".soyad").val())
  $(".divfail span").html($(".ad").val() + " " + $(".soyad").val())

  $(".divres p").eq(0).children().html(duzCvb)
  $(".divres p").eq(1).children().html(sehvCvb)
  $(".divres p").eq(2).children().html(suallar.length - duzCvb - sehvCvb)
  if (duzCvb >= 7) {
    $(".divpass").show()
    $(".divfail").hide()
  } else {
    $(".divpass").hide()
    $(".divfail").show()
  }
  clearInterval(myInterval);
}
