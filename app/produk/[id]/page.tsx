import { getProductById, products } from "@/app/data/products";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import FadeIn from "@/app/components/FadeIn";
import { Star, ArrowLeft, ShieldCheck, ShoppingBag, Send } from "lucide-react";

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const product = getProductById(resolvedParams.id);
  if (!product) return { title: "Produk Tidak Ditemukan" };

  return {
    title: `${product.name} - Handmade By Sarah`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const product = getProductById(resolvedParams.id);

  if (!product) {
    notFound();
  }

  const waMessage = `Halo kak, saya tertarik dengan ${product.name} (${product.formattedPrice}). Apakah masih bisa dipesan?`;

  return (
    <main className="pt-24 pb-16 min-h-screen bg-surface">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        
        {/* Breadcrumb / Back */}
        <Link href="/#katalog" className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors mb-8 font-medium">
          <ArrowLeft size={20} />
          <span>Kembali ke Katalog</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Image Gallery */}
          <FadeIn direction="right">
            <div className="space-y-4">
              <div className="aspect-square rounded-3xl overflow-hidden bg-surface-container-low border border-outline-variant/30">
                <Image 
                  src={product.image} 
                  alt={product.name} 
                  width={800} 
                  height={800} 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Optional smaller gallery thumbnails if we want */}
              <div className="grid grid-cols-4 gap-4">
                {product.gallery.map((img, i) => (
                  <div key={i} className="aspect-square rounded-2xl overflow-hidden bg-surface-container-low border border-outline-variant/30 cursor-pointer hover:border-primary transition-colors">
                    <Image src={img} alt={`${product.name} view ${i}`} width={200} height={200} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Product Details */}
          <FadeIn direction="left" delay={0.2}>
            <div className="flex flex-col h-full">
              {/* Badge & Rating */}
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-primary-container text-on-primary-container px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  Produk Terlaris
                </span>
                <div className="flex items-center gap-1 text-[#FFB800]">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="text-sm font-bold text-on-surface ml-1">{product.rating} / 5.0</span>
                </div>
              </div>

              <h1 className="font-display font-bold text-3xl md:text-4xl text-on-surface mb-4 leading-tight">
                {product.name}
              </h1>

              <div className="text-3xl font-bold text-primary mb-8">
                {product.formattedPrice}
              </div>

              {/* Description */}
              <div className="prose prose-on-surface-variant mb-8">
                <p className="text-on-surface-variant leading-relaxed text-lg">
                  {product.description}
                </p>
              </div>

              {/* Features List */}
              <div className="mb-10">
                <h3 className="font-bold text-on-surface mb-4">Keunggulan Produk:</h3>
                <ul className="space-y-3">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <ShieldCheck className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                      <span className="text-on-surface-variant">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto space-y-4 pt-8 border-t border-outline-variant/30">
                <a 
                  href={product.shopeeUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-3 bg-[#EE4D2D] hover:bg-[#D73211] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  <ShoppingBag size={24} />
                  Beli via Shopee (Aman & Bergaransi)
                </a>
                
                <a 
                  href={`https://wa.me/6281234567890?text=${encodeURIComponent(waMessage)}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-3 bg-surface-container-high hover:bg-surface-container-highest text-on-surface px-8 py-4 rounded-xl font-bold text-lg transition-all"
                >
                  <Send size={24} className="text-[#25D366]" />
                  Konsultasi / Custom Ukuran via WA
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </main>
  );
}
