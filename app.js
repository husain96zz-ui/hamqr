// البرمجة التفاعلية لفتح النوافذ المنبثقة والتنقل
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal');
  const modalTitle = document.getElementById('modal-title');
  const modalCopy = document.getElementById('modal-copy');
  const closeModal = document.querySelector('.close');

  // فتح نافذة التسجيل أو الدخول
  document.querySelectorAll('[data-modal]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const type = btn.getAttribute('data-modal');
      if (type === 'login') {
        modalTitle.innerText = 'تسجيل الدخول';
        modalCopy.innerText = 'أدخل بيانات حسابك للمتابعة إلى لوحة التحكم.';
      } else {
        modalTitle.innerText = 'ابدأ مع HAMQR';
        modalCopy.innerText = 'أنشئ حساب مطعمك وابدأ تجربة المنيو الرقمي.';
      }
      modal.classList.add('show');
    });
  });

  // إغلاق النافذة المنبثقة
  if (closeModal) {
    closeModal.addEventListener('click', () => {
      modal.classList.remove('show');
    });
  }

  // إغلاق عند الضغط خارج النافذة
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('show');
    }
  });

  // معالجة نموذج التسجيل
  const form = document.getElementById('signup-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('تم استلام طلبك بنجاح! سنتواصل معك قريباً لتفعيل حساب المطعم.');
      modal.classList.remove('show');
    });
  }
});
