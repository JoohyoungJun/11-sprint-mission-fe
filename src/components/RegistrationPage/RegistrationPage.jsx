import { useState } from 'react';
import './RegistrationPage.css';
import { useNavigate } from 'react-router-dom';

//
const API_BASE_URL = 'https://panda-market-api.vercel.app/';

// test backend port
const TEST_BACKEND_PORT = 'http://localhost:3000';
export function RegistrationPage() {
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    id: '',
    name: '',
    description: '',
    price: '',
    tags: '',
    createdAt: '',
    updatedAt: '',
  });

  // 인풋 검증
  const isValid =
    product.name.trim().length > 0 &&
    product.name.trim().length < 10 &&
    product.description.trim().length >= 10 &&
    !isNaN(Number(product.price)) &&
    Number(product.price) > 0 &&
    product.tags.trim().length > 0 &&
    product.tags.trim().length <= 5;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setProduct((prev) => ({
      ...prev,
      [name]: value, // 사용자가 입력한 input[name]의 value에 입력받은 필드값을 저장
    }));
  };

  const handleSubmit = async () => {
    if (!isValid) {
      console.log('input value error');
    }

    const body = {
      name: product.name,
      description: product.description,
      price: product.price,
      tags: product.tags,
    };

    try {
      const res = await fetch(`${TEST_BACKEND_PORT}/products`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        console.log('res.status: ', res.status);
      }
      const created = await res.json();
      window.alert('상품이 등록되었습니다!');
      navigate(`/items/${created.id}`);
    } catch (err) {
      console.error('POST 실패', err);
    }
  };

  return (
    <form className="registrationWrapper" onSubmit={(e) => e.preventDefault()}>
      <div className="registrationTop">
        <h1 className="registrationTitle">상품 등록하기</h1>
        <button
          type="button"
          className={`registrationButton ${isValid ? 'active' : ''}`}
          onClick={handleSubmit}
          disabled={!isValid}
        >
          등록
        </button>
      </div>

      <div className="registrationContents">
        <div className="registrationInput">
          <h1 className="registrationTitle">상품명</h1>
          <input
            placeholder="상품명을 입력해주세요"
            id="name"
            name="name"
            value={product.name}
            onChange={handleChange}
            className={product.name.trim().length > 10 ? 'invalidInput' : ''}
          />
          {product.name.length > 10 && (
            <p className="errMessage">10자 이내로 입력해주세요</p>
          )}
        </div>

        <div className="registrationInput">
          <h1 className="registrationTitle">상품 소개</h1>
          <textarea
            placeholder="상품 소개를 입력해주세요"
            id="description"
            name="description"
            value={product.description}
            onChange={handleChange}
            className={
              product.description.trim().length < 10 ? 'invalidInput' : ''
            }
          />
          {product.description.length < 10 && (
            <p className="errMessage">10자 이상 입력해주세요</p>
          )}
        </div>

        <div className="registrationInput">
          <h1 className="registrationTitle">판매가격</h1>
          <input
            placeholder="판매 가격을 입력해주세요"
            id="price"
            name="price"
            value={product.price}
            onChange={handleChange}
            className={
              isNaN(product.price) || product.price < 0 ? 'invalidInput' : ''
            }
          />
          {isNaN(product.price) && (
            <p className="errMessage">숫자로 입력해주세요</p>
          )}
        </div>

        <div className="registrationInput">
          <h1 className="registrationTitle">태그</h1>
          <input
            placeholder="태그를 입력해주세요"
            id="tags"
            name="tags"
            value={product.tags}
            onChange={handleChange}
            className={product.tags.trim().length > 5 ? 'invalidInput' : ''}
          />
          {product.tags.length > 5 && (
            <p className="errMessage">5글자 이내로 입력해주세요</p>
          )}
        </div>
      </div>
    </form>
  );
}
