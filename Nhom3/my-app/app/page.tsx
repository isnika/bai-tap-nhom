import { getRandomProduct } from "./lib/api";

export default async function Home() {
  const product = await getRandomProduct();

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: 50 }}>
      <div
        style={{
          border: "1px solid #ddd",
          padding: 20,
          borderRadius: 10,
          width: 250,
          textAlign: "center",
        }}
      >
        <h3>Nika Style 2026</h3>

        <img
          src={product.thumbnail}
          alt={product.title}
          style={{ width: "100%", borderRadius: 10 }}
        />

        <p style={{ color: "red", fontWeight: "bold" }}>
          ${product.price}
        </p>

        <p>{product.title}</p>

        <button
          style={{
            background: "black",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: 5,
            cursor: "pointer",
            marginTop:10,
          }}
        >
          Thêm vào giỏ hàng
        </button>
      </div>
    </div>
  );
}