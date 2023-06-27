

$("#btnDireita").click(
    function () {
        $("#area").animate({ left: "1000px", }, { duration: 1200 })
    }
)
$("#btnEsquerda").click(
    function () {
        $("#area").animate({ left: "200px" }, { duration: 1200 })
    }
)
$("#btnDescer").click(
    function () {
        $("#area").animate({ top: "500px" }, {duration: 1500})
    }
)
$("#btnSubir").click(
    function () {
        $("#area").animate({ top: "105px" }, { duration: 1500 })
    }
)