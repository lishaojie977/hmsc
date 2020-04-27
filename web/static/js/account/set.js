;
var account_set_ops = {
    init:function(){
        this.eventBind()
    },
    eventBind:function(){
        $('#save').click(function(){
            var btn_target = $(this)
            if (btn_target.hasClass('disabled')){
                alert('重置进行中')
                return;
            }

            var nickname = $('.form-horizontal input[name=nickname]').val()
            var mobile = $('.form-horizontal input[name=mobile]').val()
            var email = $('.form-horizontal input[name=email]').val()
            var login_name = $('.form-horizontal input[name=login_name]').val()
            var login_pwd = $('.form-horizontal input[name=login_pwd]').val()

            if (nickname.length < 1){
                alert('请按规范输入用户名')
                return false;
            }
            if (mobile.length < 1){
                alert('请按规范输入手机号')
                return false;
            }
            if (email.length < 1){
                alert('请按规范输入邮箱')
                return false;
            }
            if (!login_name || login_name.length < 1){
                alert('请按规范输入登录名')
                return false;
            }
            if (!login_pwd || login_pwd.length < 6){
                alert('请按规范输入登录名')
                return false;
            }

            btn_target.addClass('disabled')

            $.ajax({
                url:common_ops.buildUrl("/account/set"),
                type:"POST",
                data:{'nickname':nickname,'mobile':mobile,'email':email,'login_name':login_name,'login_pwd':login_pwd},
                dataType:'json',
                success:function(resp){
                    console.log(resp)
                    alert(resp.msg)
                    btn_target.removeClass('disabled');
                },
                error:function(error){
                    console.log(error)
                }
            })
        })  
    }
}

$(document).ready(function(){
    account_set_ops.init()
}) 