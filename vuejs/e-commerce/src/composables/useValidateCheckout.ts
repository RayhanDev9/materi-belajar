import { reactive } from "vue";
import type { CustomerData } from "@/views/checkout/components/CheckoutCustomerForm.vue";

export function useValidateCheckout() {
  // 1. State errors dikelola di dalam composable ini
  const errors = reactive<Record<string, string>>({});

  // 2. Fungsi validasi menerima data customer yang ingin diperiksa
  const validate = (customer: CustomerData): boolean => {
    let isValid = true;

    // Reset error sebelumnya
    errors.name = "";
    errors.phone = "";
    errors.address = "";

    // Validasi Nama
    if (!customer.name.trim()) {
      errors.name = "Nama penerima wajib diisi";
      isValid = false;
    }

    // Validasi Nomor HP / WhatsApp
    if (!customer.phone.trim()) {
      errors.phone = "Nomor WhatsApp / HP wajib diisi";
      isValid = false;
    } else if (!/^[0-9+]{8,15}$/.test(customer.phone.replace(/[-\s]/g, ""))) {
      errors.phone = "Format nomor telepon tidak valid";
      isValid = false;
    }

    // Validasi Alamat
    if (!customer.address.trim()) {
      errors.address = "Alamat lengkap pengiriman wajib diisi";
      isValid = false;
    }

    return isValid;
  };

  // 3. Kembalikan variabel & fungsi agar bisa dipakai komponen
  return {
    errors,
    validate,
  };
}

export default useValidateCheckout;
