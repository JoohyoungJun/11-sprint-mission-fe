// login
const loginEmail = document.getElementById('login-email');
const loginPw = document.getElementById('login-pw');
const loginBtn = document.getElementById('login-btn');
const loginEmailError = document.getElementById('login-email-err-msg');
const loginPwError = document.getElementById('login-pw-err-msg');

// signup
const signupEmail = document.getElementById('signup-email');
const signupUserName = document.getElementById('signup-username');
const signupPw = document.getElementById('signup-pw');
const signupPwCheck = document.getElementById('signup-pw-check');
const signupPwCheckError = document.getElementById('signup-pw-check-err-msg');
const signupBtn = document.getElementById('signup-btn');
const signupEmailError = document.getElementById('signup-email-err-msg');
const signupPwError = document.getElementById('signup-pw-err-msg');

const USER_DATA = [
  { email: 'codeit1@codeit.com', password: 'codeit101!' },
  { email: 'codeit2@codeit.com', password: 'codeit202!' },
  { email: 'codeit3@codeit.com', password: 'codeit303!' },
  { email: 'codeit4@codeit.com', password: 'codeit404!' },
  { email: 'codeit5@codeit.com', password: 'codeit505!' },
  { email: 'codeit6@codeit.com', password: 'codeit606!' },
];

const emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

// login page
if (loginEmail && loginPw && loginBtn && loginEmailError && loginPwError) {
  const validateEmail = () => {
    const email = loginEmail.value.trim();

    if (!emailRegex.test(email)) {
      loginEmailError.textContent = '잘못된 이메일 형식입니다';
      return false;
    }

    loginEmailError.textContent = '';
    return true;
  };

  const validatePW = () => {
    const password = loginPw.value.trim();

    if (password.length < 8) {
      loginPwError.textContent = '비밀번호를 8자 이상 입력해주세요.';
      return false;
    }

    loginPwError.textContent = '';
    return true;
  };

  const updateLoginBtn = () => {
    // 둘 다 유효해야
    if (!validateEmail() || !validatePW()) {
      loginBtn.disabled = true;
    } else {
      loginBtn.disabled = false;
    }
  };

  // input(타이핑) 시 버튼 갱신
  loginEmail.addEventListener('input', updateLoginBtn);
  loginPw.addEventListener('input', updateLoginBtn);

  // focus out(blur) 시 에러메시지 표시 + 버튼 갱신
  loginEmail.addEventListener('blur', updateLoginBtn);
  loginPw.addEventListener('blur', updateLoginBtn);

  // 로그인 버튼 클릭
  loginBtn.addEventListener('click', (event) => {
    event.preventDefault();
    if (loginBtn.disabled) return;

    const inputEmail = loginEmail.value.trim();
    const inputPw = loginPw.value.trim();

    const user = USER_DATA.find((u) => u.email === inputEmail);

    if (!user || user.password !== inputPw) {
      window.alert('비밀번호가 일치하지 않습니다.');
      return;
    }

    window.location.href = './items.html';
  });
}

// signup page
if (signupEmail && signupUserName && signupPw && signupPwCheck && signupBtn) {
  const checkEmailExists = () => {
    const email = signupEmail.value.trim();
    if (USER_DATA.some((user) => user.email === email)) {
      window.alert('사용중인 이메일입니다!');
      return true;
    }
    return false;
  };

  const validateSignupEmail = () => {
    const email = signupEmail.value.trim();

    if (!emailRegex.test(email)) {
      signupEmailError.textContent = '잘못된 이메일 형식입니다';
      return false;
    }

    signupEmailError.textContent = '';
    return true;
  };

  const validateSignupPW = () => {
    const password = signupPw.value.trim();

    if (password.length < 8) {
      signupPwError.textContent = '비밀번호를 8자 이상 입력해주세요.';
      return false;
    }

    signupPwError.textContent = '';
    return true;
  };

  const validateSignupUserName = () => {
    const name = signupUserName.value.trim();
    return name ? true : false;
  };

  const validatePwCheck = () => {
    const pw1 = signupPw.value.trim();
    const pw2 = signupPwCheck.value.trim();

    if (pw1 !== pw2) {
      signupPwCheckError.textContent = '비밀번호가 일치하지 않습니다.';
      return false;
    }

    signupPwCheckError.textContent = '';
    return true;
  };

  const updateSignupBtn = () => {
    if (
      !validateSignupEmail() ||
      !validateSignupUserName() ||
      !validateSignupPW() ||
      !validatePwCheck() ||
      checkEmailExists()
    ) {
      signupBtn.disabled = true;
    } else {
      signupBtn.disabled = false;
    }
  };

  signupEmail.addEventListener('input', updateSignupBtn);
  signupUserName.addEventListener('input', updateSignupBtn);
  signupPw.addEventListener('input', updateSignupBtn);
  signupPwCheck.addEventListener('input', updateSignupBtn);
  signupEmail.addEventListener('blur', updateSignupBtn);
  signupUserName.addEventListener('blur', updateSignupBtn);
  signupPw.addEventListener('blur', updateSignupBtn);
  signupPwCheck.addEventListener('blur', updateSignupBtn);

  console.log(signupEmail.value);
  console.log(signupPw.value);
  console.log(signupPwCheck.value);
  console.log(signupUserName.value);

  // 회원가입 버튼 클릭
  signupBtn.addEventListener('click', (event) => {
    event.preventDefault();

    console.log(signupEmail.value);
    console.log(signupPw.value);
    console.log(signupPwCheck.value);
    console.log(signupUserName.value);

    if (checkEmailExists()) {
      window.alert('사용 중인 이메일입니다');
      return;
    }

    window.location.href = './login.html';
  });
}
