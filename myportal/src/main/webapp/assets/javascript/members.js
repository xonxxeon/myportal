function checkForm(frm) {
	console.log(frm);
	
	var name = frm.name.value.trim();
	var password = frm.password.value.trim();
	var email = frm.email.value.trim();
	var gender = frm.gender.value;
	
	//	TODO : 추가검증
	if (name.length < 3) {
		alert("이름은 3자리 이상의 문자입니다.");
		frm.name.focus();
	} else if (password.length < 8) {
		alert("비밀번호는 8자리 이상이어야 합니다.");
		frm.password.focus();
	} else if (email.length < 10) {
		alert("이메일은 10자리 이상으로 입력해 주세요.");
		frm.email.focus();
	} else if (gender != 'M' && gender != 'F') {
		alert("성별을 선택해 주세요.");
	} else {	//	검증 통과
		return true;	//	폼 전송
	}
	
	return false;	//	onsubmit 이벤트에서 true 여야 전송
	
}