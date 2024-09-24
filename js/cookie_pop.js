/*
	문자열.indexOf('찾을 문자열') : 전체문자열에서 찾을 문자열이 위치해있는 순서값 반환, 
	만약 전체문자열에서 찾을 문자열이 없으면 -1을 반환

	1. 모달의 닫기 버튼 클릭시 모달 안보이게 하기
	2. 체크박스 선택한 뒤 닫기버튼 클릭시 모달 안보이게 함과 동시에 today=done쿠키를 하루만료기한 생성
	3. 스크립트가 처음 로딩될떄 조건문으로 today=done이라는 쿠키가 있으면 팝업안보이게 처리 없으면 보이게처리
*/

const [btnView, btnSet, btnDel] = document.querySelectorAll("button");
const modal = document.querySelector("aside");
const btnClose = modal.querySelector("button");
const ck = modal.querySelector("#ck");

btnView.addEventListener("click", () => {
	console.log(document.cookie);
});

btnSet.addEventListener("click", () => {
	setCookie("today", "done", 1);
});

btnDel.addEventListener("click", () => {
	setCookie("today", "done", 0);
});

//닫기 버튼 클릭시 모달 안보임 처리
btnClose.addEventListener("click", () => {
	console.dir(ck); //해당 구문으로 확신시 checked는 프로퍼티가 true면 (체크된 상태), false(미체크 상태)
	//닫기 버튼 클릭시 체크박스가 체크되어 있으면 쿠키 생성
	if (ck.checked) setCookie("today", "done", 1);
	modal.style.display = "none";
});

//쿠키 생성 함수
function setCookie(name, value, day) {
	let now = new Date();
	let duedate = now.getTime() + day * 1000 * 60 * 60 * 24;
	now.setTime(duedate);
	document.cookie = `${name}=${value}; path=/; expires=${now.toUTCString()}`;
}
//미션 - 웹 페이지 새로 고침시 today=done이라는 쿠키가 있으면 팝업 스타일 none처리해서 숨김
//없으면 팝업 스타일 block처리해서 보임 처리
//문자열.indexOf('찾을문자열') 구문으로 특정 쿠키 있는지 없는지 확인 가능
//step1 - 스크립트 실행되자 마자 document.cookie.indexOf('today=done') 구문을 이용해서 순서값을 반환
//step2 - 쿠키에 해당하는 문자열이 있으면 0이상의 숫자 반환, -1이라는 음수가 반환
//step3- 위의 결과값을 조걱식 처림 indexOf() < 0 (쿠키가 없다라는 조건식)
//step4 - modal.style.display = 'none' 안보이게 처림 (쿠키 있을때)
//step5 = modal.style.display = 'block' 보임처리 (쿠기 없을떄)
