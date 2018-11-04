$(function () {

    //封装获取英雄信息函数
    function getAllHero(){
        $.ajax({
            url: 'http://127.0.0.1:5000/getallhero',
            type: 'get',
            success: function (res) {
                // console.log(res)
                let html = template('herotpl', res)
                // console.log(html)
                $("#herobox").html(html)
            }
        })
    }
    getAllHero()

    //添加英雄弹出层
    $("#add").click(function(){
        $('.ui.modal.add').modal('show');
    })
    //添加英雄
    $("#addhero").click(function(){
        let data=$('#form1').serialize()
        console.log(data)
        
        $.ajax({
            url: 'http://127.0.0.1:5000/addhero',
            type: 'post',
            data: data,
            success: function(res){
                // console.log(res)
                getAllHero()
            }
        })
    })

    //编辑英雄弹出层
    let edit=0
    $("#herobox").on('click','.updatehero',function(){
        $('.ui.modal.update').modal('show');
        // console.log($(this).data('id'))
        let id=$(this).data('id')
        edit=id
        $.ajax({
            url: 'http://127.0.0.1:5000/gethero/'+id,
            type: 'get',
            success: function(res){
                // console.log(res.data[0])
                $("#heroname").val(res.data[0].name)
                $("#herogender").val(res.data[0].gender)
            }
        })
    })

    //更改英雄信息
    $("#updatehero").click(function(){
        let data=$('#form2').serialize()
        $.ajax({
            url: 'http://127.0.0.1:5000/updatehero/'+edit,
            type: 'post',
            data: data,
            success: function(res){
                // console.log(res)
                getAllHero()
            }
        })
    })

    //删除英雄
    $("#herobox").on('click','.delhero',function(){
        // console.log($(this).siblings().data('id'))
        let id=$(this).siblings().data('id')
        $.ajax({
            url: 'http://127.0.0.1:5000/deletehero/'+id,
            type: 'get',
            success: function(res){
                // console.log(res)
                getAllHero()
            }
        })
    })

})