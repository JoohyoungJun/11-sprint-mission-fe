import { useParams } from 'react-router-dom';

export function ProductDetailPage() {
  const { productId } = useParams();

  return (
    <>
      <h1>상품 등록 후 상세 안내 페이지</h1>
      <p>productId: {productId}</p>
    </>
  );
}
