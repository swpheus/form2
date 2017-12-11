function check(f) {
	if(f.name2.value.trim()==""){
		alert("이름을 입력하세요");
		f.name2.focus();
		return false;
	}
	if(f.name2.value.trim()=="" f.name4.value.trim()==""){
		alert("영문 이름을 입력하세요");
		f.name2.focus();
		return false;
	}
	if(f.name2.value.trim()=="" || f.email_02.value.trim()==""){
		alert("이메일을 입력하세요");
		f.name2.focus();
		return false;
	}
	if(f.name2.value.trim()=="" || f.email_02.value.trim()==""){
		alert("핸드폰을 입력하세요.");
		f.name2.focus();
		return false;
	}
	if(f.name2.value.trim()=="" || f.email_02.value.trim()==""){
		alert("주소를 입력하세요");
		f.name2.focus();
		return false;
	}
}
//이메일 체크 select 선택시 onchange 이벤트실행
function check_email(e) {
	console.log("선택한 이메일 :" +e.value);
	//선택된 값을 email_02 넣어주고
	ff=document.myform;
	if (e.value=="") {
			//직접선택시 email_02 값을 지우고 커서가 깜빡거리게한다
			ff.email_02.value="";
	} else {ff.email_02.value=e.value;

	}
	//직접선택시 email_02 값을 지우고 커서줌!!
}
