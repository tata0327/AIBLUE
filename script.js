document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('mobile-toggle');
  const mobileMenu  = document.getElementById('mobile-menu');
  const links = document.querySelectorAll('nav a');

  // 토글 모바일 메뉴
  toggleButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  // 스크롤 & 메뉴 자동 닫기
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
      mobileMenu.classList.add('hidden');
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('.form_container');
  const submitBtn = form.querySelector('.sign-in_btn');
  // 버튼을 일반 버튼으로 설정
  submitBtn.type = 'button';

  // 원래 텍스트와 클래스 이름 지정
  const originalText = submitBtn.textContent;
  const originalClass = 'sign-in_btn';
  const submittedClass = 'submitted';

  // 모든 입력 필드 선택 및 변경 시 버튼 리셋
  const inputs = form.querySelectorAll('.input_field');
  inputs.forEach(input => {
    input.addEventListener('input', function() {
      if (submitBtn.textContent !== originalText) {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        submitBtn.classList.remove(submittedClass);
        submitBtn.classList.add(originalClass);
      }
    });
  });

  // 버튼 클릭 시 유효성 검사 및 제출 처리
  submitBtn.addEventListener('click', function() {
    let allFilled = true;
    inputs.forEach(input => {
      if (!input.value.trim()) {
        allFilled = false;
      }
    });

    if (!allFilled) {
      alert('모든 항목을 입력해주세요.');
      return;
    }

    // 텍스트 및 클래스 변경 후 폼 제출
    submitBtn.textContent = '신청 완료 ✅';
    submitBtn.disabled = true;
    submitBtn.classList.remove(originalClass);
    submitBtn.classList.add(submittedClass);
    form.submit();
    alert('신청이 완료되었습니다. 수정을 원하시면 수정 후, 다시 제출해주세요.(*동일 연락처로 제출하셔야 합니다.)');
  });
});
