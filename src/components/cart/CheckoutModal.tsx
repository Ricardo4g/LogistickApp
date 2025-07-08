
import React, { useState } from 'react';
import { useCart } from '../../contexts/CartContext';
import { useAuth } from '../../contexts/AuthContext';
import { Button } from '../ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { Label } from '../ui/label';
import { toast } from 'sonner';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOrderConfirmed: () => void;
}

export function CheckoutModal({ isOpen, onClose, onOrderConfirmed }: CheckoutModalProps) {
  const { cart, getTotal, clearCart } = useCart();
  const { company, user } = useAuth();
  const [paymentMethod, setPaymentMethod] = useState<'transfer' | 'cash_on_delivery'>('transfer');
  const [deliveryMethod, setDeliveryMethod] = useState<'local' | 'shipping'>('local');
  const [isProcessing, setIsProcessing] = useState(false);

  if (!company || !cart) return null;

  const total = getTotal();

  const handleConfirmOrder = async () => {
    setIsProcessing(true);
    
    // Simulación de procesamiento del pedido
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // En una aplicación real, aquí se enviaría el pedido al backend
      console.log('Pedido confirmado:', {
        items: cart.items,
        total,
        paymentMethod,
        deliveryMethod,
        user: user?.email
      });
      
      clearCart();
      toast.success('¡Pedido confirmado! Te contactaremos pronto para confirmar los detalles.');
      onOrderConfirmed();
    } catch (error) {
      toast.error('Error al procesar el pedido. Inténtalo de nuevo.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Finalizar Compra</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Resumen del pedido */}
          <div>
            <h3 className="font-semibold mb-3">Resumen del Pedido</h3>
            <div className="bg-gray-50 p-4 rounded-lg space-y-2">
              {cart.items.map((item) => {
                const price = user 
                  ? item.product.prices.find(p => p.clientType === user.clientType)?.price || item.product.publicPrice || 0
                  : item.product.publicPrice || 0;
                
                return (
                  <div key={item.product.id} className="flex justify-between">
                    <span>{item.product.name} x{item.quantity}</span>
                    <span>${(price * item.quantity).toLocaleString()}</span>
                  </div>
                );
              })}
              <div className="border-t pt-2 font-semibold flex justify-between">
                <span>Total:</span>
                <span>${total.toLocaleString()}</span>
              </div>
            </div>
          </div>
          
          {/* Método de pago */}
          <div>
            <h3 className="font-semibold mb-3">Método de Pago</h3>
            <RadioGroup value={paymentMethod} onValueChange={(value: any) => setPaymentMethod(value)}>
              {company.paymentMethods.includes('transfer') && (
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="transfer" id="transfer" />
                  <Label htmlFor="transfer">Transferencia Bancaria</Label>
                </div>
              )}
              {company.paymentMethods.includes('cash_on_delivery') && (
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="cash_on_delivery" id="cash_on_delivery" />
                  <Label htmlFor="cash_on_delivery">Pago Contra Entrega</Label>
                </div>
              )}
            </RadioGroup>
          </div>
          
          {/* Método de entrega */}
          <div>
            <h3 className="font-semibold mb-3">Método de Entrega</h3>
            <RadioGroup value={deliveryMethod} onValueChange={(value: any) => setDeliveryMethod(value)}>
              {company.deliveryMethods.includes('local') && company.city && (
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="local" id="local" />
                  <Label htmlFor="local">Entrega Local en {company.city}</Label>
                </div>
              )}
              {company.deliveryMethods.includes('shipping') && (
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="shipping" id="shipping" />
                  <Label htmlFor="shipping">Envío por Paquetería</Label>
                </div>
              )}
            </RadioGroup>
          </div>
          
          {/* Botones de acción */}
          <div className="flex space-x-3">
            <Button variant="outline" onClick={onClose} className="flex-1">
              Cancelar
            </Button>
            <Button
              onClick={handleConfirmOrder}
              disabled={isProcessing}
              className="flex-1"
              style={{ backgroundColor: company.primaryColor }}
            >
              {isProcessing ? 'Procesando...' : 'Confirmar Pedido'}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
