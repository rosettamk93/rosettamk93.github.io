
        window.addEventListener("load",init,false);
        function init(){
        var idTag = document.getElementById("id");
        var pwTag = document.getElementById("pw");

        var loginBtn = window.document.getElementById("loginBtn");
        console.log(loginBtn);
        loginBtn.addEventListener("click",function(e){
            e.preventDefault();
            checkLogin();
        },false);
        }
        function checkLogin(){
          var idTag = document.getElementById("id");
          var idValue = idTag.value;
          var pwTag = document.getElementById("pw");
          var pwValue = pwTag.value;
          
          const ID = 'rosettamk93@naver.com';
          const PW = '1346fhsto';
        //로그인 유효성체크
        //1)아이디, 비밀번호 빈문자열 체크
        // var pwMsg = document.getElementById("pwMsg")
        // var idMsg = document.getElementById("idMsg")

        if(idValue.trim().length == 0){
        idMsg.innerHTML="아이디를 입력하세요!";
        // idMsg.style.color="red";
        // idMsg.style.fontSize = '0.7rem';
        // idMsg.style.fontWeight = 'bold';
        idMsg.classList.add("errmsg");
        idTag.focus();
        return;
        }
        if(pwValue.trim().length == 0){
        idMsg.innerHTML ="";
        pwMsg.innerHTML="비밀번호를 입력하세요!";
        // pwMsg.style.color="red";
        // pwMsg.style.fontSize = '0.7rem';
        // pwMsg.style.fontWeight = 'bold';
        pwMsg.classList.add("errmsg");
        pwTag.focus();
        return;
        }
        console.log(idValue.trim(),pwValue.trim());
        //2) 회원 존재유무 체크
        if(idValue.trim() == ID && pwValue.trim()==PW){
        //메인페이지로 이동
        window.location.href = "main-login.html";
        }else{
        pwMsg.innerHTML = "미가입 계정이거나, 잘못된 비밀번호입니다!";
        pwMsg.style.color="red";
        pwMsg.style.fontSize="0.5rem";
        pwMsg.style.fontWeight = 'bold';
        pwTag.focus();
        return;
        }
    }