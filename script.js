document.addEventListener('DOMContentLoaded', () => {
  const form         = document.querySelector('.form_container');
  const submitBtn    = form.querySelector('.sign-in_btn');
  const originalText = submitBtn.textContent;
  const originalClass  = 'sign-in_btn';
  const submittedClass = 'submitted';

  // 버튼을 일반 button으로 변경
  submitBtn.type = 'button';

  // 버튼 리셋 로직
  function resetButton() {
    submitBtn.textContent = originalText;
    submitBtn.disabled   = false;
    submitBtn.classList.remove(submittedClass);
    submitBtn.classList.add(originalClass);
  }

  // 모든 input/textarea/checkbox 에 이벤트 달기
  const inputs = form.querySelectorAll(
    'input.input_field, textarea.input_field_large, input.input_field_checkbox'
  );
  inputs.forEach(el => {
    const ev = (el.type === 'checkbox') ? 'change' : 'input';
    el.addEventListener(ev, resetButton);
  });

  // 제출 버튼 클릭 핸들러
  submitBtn.addEventListener('click', () => {
    let allFilled = true;
    inputs.forEach(el => {
      if (el.type === 'checkbox') {
        if (!el.checked) allFilled = false;
      }
    })
    if (!allFilled) {
      alert("개인정보 수집·이용에 동의해주세요")
      return;
    }

    // 1) HTML5 기본 검증 트리거
    if (!form.checkValidity()) {
      form.reportValidity();
      return;

    }

    // 2) 버튼 상태 변경
    alert("신청이 완료되었습니다. 수정을 원하실 경우 동일 연락처로 다시 제출해주세요.")
    submitBtn.textContent = '신청 완료되었습니다.';
    submitBtn.disabled   = true;
    submitBtn.classList.remove(originalClass);
    submitBtn.classList.add(submittedClass);

    // 3) 실제 폼 제출
    form.submit();
  });
});
