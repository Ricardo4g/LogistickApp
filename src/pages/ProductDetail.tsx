
import React, { useState, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Plus, Minus, ShoppingCart, Star, Package, Truck, Shield } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useCart } from '../contexts/CartContext';
import { mockProducts } from '../data/mockData';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Separator } from '../components/ui/separator';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';

const ProductDetail = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { user, company } = useAuth();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedPresentation, setSelectedPresentation] = useState<string>('');

  const product = useMemo(() => {
    return mockProducts.find(p => p.id === productId);
  }, [productId]);

  // Set default presentation when product loads
  React.useEffect(() => {
    if (product?.presentations && product.presentations.length > 0 && !selectedPresentation) {
      setSelectedPresentation(product.presentations[0].name);
    }
  }, [product, selectedPresentation]);

  if (!product || !company) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-xl sm:text-2xl font-bold mb-4">Producto no encontrado</h1>
          <Button onClick={() => navigate('/')}>Volver al inicio</Button>
        </div>
      </div>
    );
  }

  const getProductPrice = (presentation?: string): number => {
    let basePrice = 0;
    
    if (!user) {
      basePrice = product.publicPrice || 0;
    } else {
      const userPrice = product.prices.find(p => p.clientType === user.clientType);
      basePrice = userPrice?.price || product.publicPrice || 0;
    }

    // Apply presentation multiplier if applicable
    if (presentation && product.presentations) {
      const presentationData = product.presentations.find(p => p.name === presentation);
      if (presentationData) {
        basePrice = basePrice * presentationData.priceMultiplier;
      }
    }

    return basePrice;
  };

  const price = getProductPrice(selectedPresentation);
  const showPrice = user || company?.showPublic;
  const totalPrice = price * quantity;

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedPresentation || undefined);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 1;
    handleQuantityChange(value);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header 
        className="sticky top-0 z-50 bg-white shadow-md border-b"
        style={{ borderColor: company.primaryColor }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            <div className="flex items-center space-x-2 sm:space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate('/')}
                className="flex items-center space-x-1 sm:space-x-2"
              >
                <ArrowLeft className="h-4 w-4" />
                <span className="hidden sm:inline">Volver</span>
              </Button>
              
              <div className="flex items-center space-x-2 sm:space-x-3">
                <img 
                  src={company.logo} 
                  alt={company.name}
                  className="h-6 w-6 sm:h-8 sm:w-8 rounded-full object-cover"
                />
                <h1 
                  className="text-sm sm:text-lg font-bold truncate"
                  style={{ color: company.primaryColor }}
                >
                  {company.name}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Imagen del producto */}
          <div className="space-y-4">
            <div className="aspect-square rounded-lg overflow-hidden bg-white shadow-lg">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Información del producto */}
          <div className="space-y-4 sm:space-y-6">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                {product.name}
              </h1>
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-3 w-3 sm:h-4 sm:w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <span className="text-xs sm:text-sm text-gray-600">(4.8)</span>
              </div>
              
              {showPrice && (
                <div className="mb-4">
                  <span 
                    className="text-2xl sm:text-4xl font-bold"
                    style={{ color: company.primaryColor }}
                  >
                    ${price.toLocaleString()}
                  </span>
                  {user && (
                    <Badge variant="secondary" className="ml-2 text-xs">
                      Precio {user.clientType}
                    </Badge>
                  )}
                </div>
              )}
            </div>

            <Separator />

            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-2">Descripción</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Selector de presentaciones */}
            {product.presentations && product.presentations.length > 0 && (
              <div>
                <h3 className="text-base sm:text-lg font-semibold mb-2">Presentación</h3>
                <Select value={selectedPresentation} onValueChange={setSelectedPresentation}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Selecciona una presentación" />
                  </SelectTrigger>
                  <SelectContent>
                    {product.presentations.map((presentation) => (
                      <SelectItem key={presentation.name} value={presentation.name}>
                        {presentation.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}

            {/* Sabores */}
            {product.flavors && (
              <div>
                <h3 className="text-base sm:text-lg font-semibold mb-2">Sabores disponibles</h3>
                <div className="flex flex-wrap gap-2">
                  {product.flavors.map((flavor, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {flavor}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            <Separator />

            {/* Selector de cantidad */}
            {showPrice && (
              <div className="space-y-4">
                <div>
                  <h3 className="text-base sm:text-lg font-semibold mb-3">Cantidad</h3>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
                    <div className="flex items-center border rounded-lg">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleQuantityChange(quantity - 1)}
                        disabled={quantity <= 1}
                        className="h-10 w-10"
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      
                      <input
                        type="number"
                        value={quantity}
                        onChange={handleInputChange}
                        min="1"
                        className="w-16 h-10 text-center border-0 focus:ring-0 focus:outline-none"
                      />
                      
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleQuantityChange(quantity + 1)}
                        className="h-10 w-10"
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    
                    <div className="flex-1">
                      <div className="text-sm text-gray-600">Total:</div>
                      <div 
                        className="text-xl sm:text-2xl font-bold"
                        style={{ color: company.primaryColor }}
                      >
                        ${totalPrice.toLocaleString()}
                      </div>
                    </div>
                  </div>
                </div>

                <Button
                  onClick={handleAddToCart}
                  className="w-full h-12 text-base sm:text-lg"
                  style={{ backgroundColor: company.primaryColor }}
                >
                  <ShoppingCart className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                  Agregar al carrito
                </Button>
              </div>
            )}

            {!showPrice && (
              <div className="text-center p-4 bg-gray-100 rounded-lg">
                <p className="text-sm sm:text-base text-gray-600">
                  Inicia sesión para ver precios y agregar al carrito
                </p>
              </div>
            )}

            {/* Información adicional */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600">
                <Package className="h-4 w-4 flex-shrink-0" />
                <span>Envío disponible</span>
              </div>
              <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600">
                <Truck className="h-4 w-4 flex-shrink-0" />
                <span>Entrega local</span>
              </div>
              <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600">
                <Shield className="h-4 w-4 flex-shrink-0" />
                <span>Calidad garantizada</span>
              </div>
            </div>
          </div>
        </div>

        {/* Información nutricional */}
        {product.nutritionalInfo && (
          <div className="mt-8 sm:mt-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Información Nutricional</CardTitle>
                <p className="text-xs sm:text-sm text-gray-600">
                  Por {product.nutritionalInfo.servingSize}
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {product.nutritionalInfo.calories && (
                    <div className="text-center">
                      <div className="text-xl sm:text-2xl font-bold text-orange-600">
                        {product.nutritionalInfo.calories}
                      </div>
                      <div className="text-xs sm:text-sm text-gray-600">Calorías</div>
                    </div>
                  )}
                  {product.nutritionalInfo.protein && (
                    <div className="text-center">
                      <div className="text-xl sm:text-2xl font-bold text-blue-600">
                        {product.nutritionalInfo.protein}
                      </div>
                      <div className="text-xs sm:text-sm text-gray-600">Proteínas</div>
                    </div>
                  )}
                  {product.nutritionalInfo.totalFat && (
                    <div className="text-center">
                      <div className="text-xl sm:text-2xl font-bold text-red-600">
                        {product.nutritionalInfo.totalFat}
                      </div>
                      <div className="text-xs sm:text-sm text-gray-600">Grasas</div>
                    </div>
                  )}
                  {product.nutritionalInfo.carbohydrates && (
                    <div className="text-center">
                      <div className="text-xl sm:text-2xl font-bold text-green-600">
                        {product.nutritionalInfo.carbohydrates}
                      </div>
                      <div className="text-xs sm:text-sm text-gray-600">Carbohidratos</div>
                    </div>
                  )}
                </div>
                
                {(product.nutritionalInfo.sodium || product.nutritionalInfo.vitaminA || product.nutritionalInfo.vitaminD) && (
                  <div className="mt-6 pt-4 border-t">
                    <h4 className="font-semibold mb-2 text-sm sm:text-base">Otros nutrientes:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm">
                      {product.nutritionalInfo.sodium && (
                        <div>Sodio: {product.nutritionalInfo.sodium}</div>
                      )}
                      {product.nutritionalInfo.vitaminA && (
                        <div>Vitamina A: {product.nutritionalInfo.vitaminA}</div>
                      )}
                      {product.nutritionalInfo.vitaminD && (
                        <div>Vitamina D: {product.nutritionalInfo.vitaminD}</div>
                      )}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
