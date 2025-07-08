
import React, { useState, useEffect, useMemo } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useCart } from '../contexts/CartContext';
import { Header } from '../components/layout/Header';
import { CategorySidebar } from '../components/layout/CategorySidebar';
import { ProductGrid } from '../components/product/ProductGrid';
import { CartDrawer } from '../components/cart/CartDrawer';
import { AuthModal } from '../components/auth/AuthModal';
import { PrivateStoreMessage } from '../components/layout/PrivateStoreMessage';
import { mockCompanies, mockCategories, mockProducts } from '../data/mockData';

const Index = () => {
  const { user, company, setCurrentCompany } = useAuth();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [showCart, setShowCart] = useState(false);
  const [showAuth, setShowAuth] = useState(false);

  // Configurar empresa por defecto (en una app real esto vendría de la URL o configuración)
  useEffect(() => {
    if (!company) {
      setCurrentCompany(mockCompanies[0]);
    }
  }, [company, setCurrentCompany]);

  // Limpiar filtros al cambiar de tienda
  useEffect(() => {
    if (company) {
      setSelectedCategory(null);
      setSearchTerm('');
    }
  }, [company?.id]);

  // Filtrar categorías y productos por empresa actual
  const categories = useMemo(() => {
    return mockCategories.filter(cat => cat.companyId === company?.id);
  }, [company?.id]);

  const filteredProducts = useMemo(() => {
    let products = mockProducts.filter(product => product.companyId === company?.id);

    // Filtrar por categoría
    if (selectedCategory) {
      products = products.filter(product => product.categoryId === selectedCategory);
    }

    // Filtrar por búsqueda
    if (searchTerm) {
      products = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return products;
  }, [company?.id, selectedCategory, searchTerm]);

  // Verificar si se debe mostrar el contenido o el mensaje de tienda privada
  const shouldShowContent = !company?.showPublic ? !!user : true;

  if (!company) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Cargando tienda...</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        onCartClick={() => setShowCart(true)}
        onAuthClick={() => setShowAuth(true)}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />

      <div className="flex">
        {shouldShowContent ? (
          <>
            <CategorySidebar
              categories={categories}
              selectedCategory={selectedCategory}
              onCategorySelect={setSelectedCategory}
            />
            <ProductGrid products={filteredProducts} />
          </>
        ) : (
          <PrivateStoreMessage onAuthClick={() => setShowAuth(true)} />
        )}
      </div>

      <CartDrawer
        isOpen={showCart}
        onClose={() => setShowCart(false)}
      />

      <AuthModal
        isOpen={showAuth}
        onClose={() => setShowAuth(false)}
      />
    </div>
  );
};

export default Index;
