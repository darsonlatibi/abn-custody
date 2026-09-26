import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import api from "../../api/axios";

import "./ProductsForSale.css";

interface Product {
  id: number;
  product_id: string;
  userId: number;

  name: string;
  description?: string | null;

  price: number | string;
  stock: number;

  image?: string | null;

  category?: string | null;
  source?: string | null;
  tax_percent?: number | string;
}

interface ProductsResponse {
  success?: boolean;
  message?: string;
  data?: Product[];
}

const formatRupiah = (value: number | string) => {
  const amount = Number(value || 0);

  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(amount);
};

const getProductIcon = (category?: string | null) => {
  const value = String(category || "").toLowerCase();

  if (value.includes("kopi")) {
    return (
      <svg
        viewBox="0 0 24 24"
        width="21"
        height="21"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 8h13v6a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V8Z" />
        <path d="M17 10h1.5a2.5 2.5 0 0 1 0 5H17" />
        <path d="M8 4c0 1-1 1-1 2" />
        <path d="M12 4c0 1-1 1-1 2" />
      </svg>
    );
  }

  if (value.includes("ems")) {
    return (
      <svg
        viewBox="0 0 24 24"
        width="21"
        height="21"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M8 8h8M8 12h8M8 16h5" />
        <path d="M16 15v3M19 15v3" />
      </svg>
    );
  }

  if (value.includes("software") || value.includes("license")) {
    return (
      <svg
        viewBox="0 0 24 24"
        width="21"
        height="21"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <path d="M8 21h8M12 18v3" />
        <path d="m9 9 2 2-2 2M13 13h3" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      width="21"
      height="21"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="4" width="18" height="16" rx="3" />
      <path d="M3 9h18" />
      <path d="M8 4v5M16 4v5" />
    </svg>
  );
};

const getProductTags = (product: Product) => {
  const tags: string[] = [];

  if (product.category) {
    tags.push(product.category);
  }

  if (product.source) {
    tags.push(product.source);
  }

  if (Number(product.tax_percent) > 0) {
    tags.push(`Tax ${product.tax_percent}%`);
  }

  return tags.slice(0, 3);
};

const ProductsForSale = () => {
  const navigate = useNavigate();

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadProducts = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await api.get<ProductsResponse>("/products");

      if (!response.data?.success) {
        throw new Error(
          response.data?.message || "Gagal mengambil data products.",
        );
      }

      setProducts(response.data.data || []);
    } catch (error: unknown) {
      console.error("PRODUCTS FOR SALE ERROR:", error);

      if (typeof error === "object" && error !== null && "response" in error) {
        const axiosError = error as {
          response?: {
            data?: {
              message?: string;
            };
          };
          message?: string;
        };

        setError(
          axiosError.response?.data?.message ||
            axiosError.message ||
            "Gagal mengambil data products.",
        );
      } else if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("Gagal mengambil data products.");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const availableProducts = useMemo(
    () => products.filter((product) => Number(product.stock) > 0),
    [products],
  );

  const handleBuy = (product: Product) => {
    if (Number(product.stock) <= 0) {
      return;
    }

    /*
     * Cart akan kita sambungkan pada tahap berikutnya.
     *
     * Untuk sementara kita kirim product ke route
     * detail/cart menggunakan product ID.
     */
    navigate(`/products/${product.id}`);
  };

  return (
    <main className="products-page">
      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="products-header">
        <div className="products-header-content">
          <span className="products-eyebrow">
            ABN DIGITAL & INDUSTRIAL TECHNOLOGY
          </span>

          <h1>Products</h1>

          <p>
            Discover ABN products and technology solutions designed for
            business, industrial operations, and digital transformation.
          </p>
        </div>

        <div className="products-header-badge">
          <div className="products-badge-icon">
            <svg
              viewBox="0 0 24 24"
              width="19"
              height="19"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 7h18" />
              <path d="M5 7v12h14V7" />
              <path d="M8 7V5a4 4 0 0 1 8 0v2" />
            </svg>
          </div>

          <div>
            <strong>ABN PRODUCT STORE</strong>

            <small>
              {loading
                ? "Loading products..."
                : `${products.length} product${products.length !== 1 ? "s" : ""} available`}
            </small>
          </div>
        </div>
      </header>

      {/* =====================================================
          FEATURED PRODUCTS
      ===================================================== */}

      <section className="products-featured">
        <div className="products-section-heading">
          <div>
            <span className="section-eyebrow">PRODUCT CATALOG</span>

            <h2>Available Products</h2>
          </div>

          <p>
            Select a product to continue to the purchasing process. Product
            pricing and availability are retrieved directly from ABN.
          </p>
        </div>

        {/* ===================================================
            LOADING
        =================================================== */}

        {loading && (
          <div className="products-intelligence">
            <div className="products-intelligence-copy">
              <h2>Loading Product Catalog</h2>

              <p>
                Connecting to the ABN product service and retrieving the latest
                product information.
              </p>

              <div className="products-intelligence-points">
                <div className="products-intelligence-point">
                  <svg
                    viewBox="0 0 24 24"
                    width="15"
                    height="15"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 8v4l2.5 2.5" />
                  </svg>
                  Loading catalog
                </div>

                <div className="products-intelligence-point">
                  <svg
                    viewBox="0 0 24 24"
                    width="15"
                    height="15"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path d="M8 12l2.5 2.5L16 9" />
                  </svg>
                  Checking availability
                </div>
              </div>
            </div>

            <div className="products-intelligence-stack">
              <div className="products-stack-item active">
                <span>01</span>

                <div>
                  <strong>PRODUCT SERVICE</strong>

                  <small>Retrieving current catalog data</small>
                </div>
              </div>

              <div className="products-stack-connector" />

              <div className="products-stack-item">
                <span>02</span>

                <div>
                  <strong>INVENTORY</strong>

                  <small>Checking stock availability</small>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ===================================================
            ERROR
        =================================================== */}

        {!loading && error && (
          <div className="products-cta">
            <div>
              <h2>Unable to load products</h2>

              <p>{error}</p>
            </div>

            <button
              type="button"
              className="products-button"
              onClick={loadProducts}
            >
              Retry
              <svg
                viewBox="0 0 24 24"
                width="14"
                height="14"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M20 11a8 8 0 1 0 1 4" />
                <path d="M20 5v6h-6" />
              </svg>
            </button>
          </div>
        )}

        {/* ===================================================
            EMPTY
        =================================================== */}

        {!loading && !error && products.length === 0 && (
          <div className="products-cta">
            <div>
              <h2>No products available</h2>

              <p>
                The ABN product catalog currently does not contain any products
                for sale.
              </p>
            </div>
          </div>
        )}

        {/* ===================================================
            PRODUCT GRID
        =================================================== */}

        {!loading && !error && products.length > 0 && (
          <div className="products-featured-grid">
            {products.map((product, index) => {
              const stock = Number(product.stock || 0);
              const isAvailable = stock > 0;

              const tags = getProductTags(product);

              return (
                <article
                  key={product.id}
                  className={`product-card ${index < 4 ? "featured" : ""}`}
                >
                  {/* Industrial background */}

                  <div className="product-card-background">
                    {getProductIcon(product.category)}
                  </div>

                  {/* Top */}

                  <div className="product-card-top">
                    <div className="product-icon">
                      {getProductIcon(product.category)}
                    </div>

                    <span className="product-number">
                      PRD-{String(product.id).padStart(3, "0")}
                    </span>
                  </div>

                  {/* Content */}

                  <div className="product-card-content">
                    <span className="product-category">
                      {product.category || "ABN PRODUCT"}
                    </span>

                    <h3>{product.name}</h3>

                    <p>
                      {product.description ||
                        "ABN digital and industrial technology product."}
                    </p>

                    <div className="product-tags">
                      {tags.map((tag) => (
                        <span key={`${product.id}-${tag}`}>{tag}</span>
                      ))}

                      <span>{formatRupiah(product.price)}</span>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "10px",
                        marginTop: "10px",
                      }}
                    >
                      <span
                        className={`product-status ${
                          isAvailable ? "available" : "custom"
                        }`}
                      >
                        {isAvailable ? `${stock} AVAILABLE` : "OUT OF STOCK"}
                      </span>

                      <strong
                        style={{
                          color: "var(--text-primary)",
                          fontSize: "11px",
                          fontWeight: 800,
                          whiteSpace: "nowrap",
                        }}
                      >
                        {formatRupiah(product.price)}
                      </strong>
                    </div>

                    <button
                      type="button"
                      className="product-link"
                      disabled={!isAvailable}
                      onClick={() => handleBuy(product)}
                    >
                      {isAvailable ? "View Product" : "Currently Unavailable"}

                      {isAvailable && (
                        <svg
                          viewBox="0 0 24 24"
                          width="13"
                          height="13"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14" />
                          <path d="m13 6 6 6-6 6" />
                        </svg>
                      )}
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>

      {/* =====================================================
          INTELLIGENCE / PURCHASE FLOW
      ===================================================== */}

      {!loading && !error && products.length > 0 && (
        <section className="products-intelligence">
          <div className="products-intelligence-copy">
            <h2>ABN Digital Commerce</h2>

            <p>
              ABN provides a unified purchasing experience for products and
              digital industrial solutions. Availability and pricing are
              connected directly to the ABN product database.
            </p>

            <div className="products-intelligence-points">
              <div className="products-intelligence-point">
                <svg
                  viewBox="0 0 24 24"
                  width="15"
                  height="15"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path d="m8 12 2.5 2.5L16 9" />
                </svg>
                Real-time product availability
              </div>

              <div className="products-intelligence-point">
                <svg
                  viewBox="0 0 24 24"
                  width="15"
                  height="15"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path d="m8 12 2.5 2.5L16 9" />
                </svg>
                Database-driven product pricing
              </div>

              <div className="products-intelligence-point">
                <svg
                  viewBox="0 0 24 24"
                  width="15"
                  height="15"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path d="m8 12 2.5 2.5L16 9" />
                </svg>
                Secure Midtrans payment integration
              </div>
            </div>
          </div>

          <div className="products-intelligence-stack">
            <div className="products-stack-item active">
              <span>01</span>

              <div>
                <strong>PRODUCT</strong>

                <small>Select product from ABN catalog</small>
              </div>
            </div>

            <div className="products-stack-connector" />

            <div className="products-stack-item">
              <span>02</span>

              <div>
                <strong>ORDER</strong>

                <small>Create order with current pricing</small>
              </div>
            </div>

            <div className="products-stack-connector" />

            <div className="products-stack-item">
              <span>03</span>

              <div>
                <strong>PAYMENT</strong>

                <small>Complete payment through Midtrans</small>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* =====================================================
          CTA
      ===================================================== */}

      {!loading && !error && products.length > 0 && (
        <section className="products-cta">
          <div>
            <h2>Ready to purchase?</h2>

            <p>Select a product above to continue with your ABN transaction.</p>
          </div>

          <button
            type="button"
            className="products-button"
            onClick={() => {
              if (availableProducts.length > 0) {
                handleBuy(availableProducts[0]);
              }
            }}
            disabled={availableProducts.length === 0}
          >
            Explore Products
            <svg
              viewBox="0 0 24 24"
              width="14"
              height="14"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m13 6 6 6-6 6" />
            </svg>
          </button>
        </section>
      )}
    </main>
  );
};

export default ProductsForSale;
